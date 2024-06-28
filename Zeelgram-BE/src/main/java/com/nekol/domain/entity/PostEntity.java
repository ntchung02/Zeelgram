package com.nekol.domain.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "posts")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class PostEntity extends BaseEntity {

    @NonNull
    @Column(columnDefinition = "TEXT")
    private String caption;

    //    @ElementCollection
//    @CollectionTable(name = "post_photos", joinColumns = @JoinColumn(name = "post_id"))
    @Column(name = "photo_url")
//    private List<String> photos = new ArrayList<>();
    private String media;

    // User reference
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private UserEntity user;

    // Likes
    @OneToMany(mappedBy = "post", cascade = CascadeType.ALL)
    private List<LikeEntity> likes = new ArrayList<>();

    // Comments
    @OneToMany(mappedBy = "post", cascade = CascadeType.ALL)
    private List<CommentEntity> comments = new ArrayList<>();
}
