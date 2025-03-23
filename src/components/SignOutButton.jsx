import React from 'react';
import { useNavigate } from 'react-router-dom';

function SignOutButton() {
  const navigate = useNavigate();

  const handleSignOut = () => {
    // Clear any stored data
    localStorage.removeItem('user');
    localStorage.removeItem('userName');
    localStorage.removeItem('password');
    
    // Navigate to create account page
    navigate('/');
  };

  return (
    <button className="sign-out-button" onClick={handleSignOut}>
      Sign Out
    </button>
  );
}

export default SignOutButton;


