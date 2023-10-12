    package com.twf.backend.yohan.repository;

    import com.twf.backend.yohan.entity.FavoriteRestaurantEntity;
    import com.twf.backend.yohan.entity.MemberEntity;
    import com.twf.backend.yohan.entity.RestaurantEntity;
    import org.springframework.data.jpa.repository.JpaRepository;

    import java.util.List;

    public interface FavoriteRestaurantRepository extends JpaRepository<FavoriteRestaurantEntity, Long> {
        List<FavoriteRestaurantEntity> findByUserId(Long userId);

        // 레스토랑 ID로 관심 가게 목록을 검색합니다.
        List<FavoriteRestaurantEntity> findByRestaurantId(Long restaurantId);
        List<FavoriteRestaurantEntity> findByUserAndRestaurant(MemberEntity user, RestaurantEntity restaurant);

        // 사용자 ID와 레스토랑 ID로 특정 관심 가게를 검색합니다.
        FavoriteRestaurantEntity findByUserIdAndRestaurantId(Long userId, Long restaurantId);

    }
