package com.nekol.security.token;

import jakarta.persistence.EntityManager;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
public class ConfirmationTokenService {

    private final ConfirmationTokenRepository confirmationTokenRepository;

    public ConfirmationTokenService(ConfirmationTokenRepository confirmationTokenRepository) {
        this.confirmationTokenRepository = confirmationTokenRepository;
    }
    public void saveOrUpdate(ConfirmationToken confirmationToken) {
        Optional<ConfirmationToken> existingTokenOpt = confirmationTokenRepository.findByUserEntity(confirmationToken.getUserEntity());
        if (existingTokenOpt.isPresent()) {
            ConfirmationToken existingToken = existingTokenOpt.get();
            existingToken.setToken(confirmationToken.getToken());
            existingToken.setCreatedAt(confirmationToken.getCreatedAt());
            existingToken.setExpiresAt(confirmationToken.getExpiresAt());
            confirmationTokenRepository.save(existingToken);
        } else {
            confirmationTokenRepository.save(confirmationToken);
        }
    }

    public Optional<ConfirmationToken> getToken(String token) {
        return confirmationTokenRepository.findByToken(token);
    }

    public void setConfirmedAt(String token) {
        confirmationTokenRepository.updateConfirmedAt(token, LocalDateTime.now());
    }
}
