import React from 'react';
import NavBar from '../components/NavBar';
import logo from '../assets/logo.png';
import Profile from '../components/Profile';

export default function Home() {
  return (
    <div className="home-container">
      <NavBar />
      <main className="home-content">
        <div className="logo-section">
          <img src={logo} alt="Application Tracker Logo" className="home-logo" />
          <h1>Welcome to Co-App!</h1>
          <p>Track and manage your co-op applications in one place</p>
        </div>
        
        <div className="features-section">
          <h2>Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Track Applications</h3>
              <p>Keep track of all your co-op applications in one organized dashboard</p>
            </div>
            <div className="feature-card">
              <h3>Application Status</h3>
              <p>Monitor the status of each application from submission to offer</p>
            </div>
            <div className="feature-card">
              <h3>Interview Tips</h3>
              <p>Access helpful resources and tips for your interviews</p>
            </div>
            <div className="feature-card">
              <h3>Resource Library</h3>
              <p>Browse through our collection of co-op resources and guides for your specific college</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
