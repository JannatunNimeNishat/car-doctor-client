import React, { createContext } from 'react';
export const AuthContext = createContext();
import { getAuth } from 'firebase/auth'
import app from '../firebase/firebase.config';

const AuthProvider = ({ children }) => {

    const auth = getAuth(app)

    const authInfo = {

    }
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;