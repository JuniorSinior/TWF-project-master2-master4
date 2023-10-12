//package com.twf.backend.yohan.controller;
//
//import lombok.RequiredArgsConstructor;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//@CrossOrigin(origins = "http://localhost:3000")
//@RestController
//@RequiredArgsConstructor
//@RequestMapping("/api")
//public class MyFavoriteController {
//    @GetMapping("/user/{userId}/favorites")
//    public ResponseEntity<List<FavoriteRestaurantDTO>> getUserFavorites(@PathVariable Long userId) {
//        List<FavoriteRestaurantDTO> userFavorites = favoriteRestaurantService.getUserFavorites(userId);
//        return ResponseEntity.ok(userFavorites);
//}
