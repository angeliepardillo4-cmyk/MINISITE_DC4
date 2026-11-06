import React from 'react';

export default function About() {
  return (
    <div className="page-container">
      <h1>About This Activity</h1>
      <p>This mini-site demonstrates core React concepts including:</p>
      <ul className="feature-list">
        <li>**Client-Side Routing:** Seamless transitions without full page reloads using <code>react-router-dom</code>.</li>
        <li>**Form Handling:** Managing state for controlled inputs, validation, and submission feedback.</li>
        <li>**Component Architecture:** Reusable layouts like Navbars and Footers combined with dedicated page views.</li>
      </ul>
    </div>
  );
}