import React from 'react';
import '../styles/NavBar.css';
import { Link } from 'react-router-dom';
import streetLightLogo from '../assets/streetlight-logo.svg';

export default function NavBar({ isOpen, onNavigate }) {
  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="logo">
        <img className="logo-image" src={streetLightLogo} alt="ARC-LITE street light logo" />
        <h2>ARC-LITE</h2>
      </div>

      <ul className="nav-links">
        <li>
          <Link to="/" onClick={onNavigate}>Home</Link>
        </li>
        <li>
          <Link to="/dashboard" onClick={onNavigate}>Dashboard</Link>
        </li>
        <li>
          <Link to="/login" onClick={onNavigate}>Login</Link>
        </li>
      </ul>

      <div className="bottom-section">
        <Link to="/login" className="logout-btn" onClick={onNavigate}>Login / Register</Link>
      </div>
    </aside>
  );
}
