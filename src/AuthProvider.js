import React, { createContext, useContext, useState, useEffect } from 'react';

// AuthContext 생성
const AuthContext = createContext();

// AuthProvider 컴포넌트 정의
export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null); // 사용자 정보를 저장할 state 추가

    // 로그인 함수
    const login = (userData) => {
        setIsLoggedIn(true);
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData)); // 사용자 정보를 로컬 스토리지에 저장
    };

    // 로그아웃 함수
    const logout = () => {
        setIsLoggedIn(false);
        setUser(null);
        localStorage.removeItem('user'); // 로컬 스토리지에서 사용자 정보를 제거
    };

    // 초기화 로직: 컴포넌트가 마운트될 때 로컬 스토리지에서 사용자 정보를 로드합니다.
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
            setIsLoggedIn(true);
        }
    }, []);

    const value = {
        isLoggedIn,
        user,
        login, // 추가된 로그인 함수
        logout, // 추가된 로그아웃 함수
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// 커스텀 훅 생성
export const useAuth = () => {
    return useContext(AuthContext);
};
