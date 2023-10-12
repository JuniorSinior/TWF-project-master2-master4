package com.twf.backend.yohan.dto;

import com.twf.backend.yohan.entity.ReviewEntity;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class ReviewDTO {
    private Long id;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private Long userId;
    private String restaurantName;
    private String userEmail; // 추가: 리뷰를 작성한 사용자의 이메일
    private String content;

    public static ReviewDTO toReviewDTO(ReviewEntity reviewEntity) {
        ReviewDTO reviewDTO = new ReviewDTO();
        reviewDTO.setId(reviewEntity.getId());
        reviewDTO.setCreatedAt(reviewEntity.getCreatedAt());
        reviewDTO.setUpdatedAt(reviewEntity.getUpdatedAt());
        reviewDTO.setUserId(reviewEntity.getUser().getId());
        reviewDTO.setRestaurantName(reviewEntity.getRestaurant().getTitle());
        reviewDTO.setUserEmail(reviewEntity.getUser().getEmail()); // 추가: 사용자 이메일 설정
        reviewDTO.setContent(reviewEntity.getContent());
        return reviewDTO;
    }
}
