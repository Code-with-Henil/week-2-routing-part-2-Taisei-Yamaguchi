// Dashboard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = (loggedIn) => {
    const navigate = useNavigate();
    if (!loggedIn) {
        navigate("/login");
    }
    return (
        <div>
        <h2>Dashboard</h2>
        <p>Welcome to the Dashboard!</p>
        </div>
    );
};

export default Dashboard;
