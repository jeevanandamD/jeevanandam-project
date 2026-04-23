import React from 'react';
import '../styles/AdminDashboard.css';

export default function AdminDashboard() {
  return (
    <div className="admin-dashboard">
      <h1 className="dashboard-title">Admin Dashboard</h1>

      {/* Summary Cards */}
      <div className="card-grid">
        <div className="card green">
          <h3>Total Lights</h3>
          <p>1200</p>
        </div>

        <div className="card blue">
          <h3>Active Lights</h3>
          <p>980</p>
        </div>

        <div className="card red">
          <h3>Faulty Lights</h3>
          <p>120</p>
        </div>

        <div className="card gray">
          <h3>Offline Lights</h3>
          <p>50</p>
        </div>

        <div className="card yellow">
          <h3>Maintenance</h3>
          <p>50</p>
        </div>

        <div className="card purple">
          <h3>Energy Usage</h3>
          <p>320 kWh</p>
        </div>
      </div>

      {/* Sections */}
      <div className="dashboard-sections">
        {/* Alerts */}
        <div className="section">
          <h2>Recent Alerts</h2>
          <ul>
            <li>SL-101 - Lamp Failure</li>
            <li>SL-202 - Power Issue</li>
            <li>SL-305 - Offline</li>
          </ul>
        </div>

        {/* Worker Assignments */}
        <div className="section">
          <h2>Worker Assignments</h2>
          <ul>
            <li>Worker 1 {'->'} SL-101</li>
            <li>Worker 2 {'->'} SL-202</li>
            <li>Worker 3 {'->'} SL-305</li>
          </ul>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="quick-actions">
        <button>Add Street Light</button>
        <button>Assign Worker</button>
        <button>View Alerts</button>
        <button>Open Map</button>
      </div>
    </div>
  );
}
