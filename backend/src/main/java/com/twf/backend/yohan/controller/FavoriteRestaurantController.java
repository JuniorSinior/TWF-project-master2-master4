package com.twf.backend.yohan.controller;

import com.twf.backend.yohan.dto.FavoriteResponseDTO;
import com.twf.backend.yohan.service.FavoriteRestaurantService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequiredArgsConstructor
@RequestMapping("/api")

public class FavoriteRestaurantController {
    final private FavoriteRestaurantService favoriteRestaurantService;

    @PostMapping("/add-to-favorites/{userId}/{restaurantId}")
    public ResponseEntity<String> addToFavorites(
            @PathVariable Long userId,
            @PathVariable Long restaurantId
    ) {
        // 서비스 메서드 호출
        favoriteRestaurantService.addToFavorites(userId, restaurantId);
        return ResponseEntity.ok("관심 가게가 추가되었습니다.");
    }

    @PostMapping("/remove-from-favorites/{userId}/{restaurantId}")
    public ResponseEntity<String> removeFromFavorites(
            @PathVariable Long userId,
            @PathVariable Long restaurantId
    ) {
        // 서비스 메서드 호출
        favoriteRestaurantService.removeFromFavorites(userId, restaurantId);
        return ResponseEntity.ok("관심 가게가 제거되었습니다.");
    }
    @GetMapping("/{userId}/favorites")
    public ResponseEntity<List<FavoriteResponseDTO>> getUserFavorites(@PathVariable Long userId) {
        List<FavoriteResponseDTO> userFavorites = favoriteRestaurantService.getUserFavorites(userId);
        return ResponseEntity.ok(userFavorites);
    }

}

