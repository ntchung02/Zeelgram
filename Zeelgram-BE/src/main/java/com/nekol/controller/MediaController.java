package com.nekol.controller;

import com.nekol.service.ICloudinaryService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/media")
@AllArgsConstructor
public class MediaController {

    private final ICloudinaryService cloudinaryService;

    @PostMapping("/upload")
    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    public ResponseEntity<String> uploadMedia(@RequestParam("file") MultipartFile file) {
        String url = cloudinaryService.uploadMedia(file);
        return ResponseEntity.ok(url);
    }

}
