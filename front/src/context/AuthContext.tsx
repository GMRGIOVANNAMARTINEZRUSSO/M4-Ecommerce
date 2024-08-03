'use client';
import { userSessionProps } from '@/interfaces/IAuth';
import { createContext, useContext, useState, useEffect } from 'react';

interface AuthContextProps {
    dataUser: userSessionProps | null;
    setDataUser: (userData: userSessionProps | null) => void;
    cartItemCount: number;
    updateCart: () => void;
}

const AuthContext = createContext<AuthContextProps>({
    dataUser: null,
    setDataUser: () => { },
    cartItemCount: 0,
    updateCart: () => { }
});

interface AuthProviderProps {
    children: React.ReactElement;
}
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [userData, setUserData] = useState<userSessionProps | null>(null);
    const [cartItemCount, setCartItemCount] = useState(0);

    const updateCart = () => {
        const cart = JSON.parse(localStorage.getItem("cart") || "[]");
        setCartItemCount(cart.length);
    };

    useEffect(() => {
        if (userData) {
            localStorage.setItem('userSession', JSON.stringify(userData));
        }
    }, [userData]);

    useEffect(() => {
        if (typeof window !== 'undefined' && window.localStorage) {
            const data = localStorage.getItem('userSession');
            setUserData(JSON.parse(data!));
        }
        updateCart();
    }, [])

    return (
        <AuthContext.Provider value={{ dataUser: userData, setDataUser: setUserData, cartItemCount, updateCart }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext)