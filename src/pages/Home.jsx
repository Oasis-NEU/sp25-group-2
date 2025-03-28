import NavBar from '../components/NavBar';
import Layout from '../components/Layout'

export default function Home() {
  return (
    <div className="home-content">
      <div className="features-section">
        <h2 className="features-section" > Welcome to Co-App</h2>
        <p className="welcome-text">Track and manage your co-op applications in one place</p>
        
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
            <p>Browse through our collection of co-op resources and guides</p>
          </div>
        </div>
      </div>
    </div>
  );
}