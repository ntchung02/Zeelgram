package com.nekol.service.impl;

import com.nekol.domain.dto.UserDTO;
import com.nekol.domain.dto.UserProfileDTO;
import com.nekol.domain.entity.UserEntity;
import com.nekol.domain.entity.UserProfileEntity;
import com.nekol.repository.UserProfileRepository;
import com.nekol.repository.UserRepository;
import com.nekol.service.ICloudinaryService;
import com.nekol.service.mapper.UserMapper;
import lombok.AllArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class UserProfileService implements com.nekol.service.IUserProfileService {
    private static final Logger logger = LoggerFactory.getLogger(AuthService.class);

    private final UserProfileRepository userProfileRepository;
    private final UserRepository userRepository;
    private final ICloudinaryService cloudinaryService;
    private final UserMapper userMapper;

    @Override
    public Optional<UserProfileEntity> getUserProfileByUserId(Long userId) {
        Optional<UserProfileEntity> userProfile = userProfileRepository.findByUserId(userId);
        return userProfile;
    }

    @Override
    public UserProfileDTO saveUserProfile(UserProfileDTO userProfileDTO) {
        return null;
    }

    @Override
    public List<UserProfileDTO> getAllUserProfiles() {
        return null;
    }

    @Override
    public Optional<UserProfileDTO> getUserProfileById(Long id) {
        return Optional.empty();
    }

    @Override
    public UserDTO updateUserProfile(MultipartFile file, Long id) {
        logger.info("update profile picture {} for user {}", file.getOriginalFilename());

        UserEntity userEntity = userRepository.findById(id).orElse(null);
        String newUserProfileUrl = cloudinaryService.uploadMedia(file);
        userEntity.getUserProfile().setProfilePictureUrl(newUserProfileUrl);

        userRepository.save(userEntity);

        UserDTO userDTO = userMapper.toDTO(userEntity);
        return userDTO;
    }

    @Override
    public void deleteUserProfile(Long id) {

    }
}
