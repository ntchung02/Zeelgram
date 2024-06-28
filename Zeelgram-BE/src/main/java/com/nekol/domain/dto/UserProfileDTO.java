package com.nekol.domain.dto;

import lombok.Data;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Data
public class UserProfileDTO {

    private Long id;
    private String displayName;
    private String bio;
    private String profilePictureUrl;
    private LocalDate birthday;
    private String phoneNumber;
    private int gender;
}
