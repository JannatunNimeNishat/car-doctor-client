import React, { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext();
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../firebase/firebase.config';

const AuthProvider = ({ children }) => {

    const auth = getAuth(app)
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    //Register
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    //login
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    //logout
    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    //google signIn
    const googleProvider = new GoogleAuthProvider()
    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }




    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log('current user', currentUser);
            setLoading(false)
            
            //jwt
            //if there is a user (login/register/social login) getting a jwt token for a user and save it to local storage
            //else remove the token from local storage
            //send to server JWT 
            if (currentUser && currentUser.email) {

                 const loggedUser = {
                    email: currentUser.email
                }

                fetch('http://localhost:5000/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(loggedUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        //save the access token to local storage 
                        //Warning: Local storage is not the best (second best) to store access token for security.
                        localStorage.setItem('car-access-token', data.token)

                    })
            }
            else{
                localStorage.removeItem('car-access-token')
            }
        })

        //unSubscribe
        return () => {
            unSubscribe();
        }


    }, [])

    const authInfo = {
        user,
        loading,
        setLoading,
        createUser,
        signIn,
        logOut,
        googleSignIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;