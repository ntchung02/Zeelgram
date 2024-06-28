package com.nekol.service.impl;

import com.nekol.domain.entity.RoleEntity;
import com.nekol.domain.enumeration.ERole;
import com.nekol.repository.RoleRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class RoleService implements com.nekol.service.IRoleService {

    private final RoleRepository roleRepository;
    @Override
    public RoleEntity findByName(ERole eRole) {
        return roleRepository.findByName(eRole);
    }
}
