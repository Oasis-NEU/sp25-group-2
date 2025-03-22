import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  const [showApplicationsDropdown, setShowApplicationsDropdown] = useState(false);
  
  const toggleApplicationsDropdown = () => {
    setShowApplicationsDropdown(!showApplicationsDropdown);
  };

  const [showApplicationsDropdown, setShowApplicationsDropdown] = useState(false);
  
  const toggleApplicationsDropdown = () => {
    setShowApplicationsDropdown(!showApplicationsDropdown);
  };

  return (
    <nav className="horizontal-navbar">
      <ul className="navbar-titles">
        <li>
          <a href="#YourAccount" className="navbar-page">Your Account</a>
        </li>
        <li>
          <a href="#SignOut" className="navbar-page">Sign Out</a>
        </li>
        <li>
          <a href="#Profile" className="navbar-page">Your Profile</a>
        </li>
        <li className="dropdown">
          <div 
            className="navbar-page dropdown-toggle" 
            onClick={toggleApplicationsDropdown}
          >
            Your Applications
          </div>
          {showApplicationsDropdown && (
            <div className="dropdown-menu">
              <Link to="/applications" className="dropdown-titles">View Applications</Link>
              <Link to="/applications-add" className="dropdown-titles">Add Application</Link>
            </div>
          )}
        </li>
        <li>
          <a href="#InterviewTips" className="navbar-page">Interview Tips</a>
        </li>
        <li>
          <a href="#Resources" className="navbar-page">Resources</a>
        </li>
      </ul>
    </nav>
  );
}