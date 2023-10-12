import React from 'react';
import Navbar from '../components/Navbar';
import './style.css';
import './UserInfo.css';

function UserInfo(props) {
    return (
        <div>
            <Navbar />
            <div className='pd'>
                <h3 className='pgnametxt'>회원정보</h3>
                <hr className='shortline'></hr>
                <div className='flex'>
                    <table>
                        <tbody>
                        <tr>
                            <th id='th'>사용자 사진</th>
                            <td id='td'>
                                <div><img src='images/user.png' alt='' className='user-img'></img></div>
                                <div><input type='file' style={{ marginTop: '5px' }}></input></div>
                            </td>
                        </tr>
                        <tr>
                            <th id='th'>이름</th>
                            <td id='td'>{props.userName}</td> {/* props로 전달받은 userName을 표시 */}
                        </tr>
                        <tr>
                            <th id='th'>이메일</th>
                            <td id='td'>{props.email}</td> {/* props로 전달받은 email을 표시 */}
                        </tr>
                        <tr>
                            <th id='th'>비밀번호</th>
                            <td id='td'>
                                <div><input type='password' placeholder='비밀번호'></input></div>
                                <div><input type='password' placeholder='비밀번호 확인'></input></div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <button type='submit' className='btn'>변경사항 저장</button>
                </div>
            </div>
        </div>
    );
}

export default UserInfo;
