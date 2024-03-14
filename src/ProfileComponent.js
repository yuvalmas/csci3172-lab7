import React from 'react';
import './App.css';

const ProfileComponent = (props) => {
    const { user } = props;
    return (
        <div className="profile-container">
            <h2>Welcome {user.first} {user.last}</h2>
            <p>Email: {user.email}</p>
            <p>Season: {user.season}</p>
            <a href="/dashboard">Dashboard</a>
        </div>
    );
}

export default ProfileComponent;