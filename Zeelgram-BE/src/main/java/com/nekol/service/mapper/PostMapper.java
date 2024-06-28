package com.nekol.service.mapper;

import com.nekol.domain.dto.PostDTO;
import com.nekol.domain.entity.PostEntity;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.stream.Collectors;

@Component
@AllArgsConstructor
public class PostMapper {

    private final UserMapper userMapper;
    private final LikeMapper likeMapper;
    private final CommentMapper commentMapper;

    public PostEntity toEntity(PostDTO dto) {
        PostEntity entity = new PostEntity();
        entity.setCaption(dto.getCaption());
        entity.setMedia(dto.getMedia());
        return entity;
    }

    public PostDTO toDTO(PostEntity entity) {
        PostDTO dto = new PostDTO();

        dto.setId(entity.getId());
        dto.setMedia(entity.getMedia());
        dto.setUser(userMapper.toDTO(entity.getUser()));
        dto.setCaption(entity.getCaption());
        dto.setLikes(entity.getLikes().stream().map(likeEntity -> likeMapper.toDTO(likeEntity)).collect(Collectors.toList()));
        dto.setComments(entity.getComments().stream().map(commentEntity -> commentMapper.toDTO(commentEntity)).collect(Collectors.toList()));
        return dto;

    }
}
