package com.nekol.service.impl;

import com.nekol.domain.entity.RoleEntity;
import com.nekol.domain.enumeration.ERole;
import com.nekol.repository.RoleRepository;
import com.nekol.service.IDataLoaderService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class DataLoaderService implements IDataLoaderService {

    private final RoleRepository roleRepository;


    @Override
    public void run(String... args) throws Exception {

        RoleEntity roleUser = roleRepository.findByName(ERole.ROLE_USER);
        RoleEntity roleMod = roleRepository.findByName(ERole.ROLE_MODERATOR);
        RoleEntity roleAdmin = roleRepository.findByName(ERole.ROLE_ADMIN);

        if (roleUser == null) {
            RoleEntity newRoleUser = new RoleEntity();
            newRoleUser.setName(ERole.ROLE_MODERATOR);
            roleRepository.save(newRoleUser);
        }

        if (roleMod == null) {
            RoleEntity newRoleMode = new RoleEntity();
            newRoleMode.setName(ERole.ROLE_USER);
            roleRepository.save(newRoleMode);
        }

        if (roleAdmin == null) {
            RoleEntity newRoleAdmin = new RoleEntity();
            newRoleAdmin.setName(ERole.ROLE_ADMIN);
            roleRepository.save(newRoleAdmin);
        }


    }
}
