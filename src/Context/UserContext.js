import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({children}) => {
    const [user, setUser] = useState(null);

    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const userSignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const userUpdateProfile = profile => {
        return updateProfile(auth.currentUser, profile);
    }

    const userGoogleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        return signOut(auth);
    }

    useEffect( () => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            setUser(currentUser);
        })
        return () => unSubscribe();
    }, [])

    const userInfo = {
        user,
        createUser,
        userUpdateProfile,
        userGoogleSignIn,
        logOut,
        userSignIn
    }
    
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;