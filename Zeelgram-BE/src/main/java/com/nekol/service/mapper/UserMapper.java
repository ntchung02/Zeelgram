package com.nekol.service.mapper;

import com.nekol.domain.dto.UserDTO;
import com.nekol.domain.dto.UserProfileDTO;
import com.nekol.domain.entity.UserEntity;
import com.nekol.domain.entity.UserProfileEntity;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class UserMapper {

    private final UserProfileMapper userProfileMapper;

    public UserEntity toEntity(UserDTO dto) {
        UserEntity entity = new UserEntity();
        entity.setUsername(dto.getUsername());
        entity.setPassword(dto.getPassword());
        entity.setEnable(dto.isEnable());
        entity.setEmail(dto.getEmail());

        return entity;
    }

    public UserDTO toDTO(UserEntity entity) {
        UserDTO dto = new UserDTO();

        dto.setId(entity.getId());
        dto.setUsername(entity.getUsername());
        dto.setEmail(entity.getEmail());
        dto.setEnable(entity.isEnable());
        dto.setPassword(null);
        UserProfileEntity userProfileEntity = entity.getUserProfile();
        UserProfileDTO userProfileDTO = userProfileMapper
                .toDTO(userProfileEntity);
        dto.setUserProfile(userProfileDTO);
        return dto;
    }
}
