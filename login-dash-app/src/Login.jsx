// Login.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
// redirect doesn't work well.

const Login = ({ setLoggedIn, loggedIn }) => {
    const navigate = useNavigate();
    const login = () => {
        setLoggedIn(true);
    };

    if (loggedIn) {
        navigate("/dashboard");
        
    }

    return (
        <div>
        <h2>Login</h2>
        <button onClick={login}>Log In</button>
        </div>
    );
};

export default Login;
