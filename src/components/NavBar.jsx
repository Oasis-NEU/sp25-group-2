import { useState } from 'react';
import { Link } from 'react-router-dom';
import Profile from './Profile';

export default function NavBar() {
  const [showApplicationsDropdown, setShowApplicationsDropdown] = useState(false);
  
  const toggleApplicationsDropdown = () => {
    setShowApplicationsDropdown(!showApplicationsDropdown);
  };

  return (
    <nav className="horizontal-navbar">
      <div className="nav-content">
        {/* Left side navigation items */}
        <ul className="nav-items">
          <li className="nav-item dropdown">
            <div 
              className="nav-link dropdown-toggle" 
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
          <li className="nav-item">
            <Link to="/interview-tips" className="nav-link">Interview Tips</Link>
          </li>
          <li className="nav-item">
            <Link to="/resources" className="nav-link">Resources</Link>
          </li>
        </ul>

        {/* Right side profile */}
        <Profile />
      </div>
    </nav>
  );
}

