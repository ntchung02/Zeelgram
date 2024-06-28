package com.nekol.domain.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;

@Data
@Entity
@Table(name = "profiles")
public class UserProfileEntity extends BaseEntity{

    private String displayName;
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private UserEntity user;
    private String bio;
    private String profilePictureUrl;
    private LocalDate birthday;
    private String phoneNumber;
    private int gender;
}
