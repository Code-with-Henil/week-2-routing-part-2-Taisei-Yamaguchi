// SignUpForm.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignUpForm = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate a delay (e.g., 2 seconds) for form submission
        setTimeout(() => {
        navigate('/welcome');
        }, 2000);
    };

    return (
        <form onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <input name='name'></input>
        <button type="submit">Submit</button>
        </form>
    );
};

export default SignUpForm;
