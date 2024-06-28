package com.nekol.controller;

import com.nekol.domain.dto.PostDTO;
import com.nekol.payload.request.PostRequest;
import com.nekol.service.IPostService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/posts")
@AllArgsConstructor
public class PostController {

    private final IPostService postService;

    @PostMapping("/create")
    @PreAuthorize("hasRole('USER')")
        public ResponseEntity<?> createPost(@RequestParam("caption") String caption,
                                            @RequestParam("media") MultipartFile media) {
        PostRequest request = new PostRequest(caption, media);
        PostDTO createdPost = postService.createPost(request);
        return new ResponseEntity<>("ok", HttpStatus.CREATED);
    }

    @PostMapping("/update/{postId}")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<PostDTO> updatePost(@PathVariable Long postId, @ModelAttribute PostRequest request) {
        PostDTO createdPost = postService.updatePost(postId, request);
        return new ResponseEntity<>(createdPost, HttpStatus.CREATED);
    }

    @GetMapping("/all")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<List<PostDTO>> getAllPosts() {
        List<PostDTO> posts = postService.getAllPosts();
        return new ResponseEntity<>(posts, HttpStatus.OK);
    }

    @GetMapping("/user/{username}")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<List<PostDTO>> getPostsByUsername(@PathVariable String username) {
        List<PostDTO> posts = postService.getPostsByUser(username);
        return new ResponseEntity<>(posts, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<PostDTO> getPostById(@PathVariable Long id) {
        PostDTO post = postService.getPostById(id);
        if (post != null) {
            return new ResponseEntity<>(post, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<?> deletePostById(@PathVariable Long id) {
        postService.deletePost(id);
        return new ResponseEntity<>("Delete post successfully!!!", HttpStatus.OK);
    }

}
