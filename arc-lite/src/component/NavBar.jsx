import React from 'react';
import '../styles/NavBar.css';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <h2>ARC-LITE</h2>
      </div>

      <ul className="nav-links">
        <li>
          <Link to="/"> Home</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>

      <div className="bottom-section">
        <Link to="/login" className="logout-btn">Login / Register</Link>
      </div>
    </div>
  );
}