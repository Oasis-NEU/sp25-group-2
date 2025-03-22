import { useState } from 'react';
import { Link } from 'react-router-dom'; 

export default function Profile() {
  const [showDropdown, setShowDropdown] = useState(false);
  // This would typically come from your auth context/state
  const username = "John Doe"; // Replace with actual username from your auth system

  return (
    <div className="profile-container">
      <div 
        className="profile-trigger"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <span className="username">{username}</span>
        <i className="profile-icon">👤</i>
      </div>
      
      {showDropdown && (
        <div className="profile-dropdown">
          <Link to="/account" className="dropdown-item">Your Account</Link>
          <button 
            className="sign-out-button"
            onClick={() => {
              // Add your sign out logic here
              console.log('Signing out...');
            }}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
} 