package com.twf.backend.yohan.repository;

import com.twf.backend.yohan.entity.MemberEntity;
import com.twf.backend.yohan.entity.RestaurantEntity;
import com.twf.backend.yohan.entity.ReviewEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReviewRepository extends JpaRepository<ReviewEntity, Long> {
    List<ReviewEntity> findByUserAndRestaurant(MemberEntity user, RestaurantEntity restaurant);
    List<ReviewEntity> findByRestaurantId(Long restaurantId); // 추가: 레스토랑 ID로 리뷰 목록 가져오기

    List<ReviewEntity> findByUserId(Long userId);
}
