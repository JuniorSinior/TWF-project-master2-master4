import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import './Mypage_review.css';
import { useAuth } from '../AuthContext';
import axios from 'axios';

function Mypage_review(props) {
    const { user } = useAuth();
    const [userReviews, setUserReviews] = React.useState([]);

    React.useEffect(() => {
        const fetchUserReviews = async () => {
            if (user) {
                try {
                    const response = await axios.get(`http://localhost:8080/api/reviews/user/${user.id}`);
                    setUserReviews(response.data);
                } catch (error) {
                    console.error('Error fetching user reviews:', error);
                }
            }
        };

        fetchUserReviews();
    }, [user]); // user 상태가 변경될 때마다 useEffect 다시 실행

    return (
        <div>
            <Navbar />
            <div className='pd' id="myreview">
                <h4><Link to='/Restaurant'>리뷰관리</Link></h4>

                <div>
                    <h5>{user ? `내가 쓴 총 리뷰 ${userReviews.length}개` : '로그인이 필요합니다.'}</h5>
                </div>

                {userReviews.map((review) => (
                    <div key={review.id} className="review">
                        <p>{review.restaurantName} : {review.content}</p>
                        {/* 추가적인 리뷰 정보 표시 */}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Mypage_review;
