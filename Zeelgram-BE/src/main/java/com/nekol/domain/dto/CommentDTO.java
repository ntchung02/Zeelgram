package com.nekol.domain.dto;

import com.nekol.payload.request.CommentRequest;
import lombok.Data;

@Data
public class CommentDTO {

    private String content;

    public CommentDTO() {

    }

    public CommentDTO(CommentRequest request) {
        this.content = request.getContent();
    }
}
