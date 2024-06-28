package com.nekol.controller;

import com.nekol.service.ILikeService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/like")
@AllArgsConstructor
public class LikeController {

    private final ILikeService likeService;


    @PostMapping("/{postId}")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<?> like(@PathVariable Long  postId) {
        likeService.like(postId);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
}
