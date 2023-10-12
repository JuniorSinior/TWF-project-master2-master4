import React from 'react';
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../AuthContext'; // useAuth 임포트

const Navbar = () => {
    const { isLoggedIn, user, handleLogout } = useAuth(); // isLoggedIn, user 정보 및 handleLogout 함수 가져오기

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
                        {isLoggedIn ? (
                            <>

                                <li><Link to='#' onClick={handleLogout}>LOGOUT</Link></li>
                                {/* 사용자 정보가 있을 때만 사용자 이름 표시 */}
                                {user && <li><span>{user.name}님</span></li>}
                            </>
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
