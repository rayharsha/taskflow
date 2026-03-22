import { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
const AuthContext = createContext(undefined);
export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("token"));
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) {
            setTimeout(() => {
                window.location.href = `${import.meta.env.VITE_APP_URL}/login`;
            }, 1000);
        }
    }, [isAuthenticated]);

    useEffect(() => {
        const handleStorageChange = () => {
            const token = localStorage.getItem("token");
            setIsAuthenticated(!!token);
        };
        window.addEventListener("storage", handleStorageChange);
        return () => {
            window.removeEventListener("storage", handleStorageChange);
        };
    }, []);


    const logout = () => {
        localStorage.removeItem("token")
        setIsAuthenticated(false);
    }

    return (
        <AuthContext.Provider value={{ logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuthContext must be used within an AuthProvider")
    }
    return context;
}