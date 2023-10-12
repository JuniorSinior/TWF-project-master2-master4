import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Map from './pages/Map';
import Planning from './pages/Planning';
import Mypage from './pages/Mypage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import PasswordModify from './pages/PasswordModify';
import NotFound from './pages/NotFound';
import Restaurant from './pages/Restaurant';
import MypageReview from './pages/Mypage_review'; // 수정된 이름
import MypagePlanning from './pages/Mypage_planning'; // 수정된 이름
import MyFavorite from './pages/MyFavorite';
import UserInfo from './pages/UserInfo';
import { AuthProvider } from './AuthContext'; // AuthProvider 임포트

function App() {
  return (
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/map' element={<Map />} />
            <Route path='/planning' element={<Planning />} />
            <Route path='/mypage' element={<Mypage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/password-modify' element={<PasswordModify />} />
            <Route path='/restaurant/:id' element={<Restaurant />} />
            <Route path='/mypage_review' element={<MypageReview />} /> {/* 수정된 이름 */}
            <Route path='/mypage_planning' element={<MypagePlanning />} /> {/* 수정된 이름 */}
            <Route path='/mypage_favorite' element={<MyFavorite />} />
            <Route path='/user-info' element={<UserInfo />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
  )
}

export default App;
