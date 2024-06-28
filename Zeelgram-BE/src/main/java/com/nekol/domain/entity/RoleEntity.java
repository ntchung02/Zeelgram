package com.nekol.domain.entity;

import com.nekol.domain.enumeration.ERole;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@Entity
@Table(name = "roles")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class RoleEntity extends BaseEntity{


    @Enumerated(EnumType.STRING)
    @Column(length = 20, unique = true)
    private ERole name;
}
