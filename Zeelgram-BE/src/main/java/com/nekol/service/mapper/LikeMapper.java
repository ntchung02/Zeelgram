package com.nekol.service.mapper;

import com.nekol.domain.dto.LikeDTO;
import com.nekol.domain.entity.LikeEntity;
import com.nekol.domain.entity.UserEntity;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class LikeMapper {

    private final UserMapper userMapper;
//    private final PostMapper postMapper;


    public LikeDTO toDTO(LikeEntity entity) {
        LikeDTO dto = new LikeDTO();
        dto.setId(entity.getId());
//        dto.setUserDTO(userMapper.toDTO(entity.getUser()));
//        dto.setPostDTO(postMapper.toDTO(entity.getPost()));
        return dto;
    }
}
