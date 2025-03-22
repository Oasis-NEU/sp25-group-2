import React from 'react';
import { Link } from 'react-router-dom';

export default function Profile() {
  const userName = localStorage.getItem('userName'); 
  const handleSignOut = () => {
    console.log('Signing out...');
    localStorage.removeItem('userName');
    localStorage.removeItem('user');
    window.location.href = '/signin';
  };

  return (
    <div className="profile-container">
      <div className="logo">
        <img src="logo.png" alt="Logo" />
      </div>
      <div className="profile-info">
        {userName ? (
          <p>Hello, {userName}</p>
        ) : (
          <p>Please sign in to view your profile.</p>
        )}
        <button className="sign-out-button" onClick={handleSignOut}>
          Sign Out
        </button>
      </div>
    </div>
  );
}
