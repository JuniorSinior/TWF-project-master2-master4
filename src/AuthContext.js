import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser && new Date().getTime() < storedUser.expirationTime) {
            setUser(storedUser);
        }
    }, []);

    const login = (userData) => {
        const expirationTime = new Date().getTime() + 3600000; // 1시간 뒤 만료
        localStorage.setItem('user', JSON.stringify({ ...userData, expirationTime }));
        setUser(userData);
    };

    const logout = () => {
        localStorage.removeItem('user');
        setUser(null);
    };

    const contextValue = {
        user,
        login,
        logout,
    };

    return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
}

export function useAuth() {
    return useContext(AuthContext);
}
