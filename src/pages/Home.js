import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';
import './Home.css';
import { useAuth } from '../AuthContext';

function Home() {
    const [restaurants, setRestaurants] = useState([]);
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const fetchRestaurants = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/restaurant', {
                params: { title: '' }
            });
            setRestaurants(response.data);
        } catch (error) {
            console.error('음식점 데이터를 불러오는데 실패했습니다:', error);
        }
    };

    useEffect(() => {
        fetchRestaurants();
    }, []);

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    const handleRestaurantClick = (restaurantId) => {
        navigate(`/restaurant/${restaurantId}`);
    };

    return (
        <div>
            <Navbar />
            <div>
                <img src='images/banner.png' alt='' className='banner-img' />
                <div>
                    <div className='content'>
                        <p className='tc'>
                            <input type='text' placeholder='검색어 입력' className='searchtxt'></input>
                            <button type='button' className='searchbtn'>
                                <img src='images/loupe.png' alt='검색' className='loupe-size'></img>
                            </button>
                        </p>
                    </div>
                    <div className='content'>
                        <h6 className='tag'>#한식</h6>
                        <div>
                            <div className='flex'>
                                {restaurants.map((restaurant) => (
                                    <img
                                        key={restaurant.id}
                                        src={restaurant.image_url}
                                        className='square-fimg'
                                        alt={restaurant.title}
                                        onClick={() => handleRestaurantClick(restaurant.id)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='user-status'>
                    {user ? (
                        <div>
                            <p>{`${user.name} 환영합니다.`}</p>
                            <button onClick={handleLogout}>로그아웃</button>
                        </div>
                    ) : (
                        <Link to='/login'>로그인</Link>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Home;
