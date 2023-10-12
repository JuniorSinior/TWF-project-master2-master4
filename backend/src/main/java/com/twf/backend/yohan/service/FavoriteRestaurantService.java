package com.twf.backend.yohan.service;

import com.twf.backend.yohan.dto.FavoriteResponseDTO;
import com.twf.backend.yohan.entity.FavoriteRestaurantEntity;
import com.twf.backend.yohan.entity.MemberEntity;
import com.twf.backend.yohan.entity.RestaurantEntity;
import com.twf.backend.yohan.repository.FavoriteRestaurantRepository;
import com.twf.backend.yohan.repository.MemberRepository;
import com.twf.backend.yohan.repository.RestaurantRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class FavoriteRestaurantService {
    private final FavoriteRestaurantRepository favoriteRestaurantRepository;
    private final RestaurantRepository restaurantRepository;
    private final MemberRepository memberRepository;

    public void addToFavorites(Long userId, Long restaurantId) {
        // 레스토랑을 데이터베이스에서 가져옵니다.
        RestaurantEntity restaurant = restaurantRepository.findById(restaurantId).orElse(null);

        // 레스토랑이 없으면 예외 처리 또는 오류 처리를 수행할 수 있습니다.
        if (restaurant == null) {
            throw new IllegalArgumentException("레스토랑을 찾을 수 없습니다.");
        }

        // 사용자 정보를 가져오고, 이 사용자가 이미 해당 레스토랑을 관심 가게로 등록했는지 확인하는 로직을 추가합니다.
        MemberEntity member = getUserById(userId);
        if (member == null) {
            throw new IllegalArgumentException("사용자를 찾을 수 없습니다.");
        }

        if (!isAlreadyFavorite(member, restaurant)) {
            // 사용자의 관심 가게 목록에 레스토랑을 추가합니다.
            FavoriteRestaurantEntity favoriteRestaurantEntity = new FavoriteRestaurantEntity();
            favoriteRestaurantEntity.setUser(member);
            favoriteRestaurantEntity.setRestaurant(restaurant);
            favoriteRestaurantRepository.save(favoriteRestaurantEntity);
        }
    }

    public void removeFromFavorites(Long userId, Long restaurantId) {
        // 나중에 구현
    }

    private boolean isAlreadyFavorite(MemberEntity member, RestaurantEntity restaurant) {
        // 여기에서 사용자의 관심 가게 목록을 확인하고, 이미 해당 레스토랑이 있는지 확인하는 로직을 구현합니다.
        List<FavoriteRestaurantEntity> favoriteRestaurants = favoriteRestaurantRepository.findByUserAndRestaurant(member, restaurant);
        return !favoriteRestaurants.isEmpty();
    }

    private MemberEntity getUserById(Long userId) {
        // 여기에서 userId를 사용하여 사용자 정보를 데이터베이스에서 가져옵니다.
        return memberRepository.findById(userId).orElse(null);
    }


    public List<FavoriteResponseDTO> getUserFavorites(Long userId) {
        // 사용자의 관심 가게를 가져오는 비즈니스 로직을 구현하세요.
        // 예시로 findAll 메서드를 사용하였으며, 실제 비즈니스 로직에 맞게 수정하세요.
        return favoriteRestaurantRepository.findByUserId(userId)
                .stream()
                .map(favorite -> new FavoriteResponseDTO(
                        favorite.getRestaurant().getId(),
                        favorite.getRestaurant().getName()
                        // 다른 관련 정보들을 필요에 따라 추가하세요.
                ))
                .collect(Collectors.toList());
    }

}
