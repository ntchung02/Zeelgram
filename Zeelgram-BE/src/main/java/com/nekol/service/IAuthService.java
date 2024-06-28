package com.nekol.service;

import com.nekol.domain.dto.UserDTO;
import com.nekol.domain.entity.UserEntity;
import com.nekol.payload.response.ApiResponse;
import com.nekol.payload.response.JwtResponse;
import com.nekol.payload.request.LoginRequest;
import com.nekol.payload.request.RegisterRequest;

public interface IAuthService {
    JwtResponse authenticateUser(LoginRequest request);
    ApiResponse registerUser(RegisterRequest request);
    UserDTO findByUsername(String username);

    void saveConfirmationCode(UserEntity userEntity, String token);
    int activeUser(String email);
    ApiResponse confirmToken(String token);
}
