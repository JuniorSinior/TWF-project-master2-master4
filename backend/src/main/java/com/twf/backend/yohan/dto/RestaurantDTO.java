package com.twf.backend.yohan.dto;

import com.twf.backend.yohan.entity.RestaurantEntity;
import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class RestaurantDTO {
    private Long id;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private String address;
    private String foodType;
    private String phone;
    private BigDecimal price;
    private String title;

    public static RestaurantDTO toRestaurantDTO(RestaurantEntity restaurantEntity) {
        RestaurantDTO restaurantDTO = new RestaurantDTO();
        restaurantDTO.setId(restaurantEntity.getId());
        restaurantDTO.setCreatedAt(restaurantEntity.getCreatedAt());
        restaurantDTO.setUpdatedAt(restaurantEntity.getUpdatedAt());
        restaurantDTO.setAddress(restaurantEntity.getAddress());
        restaurantDTO.setFoodType(restaurantEntity.getFoodType());
        restaurantDTO.setPhone(restaurantEntity.getPhone());
        restaurantDTO.setPrice(restaurantEntity.getPrice());
        restaurantDTO.setTitle(restaurantEntity.getTitle());
        return restaurantDTO;
    }

}
