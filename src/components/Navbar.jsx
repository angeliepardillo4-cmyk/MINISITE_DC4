import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">MiniSiteApp</h2>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact Form</Link></li>
        <li><Link to="/survey">Survey Form</Link></li>
      </ul>
    </nav>
  );
}