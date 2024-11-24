import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Landing.css';

const Landing: React.FC = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/signup');
  };

  return (
    <div className="landing-container">
      <nav className="landing-nav">
        <div className="logo">OneFeed</div>
        <div className="nav-buttons">
          <button className="login-btn" onClick={() => navigate('/login')}>Login</button>
          <button className="signup-btn" onClick={() => navigate('/signup')}>Sign Up</button>
        </div>
      </nav>

      <main className="landing-main">
        <div className="hero-section">
          <h1>All Your Social Feeds in One Place</h1>
          <p>Connect and manage your social media accounts seamlessly with OneFeed</p>
          <button className="get-started-btn" onClick={handleGetStarted}>
            Get Started
          </button>
        </div>

        <div className="features-section">
          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3>Unified Feed</h3>
            <p>View all your social media posts in a single, organized feed</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔄</div>
            <h3>Real-time Updates</h3>
            <p>Stay up to date with instant notifications and updates</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Analytics</h3>
            <p>Track engagement and performance across all platforms</p>
          </div>
        </div>
      </main>

      <footer className="landing-footer">
        <p>&copy; 2024 OneFeed. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Landing;
