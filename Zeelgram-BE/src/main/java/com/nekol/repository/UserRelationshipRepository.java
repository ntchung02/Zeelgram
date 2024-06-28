package com.nekol.repository;

import com.nekol.domain.entity.UserEntity;
import com.nekol.domain.entity.UserRelationshipEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRelationshipRepository extends JpaRepository<UserRelationshipEntity, Long> {
    List<UserRelationshipEntity> findByUser(UserEntity user);
    List<UserRelationshipEntity> findByFollowing(UserEntity user);
    void deleteByUserAndFollowing(UserEntity user, UserEntity following);
    boolean existsByUserAndFollowing(UserEntity user, UserEntity following);
}
