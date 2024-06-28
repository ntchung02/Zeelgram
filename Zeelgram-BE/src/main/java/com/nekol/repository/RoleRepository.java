package com.nekol.repository;

import com.nekol.domain.entity.RoleEntity;
import com.nekol.domain.entity.UserEntity;
import com.nekol.domain.enumeration.ERole;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<RoleEntity, Long> {
    RoleEntity findByName(ERole eRole);
}
