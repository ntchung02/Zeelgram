package com.nekol.service.impl;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import com.nekol.exception.OtherUploadException;
import com.nekol.exception.UploadFailedException;
import com.nekol.service.ICloudinaryService;
import lombok.AllArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Map;

@Service
@AllArgsConstructor
public class CloudinaryService implements ICloudinaryService {

    private final Cloudinary cloudinary;
    private static final Logger logger = LoggerFactory.getLogger(AuthService.class);

    @Override
    public String uploadMedia(MultipartFile file) {
        try {
            logger.info("Uploading media: " + file.getOriginalFilename());

            Map uploadResult = cloudinary.uploader().upload(file.getBytes(), ObjectUtils.emptyMap());
            logger.info("Upload media successfully!: " + file.getOriginalFilename());

            return uploadResult.get("url").toString();
        } catch (IOException e) {
            logger.error("Failed to upload media: " + file.getName() + ", Error at: " + e.getMessage());
            throw new UploadFailedException("Failed to upload image", e);
        } catch (Exception e) {
            logger.error("Failed to upload media: " + file.getName() + ", Error at: " + e.getMessage());
            throw new OtherUploadException("Failed to upload image", e);
        }
    }
}
