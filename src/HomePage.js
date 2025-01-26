import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home-page">
      <h2>Welcome to Your SaaS Platform</h2>
      <p>Automate lead prospecting with AI.</p>
      <Link to="/dashboard">Go to Dashboard</Link>
    </div>
  );
};

export default HomePage;
