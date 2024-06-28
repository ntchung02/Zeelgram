package com.nekol.payload.request;

import lombok.Data;
import lombok.NonNull;
import org.springframework.web.multipart.MultipartFile;


@Data
public class PostRequest {

    @NonNull
    private String caption;
    private MultipartFile media;

    public PostRequest(String caption, MultipartFile media) {
        this.media = media;
        this.caption = caption;
    }

}
