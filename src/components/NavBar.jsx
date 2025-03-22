import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  const [showApplicationsDropdown, setShowApplicationsDropdown] = useState(false);
  
  const toggleApplicationsDropdown = () => {
    setShowApplicationsDropdown(!showApplicationsDropdown);
  };

  return (
    <nav className="horizontal-navbar">
      <ul className="navbar-titles">
        <li className="navbar-title">
          <a href="#YourAccount" className="navbar-page">Your Account</a>
        </li>
        <li className="navbar-title dropdown">
          <a href="#SignOut" className="navbar-page">Sign Out</a>
          <a href="#Profile" className="navbar-page">Your Profile</a>
        </li>
        <li className="navbar-title dropdown">
          <div 
            className="navbar-page dropdown-toggle" 
            onClick={toggleApplicationsDropdown}
          >
            Your Applications
          </div>
          {showApplicationsDropdown && (
            <div className="dropdown-menu">
              <Link to="/applications" className="dropdown-item">View Applications</Link>
              <Link to="/add-application" className="dropdown-item">Add Application</Link>
            </div>
          )}
        </li>
        <li className="navbar-title">
          <a href="#InterviewTips" className="navbar-page">Interview Tips</a>
        </li>
        <li className="navbar-title">
          <a href="#Resources" className="navbar-page">Resources</a>
        </li>
      </ul>
    </nav>
  );
}

