package com.nekol.exception;

public class OtherUploadException extends RuntimeException {
    public OtherUploadException(String message, Throwable cause) {
        super(message, cause);
    }
}