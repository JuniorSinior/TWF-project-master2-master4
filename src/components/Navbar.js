import React from 'react';
import './Navbar.css';
import {Link, NavLink, useNavigate} from 'react-router-dom';
import { useAuth } from '../AuthContext'; // useAuth 임포트

const Navbar = () => {
    const { user, logout } = useAuth(); // isLoggedIn, user 정보 및 handleLogout 함수 가져오기
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <nav>
            <div className='navbar'>
                <div className='inner'>
                    <span className='navbar-logo'>
                        <Link to='/'>푸드플래닛</Link>
                    </span>
                    <ul className='navbar-menu'>
                        <li><NavLink activeClassName='active' to='/map'>MAP</NavLink></li>
                        <li><NavLink activeClassName='active' to='/planning'>PLANNING</NavLink></li>
                        <li><NavLink activeClassName='active' to='/mypage'>MYPAGE</NavLink></li>
                        {user ? (
                            <li><Link to='/' onClick={handleLogout}>LOGOUT</Link></li>
                        ) : (
                            <li><NavLink activeClassName='active' to='/login'>LOGIN</NavLink></li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;