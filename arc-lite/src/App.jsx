import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import NavBar from './components/NavBar.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Login from './pages/Login.jsx';
import WorkerReg from './pages/WorkerReg.jsx';
import AdminDashboard from './pages/AdminDashboard.jsx';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <Router>
      <div className="app-layout">
        <button
          type="button"
          className="menu-toggle-btn"
          onClick={toggleSidebar}
          aria-label={isSidebarOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isSidebarOpen}
        >
          ...
        </button>

        <NavBar isOpen={isSidebarOpen} onNavigate={closeSidebar} />

        {isSidebarOpen && (
          <button
            type="button"
            className="sidebar-backdrop"
            onClick={closeSidebar}
            aria-label="Close menu backdrop"
          />
        )}

        <div className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/worker-register" element={<WorkerReg />} />
            <Route path="/register" element={<WorkerReg />} />

            {/* NEW */}
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
