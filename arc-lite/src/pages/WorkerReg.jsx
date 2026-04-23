import React, { useState } from 'react';
import '../styles/WorkerReg.css';
import { useNavigate } from 'react-router-dom';

export default function WorkerReg() {
  const navigate = useNavigate();

  const [workerData, setWorkerData] = useState({
    workerId: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    zone: '',
    role: '',
    isActive: true,
    joiningDate: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setWorkerData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !workerData.workerId ||
      !workerData.username ||
      !workerData.email ||
      !workerData.password ||
      !workerData.confirmPassword ||
      !workerData.phone ||
      !workerData.zone ||
      !workerData.role ||
      !workerData.joiningDate
    ) {
      setMessage('Please fill all fields.');
      return;
    }

    if (workerData.password !== workerData.confirmPassword) {
      setMessage('Passwords do not match.');
      return;
    }

    console.log('Worker Registration:', workerData);
    setMessage('Worker registered successfully.');

    setTimeout(() => {
      navigate('/login');
    }, 1000);
  };

  return (
    <div className="worker-reg-page">
      <div className="worker-reg-container">
        <div className="worker-reg-left">
          <h1>ARC-LITE</h1>
          <p>
            Register maintenance workers for smart street light monitoring,
            issue assignment, and fault resolution across city zones.
          </p>
        </div>

        <div className="worker-reg-right">
          <form className="worker-reg-form" onSubmit={handleSubmit}>
            <h2>Worker Registration</h2>

            <input
              type="text"
              name="workerId"
              placeholder="Worker ID"
              value={workerData.workerId}
              onChange={handleChange}
            />

            <input
              type="text"
              name="username"
              placeholder="Enter Username"
              value={workerData.username}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={workerData.email}
              onChange={handleChange}
            />

            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={workerData.password}
              onChange={handleChange}
            />

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={workerData.confirmPassword}
              onChange={handleChange}
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={workerData.phone}
              onChange={handleChange}
            />

            <input
              type="text"
              name="zone"
              placeholder="Zone"
              value={workerData.zone}
              onChange={handleChange}
            />

            <div className="role-box">
              <p>Select Role</p>

              <label>
                <input
                  type="radio"
                  name="role"
                  value="Electrician"
                  checked={workerData.role === 'Electrician'}
                  onChange={handleChange}
                />
                Electrician
              </label>

              <label>
                <input
                  type="radio"
                  name="role"
                  value="Technician"
                  checked={workerData.role === 'Technician'}
                  onChange={handleChange}
                />
                Technician
              </label>
            </div>

            <label className="active-box">
              <input
                type="checkbox"
                name="isActive"
                checked={workerData.isActive}
                onChange={handleChange}
              />
              Is Active
            </label>

            <input
              type="date"
              name="joiningDate"
              value={workerData.joiningDate}
              onChange={handleChange}
            />

            <button type="submit">Register</button>

            {message && <p className="worker-message">{message}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}