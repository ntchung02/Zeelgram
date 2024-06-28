package com.nekol.domain.dto;


import lombok.Data;

@Data
public class LikeDTO {
    private Long id;
    private UserDTO userDTO;
    private PostDTO postDTO;
}
