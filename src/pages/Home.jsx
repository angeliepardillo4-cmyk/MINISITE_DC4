import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="page-container">
      <h1>Welcome to the React Router & Forms Activity</h1>
      <p>Explore multi-page navigation and interactive form handling built entirely with React and React Router.</p>
      <div className="cta-buttons">
        <Link to="/contact" className="btn primary">Fill Contact Form</Link>
        <Link to="/survey" className="btn secondary">Take Survey</Link>
      </div>
    </div>
  );
}