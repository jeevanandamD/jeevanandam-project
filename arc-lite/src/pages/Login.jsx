import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Login.css';

export default function Login() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
    role: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRoleChange = (e) => {
    setCredentials((prev) => ({
      ...prev,
      role: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { username, password, role } = credentials;

    if (!username || !password || !role) {
      setMessage('Please fill all fields and select a role.');
      return;
    }

    if (credentials.role === 'Admin') {
      navigate('/admin/dashboard');
    } else {
      navigate('/dashboard');
    }

    console.log('Login Data:', credentials);
    setMessage(`Login successful as ${role}`);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-left">
          <h1>ARC-LITE</h1>
          <p>
            Smart Street Light Monitoring and Energy Management System.
            Monitor lighting performance, detect faults, and manage workers
            efficiently through a secure login portal.
          </p>
        </div>

        <div className="login-right">
          <form className="login-form" onSubmit={handleSubmit}>
            <h2>Login</h2>

            <input
              type="text"
              name="username"
              placeholder="Enter Username"
              value={credentials.username}
              onChange={handleChange}
            />

            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={credentials.password}
              onChange={handleChange}
            />

            <div className="role-section">
              <p>Select Role</p>

              <label>
                <input
                  type="radio"
                  name="role"
                  value="Worker"
                  checked={credentials.role === 'Worker'}
                  onChange={handleRoleChange}
                />
                Worker
              </label>

              <label>
                <input
                  type="radio"
                  name="role"
                  value="Admin"
                  checked={credentials.role === 'Admin'}
                  onChange={handleRoleChange}
                />
                Admin
              </label>
            </div>

            <button type="submit">Login</button>

            <p className="login-register-text">
              New Worker? <Link to="/worker-register">Register here</Link>
            </p>

            {message && <p className="login-message">{message}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}
