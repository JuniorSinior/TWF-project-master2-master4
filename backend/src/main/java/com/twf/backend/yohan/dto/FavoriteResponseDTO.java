package com.twf.backend.yohan.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class FavoriteResponseDTO {
    private Long restaurantId;
    private String restaurantName;
    // 다른 관련 정보들을 필요에 따라 추가하세요.
}