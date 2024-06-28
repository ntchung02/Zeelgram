package com.nekol.payload.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class UserProfileRequest {

    @NotBlank
    @Size(min = 3, max = 40)
    private String name;
    @NotBlank
    @Size(min = 3, max = 15)
    private String username;
    private String bio;
    @NotBlank
    @Size(max = 40)
    @Email
    private String email;
    private String phoneNumber;
    private LocalDateTime birthday;
    private int gender;
}
