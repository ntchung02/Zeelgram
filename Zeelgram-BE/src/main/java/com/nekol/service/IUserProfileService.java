package com.nekol.service;

import com.nekol.domain.dto.UserDTO;
import com.nekol.domain.dto.UserProfileDTO;
import com.nekol.domain.entity.UserProfileEntity;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Optional;

public interface IUserProfileService {

    Optional<UserProfileEntity> getUserProfileByUserId(Long userId);
    UserProfileDTO saveUserProfile(UserProfileDTO userProfileDTO);
    List<UserProfileDTO> getAllUserProfiles();
    Optional<UserProfileDTO> getUserProfileById(Long id);
    UserDTO updateUserProfile(MultipartFile file, Long id);

    void deleteUserProfile(Long id);
}
