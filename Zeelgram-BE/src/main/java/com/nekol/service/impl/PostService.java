package com.nekol.service.impl;

import com.nekol.domain.dto.PostDTO;
import com.nekol.domain.entity.PostEntity;
import com.nekol.domain.entity.UserEntity;
import com.nekol.payload.request.PostRequest;
import com.nekol.repository.PostRepository;
import com.nekol.repository.UserRepository;
import com.nekol.service.ICloudinaryService;
import com.nekol.service.mapper.PostMapper;
import lombok.AllArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class PostService implements com.nekol.service.IPostService {

    private final PostRepository postRepository;
    private final PostMapper postMapper;
    private final UserRepository userRepository;

    private final ICloudinaryService cloudinaryService;

    @Override
    public List<PostDTO> getAllPosts() {
        List<PostEntity> posts = postRepository.getAllByOrderByCreatedDateDesc();
        return posts.stream()
                .map(postMapper::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    public PostDTO getPostById(Long id) {
        PostEntity entity = postRepository.findById(id).orElse(null);
        return postMapper.toDTO(entity);
    }

    @Override
    public PostDTO createPost(PostRequest request) {

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();

        UserEntity userEntity = userRepository.findById(userDetails.getId()).orElseThrow();

        String urlMedia = cloudinaryService.uploadMedia(request.getMedia());

        PostDTO postDTO = new PostDTO(request);
        postDTO.setMedia(urlMedia);

        PostEntity postEntity = postMapper.toEntity(postDTO);
        postEntity.setUser(userEntity);

        postRepository.save(postEntity);

        postDTO = postMapper.toDTO(postEntity);

        return postDTO;
    }

    @Override
    public PostDTO updatePost(Long id, PostRequest request) {
        PostEntity postEntity = postRepository.findById(id).orElse(null);

        PostDTO postDTO = new PostDTO(request);

        String urlMedia = cloudinaryService.uploadMedia(request.getMedia());
        postDTO.setMedia(urlMedia);

        if (postEntity != null) {
            postEntity.setMedia(postDTO.getMedia());
            postEntity.setCaption(postDTO.getCaption());

            postRepository.save(postEntity);

            postDTO = postMapper.toDTO(postEntity);
        }

        return postDTO;
    }

    @Override
    public void deletePost(Long id) {
        postRepository.deleteById(id);
    }

    @Override
    public List<PostDTO> getPostsByUser(String username) {
        UserEntity userEntity = userRepository.findByUsername(username).orElse(null);

        List<PostEntity> postEntities = postRepository.findByUser(userEntity);
        List<PostDTO> postDTOS = postEntities.stream()
                .map(postMapper::toDTO)
                .collect(Collectors.toList());

        return postDTOS;
    }
}
