package com.nekol.service;

import com.nekol.domain.dto.UserDTO;
import com.nekol.domain.entity.UserEntity;
import com.nekol.domain.entity.UserRelationshipEntity;

import java.util.List;

public interface UserRelationshipService {

    void follow(UserEntity currentUser, UserEntity following);
    void unfollow(UserEntity currentUser, UserEntity following);

    List<UserDTO> getFollowers(UserEntity currentUser);
    List<UserDTO> getFollowing(UserEntity currentUser);

    boolean isFollowing(UserEntity currentUser, UserEntity following);
}
