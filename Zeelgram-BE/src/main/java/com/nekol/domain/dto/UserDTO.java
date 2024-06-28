package com.nekol.domain.dto;

import com.nekol.domain.entity.RoleEntity;
import com.nekol.domain.entity.UserProfileEntity;
import com.nekol.payload.request.RegisterRequest;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.time.Instant;
import java.time.LocalDate;
import java.util.List;
import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDTO {

    private Long id;
    private String username;
    private String password;
    private String email;
    private boolean enable;
    private UserProfileDTO userProfile;

    private List<UserDTO> followings;
    private List<UserDTO> followers;

    public UserDTO(RegisterRequest request) {
        this.username = request.getUsername();
        this.email = request.getEmail();
    }


}
