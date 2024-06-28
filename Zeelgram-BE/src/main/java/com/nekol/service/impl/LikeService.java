package com.nekol.service.impl;

import com.nekol.domain.dto.LikeDTO;
import com.nekol.domain.entity.LikeEntity;
import com.nekol.domain.entity.PostEntity;
import com.nekol.domain.entity.UserEntity;
import com.nekol.repository.LikeRepository;
import com.nekol.repository.PostRepository;
import com.nekol.repository.UserRepository;
import com.nekol.service.mapper.LikeMapper;
import lombok.AllArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class LikeService implements com.nekol.service.ILikeService {

    private final PostRepository postRepository;
    private final UserRepository userRepository;
    private final LikeRepository likeRepository;
    private final LikeMapper likeMapper;

    @Override
    public void like(Long postId) {
        PostEntity postEntity = postRepository.findById(postId).orElse(null);

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();

        UserEntity userEntity = userRepository.findById(userDetails.getId()).orElseThrow();

        LikeEntity likeEntity = likeRepository.findByPostAndUser(postEntity, userEntity);

        if (likeEntity != null) {
            likeRepository.delete(likeEntity);
        } else {
            likeEntity = new LikeEntity();
            likeEntity.setPost(postEntity);
            likeEntity.setUser(userEntity);

            likeRepository.save(likeEntity);
        }
    }
    @Override
    public List<LikeDTO> findByPostId(Long postId) {
        PostEntity postEntity = postRepository.findById(postId).orElse(null);
        List<LikeEntity> likeEntities = likeRepository.findByPost(postEntity);
        List<LikeDTO> likeDTOS = likeEntities.stream().map(likeEntity -> likeMapper.toDTO(likeEntity)).collect(Collectors.toList());
        return likeDTOS;
    }
}
