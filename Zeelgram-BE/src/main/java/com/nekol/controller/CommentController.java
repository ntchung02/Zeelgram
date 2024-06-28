package com.nekol.controller;

import com.nekol.domain.dto.PostDTO;
import com.nekol.payload.request.CommentRequest;
import com.nekol.service.ICommentService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/comment")
@AllArgsConstructor
public class CommentController {

    private final ICommentService commentService;

    @PostMapping("/{postId}")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<PostDTO> like(@PathVariable Long  postId, @RequestBody CommentRequest request) {
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
}
