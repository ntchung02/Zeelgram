package com.nekol.controller;

import com.nekol.payload.request.LoginRequest;
import com.nekol.payload.request.RegisterRequest;
import com.nekol.payload.response.ApiResponse;
import com.nekol.service.IAuthService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@AllArgsConstructor
public class AuthController {

    private final IAuthService authService;

    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest request) {
        return ResponseEntity.ok().body(authService.authenticateUser(request));
    }

    @PostMapping("/signup")
    public ResponseEntity<ApiResponse> registerUser(@Valid @RequestBody RegisterRequest request) {
        return ResponseEntity.ok().body(authService.registerUser(request));
    }

    @GetMapping("/confirm")
    public ResponseEntity<?> confirm(@RequestParam("token") String token) {
        return ResponseEntity.ok().body(authService.confirmToken(token));
    }

}
