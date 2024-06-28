package com.nekol.payload.response;

import com.cloudinary.Api;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
public class ApiResponse {

    private int status;
    private Object message;

    public ApiResponse(int status, Object object) {
        this.status = status;
        this.message = object;
    }

    public ApiResponse(Object object) {
        this.message = object;
    }
    public ApiResponse() {}



}
