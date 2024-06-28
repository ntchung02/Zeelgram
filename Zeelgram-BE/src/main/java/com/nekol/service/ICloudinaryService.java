package com.nekol.service;

import org.springframework.web.multipart.MultipartFile;

public interface ICloudinaryService {
    String uploadMedia(MultipartFile file);
}
