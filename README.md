# Military Asset Management System

A modern full-stack Military Asset Management System developed using React, Node.js, Express, MongoDB, JWT Authentication, and Role-Based Access Control (RBAC).

---

## Live Demo

### Frontend (Vercel)
[Military Asset Management Live App](https://military-asset-management-alpha.vercel.app/?utm_source=chatgpt.com)

### Backend (Render)
[Backend API](https://military-assets-backend-f3mg.onrender.com?utm_source=chatgpt.com)

---
##Preview

### Loin Page
[Backend API](https://github.com/GURRALA-HEMASRI/military-asset-management/blob/5f83df7ab0a217d3f31f9e3acbf449223b684ad5/Screenshot%202026-05-13%20232928.png)







# Project Overview

The Military Asset Management System helps military commanders and logistics officers efficiently manage:

- Military Assets
- Asset Purchases
- Base Transfers
- Assignments & Expenditures
- Dashboard Monitoring
- Role-Based Access Control (RBAC)

The application provides a professional elite UI with secure backend integration.

---

# Tech Stack

## Frontend
- React.js
- Material UI (MUI)
- Axios
- Recharts

## Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication

## Database
- MongoDB (Railway)

## Deployment
- Frontend → Vercel
- Backend → Render
- Database → Railway MongoDB

---

# Features

## Authentication System
- Secure JWT Login
- Session Management

## Role-Based Access Control (RBAC)
Roles included:
- Admin
- Base Commander
- Logistics Officer

## Dashboard
- Asset Monitoring
- Purchases Summary
- Transfers Summary
- Assignments Summary
- Visual Analytics

## Purchases Management
- Add New Assets
- Track Purchases

## Transfers Management
- Transfer Assets Between Bases
- Transfer History

## Assignments & Expenditures
- Assign Assets to Units
- Record Expenditures
- Activity Logs

## Responsive UI
- Modern Elite Military Theme
- Fully Responsive Design
- Interactive Cards & Visuals

---

# Folder Structure

```bash
military-asset-management/
│
├── backend/
│   ├── index.js
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── package.json
│   └── .env
│
└── military-asset-management/
    ├── public/
    ├── src/
    │   ├── components/
    │   ├── App.js
    │   └── index.js
    └── package.json
```

---

# Installation & Setup

## Clone Repository

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/military-asset-management.git
```

---

# Backend Setup

## Navigate to backend

```bash
cd backend
```

## Install Dependencies

```bash
npm install
```

## Create .env File

```env
MONGO_URI=YOUR_MONGODB_URL
JWT_SECRET=military_secret_key
PORT=5000
```

## Start Backend

```bash
node index.js
```

---

# Frontend Setup

## Navigate to frontend

```bash
cd military-asset-management
```

## Install Dependencies

```bash
npm install
```

## Start Frontend

```bash
npm start
```

---

# API Endpoints

## Authentication

### Login
```http
POST /api/login
```

---

## Dashboard

### Get Dashboard Data
```http
GET /api/dashboard
```

---

## Purchases

### Add Purchase
```http
POST /api/purchases
```

### Get Purchases
```http
GET /api/purchases
```

---

## Transfers

### Add Transfer
```http
POST /api/transfers
```

### Get Transfers
```http
GET /api/transfers
```

---

## Assignments

### Add Assignment
```http
POST /api/assignments
```

### Get Assignments
```http
GET /api/assignments
```

---

# Login Credentials

## Admin
```text
Username: admin
Password: admin123
```

## Base Commander
```text
Username: commander
Password: commander123
```

## Logistics Officer
```text
Username: logistics
Password: logistics123
```

---

# Deployment

## Frontend Deployment
- Vercel

## Backend Deployment
- Render

## Database Hosting
- Railway MongoDB

---

# Future Improvements

- Real-Time Asset Tracking
- Notifications System
- PDF Report Generation
- Advanced Analytics
- Asset QR Tracking
- Dark/Light Theme Toggle

---

# Author

Hema Sri

---

# License

This project is developed for educational and assignment purposes.
