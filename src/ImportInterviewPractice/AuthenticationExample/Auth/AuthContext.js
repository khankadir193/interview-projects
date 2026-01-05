import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {

    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem('user'))
    );

    const login = (userData) => {
        setUser(userData);
        console.log('userDataAuthContext...',userData);
        localStorage.setItem('user', JSON.stringify(userData));
    };

    const logout = () => {
        setUser(null);
        console.log('logout.....!!!!')
        localStorage.removeItem('user');
    };



    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);