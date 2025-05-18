import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase.init';

const AuthProvider = ({ children }) => {

    // create user with email and password
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword( auth, email, password)
    }

    const userInfo = {
        createUser
    }

    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;