// auth.js
import { useState, createContext, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [redirectToReferrer, setRedirectToReferrer] = useState(false);

    return (
        <AuthContext.Provider value={{ redirectToReferrer, setRedirectToReferrer }}>
        {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
