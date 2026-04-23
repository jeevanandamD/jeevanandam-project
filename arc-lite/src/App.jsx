import './App.css';
import { BrowserRouter as Router, Navigate, Outlet, Route, Routes } from 'react-router-dom';

import NavBar from './components/NavBar.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Login from './pages/Login.jsx';
import WorkerReg from './pages/WorkerReg.jsx';

function AppLayout() {
  return (
    <div className="app-layout">
      <NavBar />
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<WorkerReg />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
