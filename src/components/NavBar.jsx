import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createClient } from "@supabase/supabase-js";

// Assuming you have access to your Supabase credentials
const supabase = createClient(
  "https://fhtcwplpwerxpsulpozu.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZodGN3cGxwd2VyeHBzdWxwb3p1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk3Mjg5NDMsImV4cCI6MjA1NTMwNDk0M30.D1db1cnYuDJGdq-ENR5Wlg1wSxzHaF64Il2o4JvWh2w"
);

export default function NavBar() {
  const [showApplicationsDropdown, setShowApplicationsDropdown] = useState(false);
  const navigate = useNavigate();
  
  const toggleApplicationsDropdown = () => {
    setShowApplicationsDropdown(!showApplicationsDropdown);
  };
  
  const handleSignOut = async () => {
    // Clear any stored data
    localStorage.removeItem('user');
    localStorage.removeItem('userName');
    localStorage.removeItem('password');
    
    // Use Supabase to sign out
    await supabase.auth.signOut();
    
    // Navigate to create account page
    navigate('/');
  };
  
  return (
    <nav className="horizontal-navbar">
      <ul className="navbar-titles">
        <li>
          <Link to="/home" className="navbar-page">Home</Link>
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
          <Link to="/interview-tips" className="navbar-page">Interview Tips</Link>
        </li>
        <li>
          <Link to="/resources" className="navbar-page">Resources</Link>
        </li>
        <li>
          <button
            onClick={handleSignOut}
            className="navbar-page"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'white',
              fontFamily: 'inherit',
              fontSize: 'inherit',
              fontWeight: '500',
              padding: '10px 15px',
              margin: '0 15px',
              display: 'block'
            }}
          >
            Sign Out
          </button>
        </li>
      </ul>
    </nav>
  );
}