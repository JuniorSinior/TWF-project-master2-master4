// MyFavorite.js

import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { useAuth } from '../AuthContext';
import api from '../config/api';

function MyFavorite(props) {
    const [favoriteRestaurants, setFavoriteRestaurants] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        // 사용자가 로그인되어 있지 않으면 아무 작업도 하지 않음
        if (!user) {
            return;
        }

        // 사용자의 관심 가게 목록을 가져옴
        api.get(`/api/${user.id}/favorites`)
            .then(response => setFavoriteRestaurants(response.data))
            .catch(error => console.error('관심 가게를 불러오는데 실패했습니다:', error));
    }, [user]); // user가 변경될 때마다 실행

    return (
        <div>
            <Navbar />
            <h3 className='pgnametxt'>내 관심가게</h3>
            <div><hr className='shortline'></hr></div>

            {favoriteRestaurants.map((favorite) => (
                <div key={favorite.restaurantId} className='content'>
                    <div className='flex'>
                        {/* 이미지 URL이 없으면 기본 이미지를 사용할 수 있도록 처리 */}
                        <img src={favorite.image_url || '기본이미지URL'} alt='' className='info-img'></img>
                        <div className='info'>
                            <div className='info-header'>
                                <h4>{favorite.restaurantName}</h4>
                            </div>
                            <p className='address'>{favorite.address}</p>
                            &nbsp;
                            <div className='rate'>
                                <p><img src='images/star.png' alt=''></img>{favorite.rating}</p>
                            </div>
                        </div>
                        <div className='favorite-icon'>
                            {/* 'isFavorite'를 통해 좋아요 상태를 확인 */}
                            {favorite.isFavorite ? (
                                <button style={{ backgroundColor: 'white', border: 'none' }}>
                                    <img src='images/Favorite_activate.png' alt=''></img>
                                </button>
                            ) : (
                                <button style={{ backgroundColor: 'white', border: 'none' }}>
                                    <img src='images/Favorite_deactivate.png' alt=''></img>
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            ))}
            <hr className='longline'></hr>
        </div>
    );
}

export default MyFavorite;
