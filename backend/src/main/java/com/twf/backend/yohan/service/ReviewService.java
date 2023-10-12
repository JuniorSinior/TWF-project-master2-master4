package com.twf.backend.yohan.service;

import com.twf.backend.yohan.dto.ReviewDTO;
import com.twf.backend.yohan.entity.MemberEntity;
import com.twf.backend.yohan.entity.RestaurantEntity;
import com.twf.backend.yohan.entity.ReviewEntity;
import com.twf.backend.yohan.repository.MemberRepository;
import com.twf.backend.yohan.repository.RestaurantRepository;
import com.twf.backend.yohan.repository.ReviewRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ReviewService {
    private final ReviewRepository reviewRepository;
    private final MemberRepository memberRepository;
    private final RestaurantRepository restaurantRepository;

    public List<ReviewDTO> getReviewsByRestaurantId(Long restaurantId) {
        List<ReviewEntity> reviewEntities = reviewRepository.findByRestaurantId(restaurantId);
        return reviewEntities.stream()
                .map(ReviewDTO::toReviewDTO)
                .collect(Collectors.toList());
    }

    public void addReview(ReviewDTO reviewDTO) {
        MemberEntity user = memberRepository.findById(reviewDTO.getUserId()).orElse(null);

        // 변경: restaurantId 대신 restaurantName을 사용하여 음식점을 찾음
        RestaurantEntity restaurant = restaurantRepository.findByTitle(reviewDTO.getRestaurantName()).orElse(null);

        if (user == null || restaurant == null) {
            throw new IllegalArgumentException("사용자 또는 레스토랑을 찾을 수 없습니다.");
        }

        ReviewEntity reviewEntity = new ReviewEntity();
        reviewEntity.setUser(user);
        reviewEntity.setRestaurant(restaurant);
        reviewEntity.setContent(reviewDTO.getContent());

        reviewRepository.save(reviewEntity);
    }

    public List<ReviewDTO> getReviewsByUserId(Long userId) {
        List<ReviewEntity> reviewEntities = reviewRepository.findByUserId(userId);
        return reviewEntities.stream()
                .map(ReviewDTO::toReviewDTO)
                .collect(Collectors.toList());
    }
}
