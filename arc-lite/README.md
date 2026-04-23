# 🚦 Smart Street Light Monitoring & Maintenance System

An IoT-based web application to monitor street lights, track energy usage, detect faults, and manage maintenance workers using ESP32 DevKit modules.

---

## 📌 Overview

This project helps cities, campuses, and smart communities efficiently manage street lights using real-time IoT data.

- 📡 ESP32 devices send live data
- 📊 Admin monitors system through dashboard
- 👷 Workers receive and complete assigned tasks
- ⚡ Energy usage is tracked and analyzed
- 🚨 Faults are detected automatically

---

## 🎯 Features

### 👑 Admin Features
- Secure login
- Dashboard with real-time stats
- Monitor all street lights
- View energy usage analytics
- Detect and manage faults
- Assign workers to issues
- Map-based monitoring
- Maintenance history tracking

### 👷 Worker Features
- Secure login
- View assigned tasks
- See fault details & location
- Update task status
- Add repair notes
- View task history

### 🌐 IoT Features
- ESP32 integration
- Live sensor data
- Fault detection
- Energy monitoring
- Offline device detection

---

## ⚙️ Tech Stack

### Frontend
- React.js
- Vite
- Tailwind CSS
- React Router
- Axios
- Chart.js / Recharts
- Leaflet Maps

### Backend
- Node.js
- Express.js

### Database
- PostgreSQL / MongoDB

### IoT Hardware
- ESP32 DevKit
- Voltage & Current Sensors
- LDR Sensor
- Relay Module

### Authentication
- JWT
- bcrypt

---

## 🧠 System Architecture
ESP32 + Sensors
↓
Internet (Wi-Fi)
↓
Backend Server
↓
Database + Fault Logic
↓
React Frontend
↓ ↓
Admin Worker


---

## 🔐 User Roles

### Admin
- Full access
- Monitor lights
- Assign workers
- View analytics

### Worker
- View assigned tasks
- Update repair status

---

## 📂 Project Structure
project/
│
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── layouts/
│ │ ├── services/
│ │ ├── context/
│ │ ├── data/
│ │ └── App.jsx
│
├── backend/
│ ├── controllers/
│ ├── routes/
│ ├── models/
│ ├── middleware/
│ └── server.js
│
├── esp32/
│ └── code.ino
│
└── README.md

------------****------------