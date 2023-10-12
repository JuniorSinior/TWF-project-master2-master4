import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import './Mypage_planning.css';

function Mypage_planning(props) {
    return (
        <div>
            <Navbar/>
            <div className='pd' id="myplanning">
                  <h4>내 여행계획</h4>

                  <div className='myplan'>
                        <a>여행 일정표1</a>
                        <span></span>
                  </div>
                  <div className='myplan'>
                        <a>여행 일정표2</a>
                        <span></span>
                  </div>
                  <div className='myplan'>
                        <a>여행 일정표3</a>
                        <span></span>
                  </div>

            </div>
            
        </div>
    );
}

export default Mypage_planning;