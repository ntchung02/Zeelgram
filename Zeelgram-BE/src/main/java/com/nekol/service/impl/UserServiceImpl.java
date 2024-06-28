package com.nekol.service.impl;

import com.nekol.domain.entity.UserEntity;
import com.nekol.repository.UserRepository;
import com.nekol.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    @Override
    public UserEntity findById(Long userId) {
        return userRepository.findById(userId).orElse(null);
    }

    @Override
    public UserEntity findByUsername(String userName) {
        return userRepository.findByUsername(userName).orElse(null);
    }
}
