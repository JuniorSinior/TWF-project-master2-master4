package com.twf.backend.yohan.dto;

import com.twf.backend.yohan.entity.MenuEntity;
import lombok.*;

import java.math.BigDecimal;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class MenuDTO {
    private Long id;
    private BigDecimal price;
    private String title;

    public static MenuDTO toMenuDTO(MenuEntity menuEntity) {
        MenuDTO menuDTO = new MenuDTO();
        menuDTO.setId(menuEntity.getId());
        menuDTO.setPrice(menuEntity.getPrice());
        menuDTO.setTitle(menuEntity.getTitle());
        return menuDTO;
    }
}
