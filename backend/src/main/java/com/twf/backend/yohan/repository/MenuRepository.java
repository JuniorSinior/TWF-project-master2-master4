package com.twf.backend.yohan.repository;

import com.twf.backend.yohan.entity.MenuEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MenuRepository extends JpaRepository<MenuEntity, Long> {
    List<MenuEntity> findByRestaurantId(Long restaurantId);
    // ... (기타 필요한 메서드)
}
