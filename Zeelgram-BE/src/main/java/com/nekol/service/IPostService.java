package com.nekol.service;

import com.nekol.domain.dto.PostDTO;
import com.nekol.payload.request.PostRequest;

import java.util.List;

public interface IPostService {

    List<PostDTO> getAllPosts();

    PostDTO getPostById(Long id);
    PostDTO createPost(PostRequest request);

    PostDTO updatePost(Long id, PostRequest request);
    void deletePost(Long id);
    List<PostDTO> getPostsByUser(String username);


}
