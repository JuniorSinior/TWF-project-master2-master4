import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import ReactModal from 'react-modal';
import './Map.css';
import './style.css';
import { useEffect, useRef } from 'react';

ReactModal.setAppElement('#root');

function Map(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const mapElement = useRef(null);


    useEffect(() => {
        const { naver } = window;
        if (!mapElement.current || !naver) return;

        // 지도에 표시할 위치의 위도와 경도 좌표를 파라미터로 넣어줍니다.
        const location = new naver.maps.LatLng(33.3948, 126.24);
        const mapOptions: naver.maps.MapOptions = {
            center: location,
            zoom: 17,
            // zoomControl: true,
            zoomControlOptions: {
                position: naver.maps.Position.TOP_RIGHT,
            },
        };
        const map = new naver.maps.Map(mapElement.current, mapOptions);
        new naver.maps.Marker({
            position: location,
            map,
        });
    }, []);

    return (
        <div>
            <Navbar />
            <div className='content'>
                <div>
                    <div className='flex'>
                        <div className='map'>
                            <h6>지역을 검색해보세요.</h6>
                            <div ref={mapElement} style={{ minWidth: '600px', minHeight: '400px', outline: 'none', borderRadius: '10px', boxShadow: '1px 1px 1px 1px lightgray' }}></div>
                        </div>

                        <div className='schedule-list'>
                            <div className='list-info'>
                                <select name='select' className='slectbox'>
                                    <option value="schedule1">여행계획표 1</option>
                                    <option value="schedule2">여행계획표 2</option>
                                    <option value="schedule3">여행계획표 3</option>
                                </select>
                                <button type='submit' className='edit-btn'>수정</button>
                            </div>
                            <div className='list-box'>
                                <span>0:00</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>일정내용</span>
                                <img src='' alt='' style={{ float: 'right' }}></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <button onClick={() => setModalIsOpen(true)} className='filter-btn'><img src='images/filter.png' alt='' className=''></img> 필터</button>
                <button className='transfer-btn'><img src='images/transfer.png' alt='' className=''></img> 거리순</button>
                <ReactModal
                    isOpen={modalIsOpen}
                    shouldCloseOnOverlayClick={false}
                    onRequestClose={() => setModalIsOpen(false)}
                    style={
                        {
                            overlay: {
                                backgroundColor: 'rgba(220,220,220, 0.5)',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                zIndex: 10
                            },
                            content: {
                                flexDirection: 'column',
                                backgroundColor: 'white',
                                overflow: 'auto',
                                color: 'black',
                                top: '20vh',
                                left: '20vw',
                                right: '20vw',
                                bottom: '20vh',
                                borderRadius: '10px',
                                zIndex: 10,
                                padding: '30px'
                            }
                        }
                    }
                >
                    <h6>음식종류<button onClick={() => setModalIsOpen(false)} style={{ float: 'right', border: 'none', backgroundColor: 'white' }}><img src='images/close_btn.png' alt=''></img></button></h6>
                    <hr />
                    <button className='filter-content-btn'>한식</button><button className='filter-content-btn'>일식</button><button className='filter-content-btn'>중식</button><button className='filter-content-btn'>양식</button><button className='filter-content-btn'>아시안</button>
                    <hr />
                    <h6>영업일</h6>
                    <hr />
                    <button className='filter-content-btn'>일</button><button className='filter-content-btn'>월</button><button className='filter-content-btn'>화</button><button className='filter-content-btn'>수</button><button className='filter-content-btn'>목</button><button className='filter-content-btn'>금</button><button className='filter-content-btn'>토</button>
                    <hr />
                    <h6>가격</h6>
                    <hr />
                    <button className='filter-content-btn'>만원 미만</button><button className='filter-content-btn'>1만원대</button><button className='filter-content-btn'>2만원대</button><button className='filter-content-btn'>3만원대</button><button className='filter-content-btn'>5만원 이상</button>
                    <hr />
                    <h6>거리</h6>
                    <hr />
                    <button className='filter-content-btn'>500m 이내</button><button className='filter-content-btn'>~1km</button><button className='filter-content-btn'>~2km</button><button className='filter-content-btn'>~3km</button><button className='filter-content-btn'>5km 이상</button>
                    <hr />
                    <button type='submit' style={{ float: 'right', border: 'none', backgroundColor: '#FFD0D0' }}>적용</button>
                    {/* <div>검색</div>
                    <hr/>
                    <input type='text' placeholder='키워드를 검색하세요'></input> */}
                </ReactModal>
            </div>


            <div className='content'>
                <div className='flex'>
                    <img src='images/Rectangle1.png' alt='' className='info-img'></img>
                    <div className='info'>
                        <div className='info-header'>
                            <h4>가게이름</h4>
                        </div>
                        <div>
                            <span>#종류</span>
                        </div>
                        <p className='address'>주소</p>
                        &nbsp;
                        <div className='rate'>
                            <p><img src='images/star.png' alt=''></img><span>5.0</span></p>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <p><img src='images/small_favorite_unactiv.png' alt=''></img><span>8</span></p>
                        </div>
                    </div>
                    <div className='favorite-icon'>
                        <button style={{ backgroundColor: 'white', border: 'none' }}><img src='images/Favorite_unactiv.png' alt=''></img></button>
                    </div>
                </div>
            </div>
            <hr className='longline'></hr>

            <div className='content'>
                <div className='flex'>
                    <img src='images/Rectangle1.png' alt='' className='info-img'></img>
                    <div className='info'>
                        <div className='info-header'>
                            <h4>가게이름</h4>
                        </div>
                        <div>
                            <span>#종류</span>
                        </div>
                        <p className='address'>주소</p>
                        &nbsp;
                        <div className='rate'>
                            <p><img src='images/star.png' alt=''></img><span>5.0</span></p>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <p><img src='images/small_favorite_unactiv.png' alt=''></img><span>8</span></p>
                        </div>
                    </div>
                    <div className='favorite-icon'>
                        <button style={{ backgroundColor: 'white', border: 'none' }}><img src='images/Favorite_unactiv.png' alt=''></img></button>
                    </div>
                </div>
            </div>
            <hr className='longline'></hr>

            <div className='content'>
                <div className='flex'>
                    <img src='images/Rectangle1.png' alt='' className='info-img'></img>
                    <div className='info'>
                        <div className='info-header'>
                            <h4>가게이름</h4>
                        </div>
                        <div>
                            <span>#종류</span>
                        </div>
                        <p className='address'>주소</p>
                        &nbsp;
                        <div className='rate'>
                            <p><img src='images/star.png' alt=''></img><span>5.0</span></p>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <p><img src='images/small_favorite_unactiv.png' alt=''></img><span>8</span></p>
                        </div>
                    </div>
                    <div className='favorite-icon'>
                        <button style={{ backgroundColor: 'white', border: 'none' }}><img src='images/Favorite_unactiv.png' alt=''></img></button>
                    </div>
                </div>
            </div>
            <hr className='longline'></hr>

        </div>
    );
}

export default Map;