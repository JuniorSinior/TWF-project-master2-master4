import React from 'react';
import Navbar from '../components/Navbar';
import {Link, NavLink} from 'react-router-dom';
import './Mypage.css';


function Mypage(props) {
    return (
        <div>
            <Navbar/>
            <div id='mypage_visual'>
                <h4>MYPAGE</h4>
            </div>


            <div className='pd' id='mypage_inner'>
                <div><Link to='/user-info'>계정관리</Link></div>
                <div><Link to='/mypage_planning'>내 여행계획</Link></div>
                <div><Link to='/mypage_review'>리뷰관리</Link></div>
                {/*<div><Link to='/mypage_favorite'>내 관심가게</Link></div>*/}
                <div><NavLink activeClassName='active' to='/mypage_favorite'>내 관심가게</NavLink></div>
            </div>



        </div>
    );
}

export default Mypage;