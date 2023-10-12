package com.twf.backend.yohan.service;

import com.twf.backend.yohan.dto.MenuDTO;
import com.twf.backend.yohan.dto.RestaurantDTO;
import com.twf.backend.yohan.entity.MenuEntity;
import com.twf.backend.yohan.entity.RestaurantEntity;
import com.twf.backend.yohan.repository.MenuRepository;
import com.twf.backend.yohan.repository.RestaurantRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class RestaurantService {
    private final RestaurantRepository restaurantRepository;
    private final MenuRepository menuRepository;

    public List<RestaurantDTO> getRestaurantsByTitle(String title) {
        List<RestaurantEntity> restaurantEntities = restaurantRepository.findByTitleContaining(title);
        return restaurantEntities.stream()
                .map(RestaurantDTO::toRestaurantDTO)
                .collect(Collectors.toList());
    }

    public List<RestaurantDTO> getRestaurantsByTitleOptional(String title) {
        List<RestaurantEntity> restaurantEntities = restaurantRepository.findByTitleContaining(title);
        return restaurantEntities.stream()
                .map(RestaurantDTO::toRestaurantDTO)
                .collect(Collectors.toList());
    }

    public Optional<RestaurantDTO> getRestaurantByIdOptional(Long id) {
        Optional<RestaurantEntity> restaurantOptional = restaurantRepository.findById(id);
        return restaurantOptional.map(restaurantEntity -> RestaurantDTO.toRestaurantDTO(restaurantEntity));
    }
    public List<MenuDTO> getMenusByRestaurantId(Long restaurantId) {
        List<MenuEntity> menuEntities = menuRepository.findByRestaurantId(restaurantId);
        return menuEntities.stream()
                .map(MenuDTO::toMenuDTO)
                .collect(Collectors.toList());
    }
}

