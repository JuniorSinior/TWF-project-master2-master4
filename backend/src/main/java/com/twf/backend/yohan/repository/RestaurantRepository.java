package com.twf.backend.yohan.repository;

import com.twf.backend.yohan.entity.RestaurantEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface RestaurantRepository extends JpaRepository<RestaurantEntity,Long> {
    Optional<RestaurantEntity> findById(Long id);
    List<RestaurantEntity> findByTitleContaining(String title);
    Optional<RestaurantEntity> findByTitle(String title);
}


