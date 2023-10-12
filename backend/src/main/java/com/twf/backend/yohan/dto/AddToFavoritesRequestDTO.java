package com.twf.backend.yohan.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AddToFavoritesRequestDTO {
    private Long userId;
    private Long restaurantId;
}
