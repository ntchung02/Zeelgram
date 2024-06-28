package com.nekol.service.mapper;

import com.nekol.domain.dto.UserProfileDTO;
import com.nekol.domain.entity.UserProfileEntity;
import org.springframework.stereotype.Component;

@Component
public class UserProfileMapper {

    public UserProfileEntity toEntity(UserProfileDTO dto) {
        UserProfileEntity entity = new UserProfileEntity();

        return entity;
    }

    public UserProfileDTO toDTO(UserProfileEntity entity) {
        UserProfileDTO dto = new UserProfileDTO();

        dto.setId(entity.getId());
        dto.setBio(entity.getBio());
        dto.setBirthday(entity.getBirthday());
        dto.setDisplayName(entity.getDisplayName());
        dto.setProfilePictureUrl(entity.getProfilePictureUrl());
        dto.setPhoneNumber(entity.getPhoneNumber());
        dto.setGender(entity.getGender());

        return dto;
    }
}
