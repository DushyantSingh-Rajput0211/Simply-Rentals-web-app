# Simply Rentals Web App

A full-stack web application for managing rental listings and users — built with Node.js, Express, and a modern client-side frontend.

## 🚀 Project Overview

**Simply Rentals** enables users to:
- Browse and post rental listings
- Register and log in securely
- Manage user profiles
- View and manage property details

---

## 🛠️ Tech Stack

### Backend
- **Node.js**
- **Express.js**
- **MongoDB** (assumed — update if different)
- **JWT Authentication**

### Frontend
- **HTML/CSS/JavaScript** (or React — update if needed)
- **Service Worker** (`socialworker.js`) for offline support

---

## 📁 Project Structure

Simply-Rentals-web-app/
│
├── api/                    # Express backend
│   ├── controllers/        # Route handlers
│   ├── models/             # Mongoose schemas
│   ├── routes/             # API routes
│   └── utils/              # Middleware and helpers
│
├── client/                 # Frontend app
│   ├── index.html
│   ├── package.json
│   └── …
│
├── socialworker.js         # Service Worker script
├── package.json            # Backend dependencies
└── .gitignore

---

## 🧪 Getting Started

### 1. Clone the repository

git clone https://github.com/DushyantSingh-Rajput0211/Simply-Rentals-web-app.git
cd Simply-Rentals-web-app

### 2. Install backend dependencies

npm install

### 3. Start the backend server

node api/index.js

### Frontend Setup

cd client
npm install
npm run dev

### Environment Variables

## Create a .env file in the root directory and add the following:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

### Scripts

## Backend
	
 •	npm start – Launch the API server

## Frontend
	
  •	npm run dev – Launch the client-side dev server
	•	npm run build – Build the frontend for production

