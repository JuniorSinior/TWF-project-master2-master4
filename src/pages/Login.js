import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Logo from '../components/Logo';
import './Login.css';
import { useAuth } from '../AuthContext';
import api from '../config/api';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleLogin = () => {
        const data = {
            email: email,
            password: password
        };

        api.post('/api/login', data)
            .then(response => {
                if (response.data) {
                    alert("로그인에 성공하였습니다.");
                    login(response.data); // 사용자 정보 업데이트
                    navigate('/'); // 홈 페이지나 다른 페이지로 리디렉션
                } else {
                    alert("로그인에 실패하였습니다.");
                }
            })
            .catch(error => {
                console.error(error);
                alert("로그인 오류 발생.");
            });
    };

    return (
        <div>
            <Logo />
            <div className='pd'>
                <h3 className='pgnametxt'>로그인</h3>
                <div><hr className='middleline'></hr></div>
                <div>
                    <input type='text' placeholder='이메일' className='txtbox' onChange={e => setEmail(e.target.value)} />
                </div>
                <div>
                    <input type='password' placeholder='비밀번호' className='txtbox' onChange={e => setPassword(e.target.value)} />
                </div>
                <div className='txt'>
                    <Link to='/signup'>회원가입</Link>·
                        <Link to='/password-modify'>비밀번호 찾기</Link>
                </div>
                <button type='submit' className='btn' onClick={handleLogin}>로그인</button>
            </div>
        </div>
    );
}

export default Login;
