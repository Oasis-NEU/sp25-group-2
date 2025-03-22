import React from 'react';
import { useNavigate } from 'react-router-dom';

function SignOutButton() {
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('userName');
    localStorage.removeItem('password');

    navigate('/home');
  };

  return (
    <button className="sign-out-button" onClick={handleSignOut}>
      Sign Out
    </button>
  );
}

export default SignOutButton;


