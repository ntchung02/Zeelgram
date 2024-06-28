package com.nekol.controller;

import com.nekol.domain.dto.UserDTO;
import com.nekol.payload.request.UserProfileRequest;
import com.nekol.payload.response.ApiResponse;
import com.nekol.service.IAuthService;
import com.nekol.service.IUserProfileService;
import com.nekol.service.impl.AuthService;
import com.nekol.service.impl.UserDetails;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api")
@AllArgsConstructor
public class UserProfileController {

    private final IUserProfileService userProfileService;
    private final IAuthService authService;
    private static final Logger logger = LoggerFactory.getLogger(AuthService.class);

    @GetMapping("/{username}")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<?> getCurrentUser(@PathVariable("username") String username) {
        logger.info("retrieving user {}", username);
        UserDTO result = authService.findByUsername(username);
        return ResponseEntity.ok(result);
    }

    @PutMapping("/{username}/picture")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<?> updateProfilePicture(@RequestParam("file") MultipartFile file,
                                                  @AuthenticationPrincipal UserDetails userDetails) {
        Long userId = userDetails.getId();

        UserDTO userDTO = userProfileService.updateUserProfile(file, userId);
        return ResponseEntity.ok().body(new ApiResponse(200, "Profile picture updated successfully"));

    }

    @PostMapping("/{username}")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<?> updateProfile(@Valid UserProfileRequest userProfileRequest,
                                           @AuthenticationPrincipal UserDetails userDetails) {
        String loggedInUsername = userDetails.getUsername();
        if (!loggedInUsername.equals(userProfileRequest.getUsername())) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(new ApiResponse(403, "You are not authorized to update this profile"));
        }

        return ResponseEntity.ok(new ApiResponse(200, "Profile updated successfully."));
    }
}
