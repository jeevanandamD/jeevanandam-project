import React from 'react';
import '../styles/Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-overlay">
        <div className="dashboard-header">
          <h1 className="dashboard-title">ARC-LITE</h1>
          <p className="dashboard-subtitle">
            Smart Street Light Monitoring & Energy Management System
          </p>
        </div>

        <div className="dashboard-content">
          <div className="info-card main-card">
            <h2>Welcome</h2>
            <p>
              Welcome to ARC-LITE! This web application is designed to monitor
              street light usage and provide useful insights on energy
              consumption. With ARC-LITE, you can easily track the performance
              of street lights, identify areas with high energy usage, detect
              faults, and make informed decisions to improve overall efficiency.
            </p>
            <p>
              Our user-friendly dashboard helps administrators and workers
              access real-time information, view reports, and manage the street
              lighting system effectively. Together, we can build smarter,
              safer, and more sustainable cities.
            </p>
          </div>

          <div className="card-grid">
            <div className="info-card">
              <h3>Real-Time Monitoring</h3>
              <p>
                Track street light status, power usage, and live performance
                data from the ESP32 backend.
              </p>
            </div>

            <div className="info-card">
              <h3>Energy Insights</h3>
              <p>
                Analyze energy consumption patterns and identify areas where
                electricity can be saved.
              </p>
            </div>

            <div className="info-card">
              <h3>Fault Alerts</h3>
              <p>
                Detect faulty street lights quickly and reduce maintenance
                delays with alert-based monitoring.
              </p>
            </div>

            <div className="info-card">
              <h3>Worker Assignment</h3>
              <p>
                Assign maintenance workers to specific street light locations
                for faster issue resolution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;