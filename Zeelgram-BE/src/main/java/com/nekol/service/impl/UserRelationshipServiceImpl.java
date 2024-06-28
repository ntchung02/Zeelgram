package com.nekol.service.impl;

import com.nekol.domain.dto.UserDTO;
import com.nekol.domain.entity.UserEntity;
import com.nekol.domain.entity.UserRelationshipEntity;
import com.nekol.repository.UserRelationshipRepository;
import com.nekol.service.UserRelationshipService;
import com.nekol.service.mapper.UserMapper;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class UserRelationshipServiceImpl implements UserRelationshipService {

    private final UserRelationshipRepository userRelationshipRepository;
    private final UserMapper userMapper;

    @Override
    public void follow(UserEntity currentUser, UserEntity following) {
        UserRelationshipEntity relationship = new UserRelationshipEntity();
        relationship.setUser(currentUser);
        relationship.setFollowing(following);
        userRelationshipRepository.save(relationship);
    }

    @Override
    @Transactional
    public void unfollow(UserEntity currentUser, UserEntity following) {
        userRelationshipRepository.deleteByUserAndFollowing(currentUser, following);
    }

    @Override
    public List<UserDTO> getFollowers(UserEntity user) {
        List<UserRelationshipEntity> relationships = userRelationshipRepository.findByFollowing(user);
        return relationships.stream().map(UserRelationshipEntity::getUser).collect(Collectors.toList())
                .stream().map(u -> userMapper.toDTO(u)).collect(Collectors.toList());
    }

    @Override
    public List<UserDTO> getFollowing(UserEntity user) {
        List<UserRelationshipEntity> relationships = userRelationshipRepository.findByUser(user);
        return relationships.stream().map(UserRelationshipEntity::getUser).collect(Collectors.toList())
                .stream().map(u -> userMapper.toDTO(u)).collect(Collectors.toList());
    }

    @Override
    public boolean isFollowing(UserEntity currentUser, UserEntity following) {
        return userRelationshipRepository.existsByUserAndFollowing(currentUser, following);
    }
}
