import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { useParams } from 'react-router-dom';
import './style.css';
import './Restaurant.css';
import axios from 'axios';
import { useAuth } from '../AuthContext';

function Restaurant() {
    const [restaurantData, setRestaurantData] = useState({});
    const { id } = useParams();
    const { user } = useAuth();
    const [reviewCount, setReviewCount] = useState(0);
    const [comment, setComment] = useState('');
    const [reviews, setReviews] = useState([]);
    const [menuList, setMenuList] = useState([]);

    const fetchReviews = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/reviews/restaurant/${id}`);
            const reviews = response.data;
            setReviews(reviews);
        } catch (error) {
            console.error('Error fetching reviews:', error);
        }
    };

    const fetchMenuData = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/menu/${id}`);
            const menuData = response.data;
            setMenuList(menuData);
        } catch (error) {
            console.error('Error fetching menu data:', error);
        }
    };

    const handleReviewSubmit = () => {
        if (!user) {
            console.error('User is not logged in. Redirect to login page.');
            return;
        }

        axios.post(`http://localhost:8080/api/reviews/add`, {
            userId: user.id,
            restaurantId: id,
            rating: 5,
            content: comment
        })
            .then(response => {
                console.log('Review added successfully.');
                setReviewCount(prevCount => prevCount + 1);
                setComment('');
                fetchReviews();
            })
            .catch(error => {
                console.error('Error adding review:', error);
            });
    };

    useEffect(() => {
        const fetchRestaurantData = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/restaurant/${id}`);
                const restaurant = response.data;
                if (restaurant) {
                    setRestaurantData(restaurant);
                    setReviewCount(restaurant.reviewCount || 0);
                }
            } catch (error) {
                console.error('Error fetching restaurant data:', error);
            }
        };

        fetchRestaurantData();
        fetchReviews();
        fetchMenuData();
    }, [id]);

    const handleAddToFavorites = () => {
        if (!user) {
            console.error('User is not logged in. Redirect to login page.');
            return;
        }

        axios.post(`http://localhost:8080/api/add-to-favorites/${user.id}/${id}`)
            .then(response => {
                console.log('Successfully added to favorites.');
            })
            .catch(error => {
                console.error('Error adding to favorites:', error);
            });
    };

    function Menu({ menu }) {
        const [isHovered, setIsHovered] = useState(false);

        return (
            <li
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <p>{menu.title}</p>
                {isHovered && <p className="menu-price">{menu.price}원</p>}
            </li>
        );
    }

    const menuListItems = menuList.map((menu, index) => (
        <Menu key={index} menu={menu} />
    ));

    function Star(star) {
        if (star >= 5) return '★★★★★';
        else if (star >= 4) return '★★★★☆';
        else if (star >= 3) return '★★★☆☆';
        else if (star >= 2) return '★★☆☆☆';
        else return '★☆☆☆☆';
    }

    return (
        <div>
            <Navbar />
            <div id="restaurant_visual"></div>
            <div className='inner'>
                <div id="restaurant">
                    <div id="restaurant_title">
                        <h4>{restaurantData.store}</h4>
                        <div id='star_rating'>{Star(restaurantData.star)}</div>
                        <button className='btn' onClick={handleAddToFavorites}> 관심가게 </button>
                    </div>
                    <div id="restaurant_subtitle">
                        <h5>{restaurantData.area}</h5>
                        <p>
                            <img src="images2/heart.png" alt="" />
                            {restaurantData.heart}
                        </p>
                        <p>
                            <img src="images2/pencil.png" alt="" />
                            {restaurantData.review}
                        </p>
                    </div>
                    <div id="restaurant_info">
                        <span></span>
                        <ul>
                            <li>
                                <p>주소</p>
                                <p>{restaurantData.address}</p>
                            </li>
                            <li>
                                <p>전화번호</p>
                                <p>{restaurantData.phone}</p>
                            </li>
                            <li>
                                <p>음식종류</p>
                                <p>{restaurantData.foodType}</p>
                            </li>
                            <li>
                                <p>가격대</p>
                                <p>{restaurantData.price}</p>
                            </li>
                        </ul>
                        <div id="restaurant_menu">
                            <p>메뉴</p>
                            <ul>{menuListItems}</ul>
                        </div>
                    </div>
                </div>
                <div id="map"></div>
            </div>
            <div className='inner' id="review_write">
                <h5>리뷰 (<strong>{reviewCount}</strong>건)</h5>
                <div id="review_box">
                    <div>
                        <div id="rating">☆☆☆☆☆</div>
                        <button className='btn'>음식이 맛있어요</button>
                        <button className='btn'>분위기가 좋아요</button>
                        <button className='btn'>가성비가 좋아요</button>
                        <button className='btn'>서비스가 친절해요</button>
                        <p>해당하는 것을 선택해주세요.</p>
                    </div>
                    <div className='line'></div>
                    <textarea
                        placeholder='리뷰를 남겨주세요.'
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    ></textarea>
                </div>
                <button className='btn' onClick={handleReviewSubmit}>완료</button>
            </div>


            <a>더보기<div></div></a>
        </div>
    );
}

export default Restaurant;
