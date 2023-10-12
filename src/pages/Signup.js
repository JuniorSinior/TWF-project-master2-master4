import React, { useState } from 'react';
import Logo from '../components/Logo';
import axios from 'axios';
import './Signup.css';
import './style.css';

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState(''); // 비밀번호 확인 추가
    const [name, setName] = useState('');
    const [passwordMismatch, setPasswordMismatch] = useState(false); // 비밀번호 불일치 여부 상태 추가

    const handleSignup = () => {
        if (password !== passwordConfirm) {
            setPasswordMismatch(true);
            return;
        }

        const data = {
            email: email,
            password: password,
            name: name
        };

        axios.post('http://localhost:8080/api/signup', data)
            .then(response => {
                console.log(response.data); // 회원가입 성공 시 동작
            })
            .catch(error => {
                console.error(error); // 회원가입 실패 시 동작
            });
    };

    return (
        <div>
            <Logo />
            <div className='pd'>
                <h3 className='pgnametxt'>회원가입</h3>
                <hr className='middleline' />
                <div>
                    <input type='text' placeholder='이메일' className='Stxtbox1' onChange={e => setEmail(e.target.value)} />
                    @
                    <select name='select' className='combox'>
                        <option value="none"></option>
                        <option value="gmail">gmail.com</option>
                        <option value="naver">naver.com</option>
                        <option value="hanmail">hanmail.com</option>
                        <option value="daum">daum.net</option>
                        <option value="nate">nate.com</option>
                    </select>
                </div>
                <div>
                    <input type='password' placeholder='비밀번호(영문과 숫자를 포함하여 8자 이상)' className='Ltxtbox' onChange={e => setPassword(e.target.value)} />
                </div>
                <div>
                    <input type='password' placeholder='비밀번호 확인' className='Ltxtbox' onChange={e => setPasswordConfirm(e.target.value)} />
                </div>
                {passwordMismatch && <label className='notice'>비밀번호가 일치하지 않습니다.</label>}
                <div>
                    <input type='text' placeholder='이름' className='Ltxtbox' onChange={e => setName(e.target.value)} />
                </div>
                <div>
                    <label className='lbl'>가입 약관 동의</label>
                </div>
                <div className='left-space'>
                    <input type='checkbox' id='check1' />
                    <label className='info'>개인정보 제 3차 제공 동의</label>
                </div>
                <button className='btn' onClick={handleSignup}>회원가입</button>
            </div>
        </div>
    );
}

export default Signup;
