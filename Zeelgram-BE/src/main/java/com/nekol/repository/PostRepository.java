package com.nekol.repository;

import com.nekol.domain.dto.PostDTO;
import com.nekol.domain.entity.PostEntity;
import com.nekol.domain.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PostRepository extends JpaRepository<PostEntity, Long> {
    List<PostEntity> findByUser(UserEntity user);
    List<PostEntity> getAllByOrderByCreatedDateDesc();
}
