package com.nekol.domain.dto;

import com.nekol.domain.entity.CommentEntity;
import com.nekol.domain.entity.LikeEntity;
import com.nekol.domain.entity.UserEntity;
import com.nekol.payload.request.PostRequest;
import jakarta.persistence.*;
import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;

@Data
public class PostDTO {

    private Long id;
    private String caption;

    private UserDTO user;

    private List<LikeDTO> likes = new ArrayList<>();

    private List<CommentDTO> comments = new ArrayList<>();
    private String media;

    public PostDTO(){}

    public PostDTO(PostRequest request) {
        this.caption = request.getCaption();
    }
}
