package com.nekol.service.impl;

import com.nekol.security.jwt.JwtUtils;
import com.nekol.constants.Constants;
import com.nekol.domain.dto.UserDTO;
import com.nekol.domain.entity.RoleEntity;
import com.nekol.domain.entity.UserEntity;
import com.nekol.domain.entity.UserProfileEntity;
import com.nekol.domain.enumeration.ERole;
import com.nekol.domain.model.MailObject;
import com.nekol.exception.EmailAlreadyExistsException;
import com.nekol.exception.EmailInvalidException;
import com.nekol.exception.UsernameAlreadyExistsException;
import com.nekol.payload.response.ApiResponse;
import com.nekol.payload.response.JwtResponse;
import com.nekol.payload.request.LoginRequest;
import com.nekol.payload.request.RegisterRequest;
import com.nekol.repository.UserRepository;
import com.nekol.security.token.ConfirmationToken;
import com.nekol.security.token.ConfirmationTokenService;
import com.nekol.service.IAuthService;
import com.nekol.service.IEmailService;
import com.nekol.service.IRoleService;
import com.nekol.service.UserRelationshipService;
import com.nekol.service.mapper.UserMapper;
import com.nekol.service.validator.EmailValidator;
import lombok.AllArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.*;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class AuthService implements IAuthService {

    private static final Logger log = LoggerFactory.getLogger(AuthService.class);
    private final AuthenticationManager authenticationManager;
    private final PasswordEncoder encoder;
    private final JwtUtils jwtUtils;
    private final UserRepository userRepository;
    private final UserMapper userMapper;
    private final IRoleService IRoleService;
    private final UserRelationshipService userRelationshipService;
    private final ConfirmationTokenService confirmationTokenService;
    private final EmailValidator emailValidator;
    private final IEmailService emailService;

    @Override
    public JwtResponse authenticateUser(LoginRequest request) {
        log.info("Starting authenticate user: " + request.getUsername());

        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication);

        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        List<String> roles = userDetails.getAuthorities().stream().map(GrantedAuthority::getAuthority).collect(Collectors.toList());
        log.info("authenticate user {} successfully!", request.getUsername());
        return new JwtResponse(jwt, userDetails.getId(), userDetails.getUsername(), userDetails.getEmail(), roles);
    }

    @Override
    public ApiResponse registerUser(RegisterRequest request) {
        try {
            log.info("Registering user: {}", request.getUsername());
            boolean isValidEmail = emailValidator.test(request.getEmail());
            if (isValidEmail) {
                boolean userExists = userRepository.findByEmail(request.getEmail()).isPresent();
                if (userExists) {
                    UserEntity userPrevious = userRepository.findByEmail(request.getEmail()).get();
                    boolean isEnable = userPrevious.isEnable();
                    if (userPrevious.getUsername().equals(request.getUsername()) && !isEnable) {
                        String token = this.generateToken();
                        while (!isTokenUnique(token)) {
                            token = this.generateToken();
                        }
                        saveConfirmationCode(userPrevious, token);
                        this.sendConfirmationCode(token, request.getEmail());
                        return new ApiResponse(200, userMapper.toDTO(userPrevious));
                    }

                    log.warn("User with email {} already exists!", request.getEmail());
                    throw new EmailAlreadyExistsException("Email already exists!");
                }

                if (userRepository.existsByUsername(request.getUsername())) {
                    log.warn("User with username {} already exists!", request.getUsername());
                    throw new UsernameAlreadyExistsException("Username already exists!");
                }

                String encodePassword = encoder.encode(request.getPassword());
                UserDTO newUser = createUserDTO(request, encodePassword);
                UserEntity userEntity = userMapper.toEntity(newUser);
                RoleEntity role = IRoleService.findByName(ERole.ROLE_USER);
                userEntity.setRoles(new HashSet<>() {{
                    add(role);
                }});

                UserProfileEntity userProfileEntity = createUserProfileEntity(userEntity, request.getName(), request.getBirthday());
                userEntity.setUserProfile(userProfileEntity);
                userRepository.save(userEntity);
                newUser = userMapper.toDTO(userEntity);

                String token = this.generateToken();
                while (!isTokenUnique(token)) {
                    token = this.generateToken();
                }
                saveConfirmationCode(userEntity, token);
//            String link = "http://localhost:8090/api/v1/registration/confirm?token=" + token;
                this.sendConfirmationCode(token, request.getEmail());
                return new ApiResponse(200, newUser);
            }
            log.error("Email {} , not valid", request.getEmail());
            throw new EmailInvalidException("Email is not valid");
        } catch (Exception e) {
            log.error("Get an error when try to register user {}, error: {}", request.getUsername(), e.getMessage());
            return new ApiResponse(200, e.getMessage());
//            return new ApiResponse(500, "The server had an error while processing your request. Sorry about that!");
        }
    }

    @Override
    public UserDTO findByUsername(String username) {
        UserEntity userEntity = userRepository.findByUsername(username).orElseThrow(() -> new UsernameNotFoundException("User Not Found with username: " + username));
        UserDTO userDTO = userMapper.toDTO(userEntity);
        List<UserDTO> followings = userRelationshipService.getFollowing(userEntity);
        List<UserDTO> followers = userRelationshipService.getFollowers(userEntity);
        userDTO.setFollowers(followers);
        userDTO.setFollowings(followings);

        return userDTO;
    }

    private UserDTO createUserDTO(RegisterRequest request, String encodedPassword) {
        UserDTO newUser = new UserDTO(request);
        newUser.setPassword(encodedPassword);
//        newUser.setEnable(true);
        newUser.setEnable(false);
        return newUser;
    }

    private UserProfileEntity createUserProfileEntity(UserEntity userEntity, String name, LocalDate birthday) {
        UserProfileEntity userProfileEntity = new UserProfileEntity();
        userProfileEntity.setUser(userEntity);
        userProfileEntity.setDisplayName(name);
        userProfileEntity.setProfilePictureUrl(Constants.PROFILE_PICTURE_URL_DEFAULT);
//        userProfileEntity.setBirthday(Constants.DEFAULT_DATE_TIME);
        userProfileEntity.setBirthday(birthday);

        userProfileEntity.setGender(0);
        return userProfileEntity;
    }

    @Override
    public void saveConfirmationCode(UserEntity userEntity, String token) {
        try {
            log.info("Starting to save confirmation code for user {}", userEntity.getUsername());
            ConfirmationToken confirmationToken = new ConfirmationToken(token, LocalDateTime.now(), LocalDateTime.now().plusMinutes(15), userEntity);
            confirmationTokenService.saveOrUpdate(confirmationToken);
            log.info("Save confirmation code for user {} successfully!", userEntity.getUsername());
        } catch (Exception ex) {
            log.error("Get an error when try to save confirmation code with username {}", userEntity.getUsername());
        }
    }

    @Override
    public int activeUser(String email) {
        log.info("Starting to active user has email {}", email);
        return userRepository.activeUser(email);
    }

    @Override
    public ApiResponse confirmToken(String token) {
        Optional<ConfirmationToken> confirmToken = confirmationTokenService.getToken(token);

        if (confirmToken.isEmpty()) {
            log.warn("Token not found!");
            return new ApiResponse(200, "Token not found!");
        }

        if (confirmToken.get().getConfirmedAt() != null) {
            log.warn("Email is already confirmed!");
            return new ApiResponse(200, "Email is already confirmed!");
        }

        LocalDateTime expiresAt = confirmToken.get().getExpiresAt();

        if (expiresAt.isBefore(LocalDateTime.now())) {
            log.warn("Token is already expired!");
            return new ApiResponse(200, "Token is already expired!");
        }

        confirmationTokenService.setConfirmedAt(token);
        activeUser(confirmToken.get().getUserEntity().getEmail());

        log.info("Your email is confirmed. Thank you for using our service!");
        return new ApiResponse(200, "Your email is confirmed. Thank you for using our service!");
    }

    private boolean isTokenUnique(String token) {
        ConfirmationToken existingToken = confirmationTokenService.getToken(token).orElse(null);
        return existingToken == null;
    }

    private String generateToken() {
        Random random = new Random();
        return String.valueOf(random.nextInt(900000) + 100000); // Generates a random number between 100000 and 999999
    }

    private void sendConfirmationCode(String token, String email) {
        Map<String, Object> properties = new HashMap<>();
        properties.put("email", email);
        properties.put("token", token);
        MailObject mail = MailObject.builder()
                .to(email)
                .htmlTemplate(new MailObject.HtmlTemplate("confirmationCode.html", properties))
                .subject(token + " is your Instagram code")
                .build();

        emailService.sendMail(mail);
    }

}
