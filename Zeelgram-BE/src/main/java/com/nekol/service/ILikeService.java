package com.nekol.service;

import com.nekol.domain.dto.LikeDTO;

import java.util.List;

public interface ILikeService {

    void like(Long postId);
    List<LikeDTO> findByPostId(Long postId);
}
