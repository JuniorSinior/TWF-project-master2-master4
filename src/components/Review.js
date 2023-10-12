import React, { useState } from 'react';
import './Review.css';
import axios from 'axios';

const Review = () => {
    const [comment, setComment] = useState('');

    const handleReviewSubmit = () => {
        // 여기에서 리뷰를 추가하는 코드를 작성
        // ...

        // 예시로 아래와 같이 axios를 사용하여 리뷰를 추가하는 코드를 작성하였습니다.
        axios.post(`http://localhost:8080/api/reviews/add`, {
            userId: '아이디',
            restaurantId: '레스토랑 아이디',
            rating: 5,
            comment: comment
        })
            .then(response => {
                console.log('Review added successfully.');
                // 리뷰가 성공적으로 저장되면 추가적인 로직을 작성할 수 있습니다.
                setComment('');
            })
            .catch(error => {
                console.error('Error adding review:', error);
            });
    };

    return (
        <div className='review_index'>
            <div>
                {/* ... 리뷰 정보 표시 부분 ... */}
            </div>
            <div>
                <div>
                    {/* ... 사용자 정보 표시 부분 ... */}
                </div>
                <div>
                    {/* ... 리뷰 내용 및 수정, 삭제 부분 ... */}
                </div>
                <textarea
                    placeholder='리뷰를 남겨주세요.'
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                ></textarea>
            </div>
            <span></span>
            <button className='btn' onClick={handleReviewSubmit}>완료</button>
        </div>
    );
};

export default Review;
