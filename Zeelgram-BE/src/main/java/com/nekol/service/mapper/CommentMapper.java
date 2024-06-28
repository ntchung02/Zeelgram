package com.nekol.service.mapper;

import com.nekol.domain.dto.CommentDTO;
import com.nekol.domain.entity.CommentEntity;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class CommentMapper {

    public CommentDTO toDTO(CommentEntity entity) {
        CommentDTO dto = new CommentDTO();

        return dto;
    }
}
