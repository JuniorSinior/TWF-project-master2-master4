import React from 'react';
import Logo from '../components/Logo';
import './style.css';

function PasswordModify(props) {
    return (
        <div>
            <Logo />
            <div className='pd'>
                <h3 className='pgnametxt'>비밀번호 찾기</h3>
                <hr className='middleline'></hr>
                <div><input type='text' placeholder='이메일' className='txtbox'></input></div>
                <button className='btn'>비밀번호 재설정 메일 발송</button>
            </div>
        </div>
    );
}

export default PasswordModify;