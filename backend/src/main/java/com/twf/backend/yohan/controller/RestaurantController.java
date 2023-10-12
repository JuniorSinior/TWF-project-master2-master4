package com.twf.backend.yohan.controller;

import com.twf.backend.yohan.dto.MenuDTO;
import com.twf.backend.yohan.dto.RestaurantDTO;
import com.twf.backend.yohan.service.RestaurantService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class RestaurantController {
    private final RestaurantService restaurantService;

    @GetMapping("/restaurant")
    public ResponseEntity<?> searchRestaurants(@RequestParam String title) {
        List<RestaurantDTO> restaurants = restaurantService.getRestaurantsByTitle(title);
        if (restaurants.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("해당하는 레스토랑이 없습니다.");
        } else {
            return ResponseEntity.ok(restaurants);
        }
    }

    @GetMapping("/restaurant/{id}")
    public ResponseEntity<?> getRestaurantById(@PathVariable Long id) {
        Optional<RestaurantDTO> restaurantOptional = restaurantService.getRestaurantByIdOptional(id);

        if (restaurantOptional.isPresent()) {
            return ResponseEntity.ok(restaurantOptional.get());
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("해당하는 레스토랑을 찾을 수 없습니다.");
        }
    }

    @GetMapping("/menu/{restaurantId}")
    public ResponseEntity<?> getMenusByRestaurantId(@PathVariable Long restaurantId) {
        List<MenuDTO> menuDTOList = restaurantService.getMenusByRestaurantId(restaurantId);
        if (menuDTOList.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("해당 레스토랑의 메뉴가 없습니다.");
        } else {
            return ResponseEntity.ok(menuDTOList);
        }
    }
}
