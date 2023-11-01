// Login.js
import React from 'react';
import { redirect } from 'react-router-dom';

const Login = ({ setLoggedIn, loggedIn }) => {
    const login = () => {
        setLoggedIn(true);
    };

    if (loggedIn) {
        return redirect('/dashboard');
    }

    return (
        <div>
        <h2>Login</h2>
        <button onClick={login}>Log In</button>
        </div>
    );
};

export default Login;
