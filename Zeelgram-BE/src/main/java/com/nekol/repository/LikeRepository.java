package com.nekol.repository;

import com.nekol.domain.entity.LikeEntity;
import com.nekol.domain.entity.PostEntity;
import com.nekol.domain.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LikeRepository extends JpaRepository<LikeEntity, Long> {
    LikeEntity findByPostAndUser(PostEntity postEntity, UserEntity userEntity);
    List<LikeEntity> findByPost(PostEntity postEntity);
}
