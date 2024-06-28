package com.nekol.service;

import com.nekol.domain.entity.UserEntity;

public interface UserService {

    UserEntity findById(Long userId);
    UserEntity findByUsername(String userName);
}
