package com.nekol.controller;

import com.nekol.domain.dto.UserDTO;
import com.nekol.domain.entity.UserEntity;
import com.nekol.service.UserRelationshipService;
import com.nekol.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/user")
@AllArgsConstructor
public class UserRelationshipController {

    private final UserRelationshipService userRelationshipService;
    private final UserService userService;

    @PostMapping("/follow/{followingId}")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<?> followUser(@PathVariable Long followingId, Principal principal) {
        UserEntity currentUser = userService.findByUsername(principal.getName());
        UserEntity followingUser = userService.findById(followingId);

        if (followingUser == null) {
            return ResponseEntity.notFound().build();
        }
            userRelationshipService.follow(currentUser, followingUser);
        return ResponseEntity.ok().build();
    }
    @PostMapping("/unfollow/{followingId}")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<?> unfollow(@PathVariable Long followingId, Principal principal) {
        UserEntity currentUser = userService.findByUsername(principal.getName());
        UserEntity followingUser = userService.findById(followingId);

        if (followingUser == null) {
            return ResponseEntity.notFound().build();
        }
        userRelationshipService.unfollow(currentUser, followingUser);
        return ResponseEntity.ok().build();
    }


    @GetMapping("/followers")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<List<UserDTO>> getFollowers(Principal principal) {
        UserEntity currentUser = userService.findByUsername(principal.getName());
        List<UserDTO> followers = userRelationshipService.getFollowers(currentUser);
        return ResponseEntity.ok(followers);
    }

    @GetMapping("/followings")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<List<UserDTO>> getFollowings(Principal principal) {
        UserEntity currentUser = userService.findByUsername(principal.getName());
        List<UserDTO> followings = userRelationshipService.getFollowing(currentUser);
        return ResponseEntity.ok(followings);
    }

    @GetMapping("/is-following/{followingId}")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<?> isFollowing(@PathVariable Long followingId, Principal principal) {
        UserEntity currentUser = userService.findByUsername(principal.getName());
        UserEntity followingUser = userService.findById(followingId);

        if (followingUser == null) {
            return ResponseEntity.notFound().build();
        }

        boolean isFollowing = userRelationshipService.isFollowing(currentUser, followingUser);
        return ResponseEntity.ok(isFollowing);
    }
}
