package com.nekol.service;

import com.nekol.domain.entity.RoleEntity;
import com.nekol.domain.enumeration.ERole;

public interface IRoleService {
    RoleEntity findByName(ERole eRole);
}
