package com.twf.backend.yohan.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "restaurant")
public class RestaurantEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    @Column(name = "address")
    private String address;

    @Column(name = "food_type")
    private String foodType;

    @Column(name = "phone")
    private String phone;

    @Column(name = "price")
    private BigDecimal price;

    @Column(name = "title")
    private String title;

    public String getName() {
        return this.title;
    }
    // ... (기존 코드)

    // 일대다 관계 설정
    @OneToMany(mappedBy = "restaurant", cascade = CascadeType.ALL)
    private List<MenuEntity> menuList;

}

