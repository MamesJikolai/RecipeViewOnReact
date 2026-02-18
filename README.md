# 🍽️ Recipe View on React

## 📌 Overview

**Recipe View on React** is a full-stack web application built using **React (Vite)** for the frontend and **Node.js + Express** for the backend.

The application allows users to:

- View stored recipes
- Add new recipes
- Persist recipe data in a JSON-based database

It provides a lightweight and practical solution for users who want a simple way to store and remember recipes and ingredients.

---

## 🛠 Tech Stack

### Frontend

- React (Vite)
- TypeScript
- React Router
- Tailwind CSS
- ESLint

### Backend

- Node.js
- Express.js

### Data Storage

- JSON file-based database (`backend/data`)

---

## 🚀 Features

- ➕ Add new recipes (food name, food type, ingredients)
- 📖 View recipes stored in the JSON database
- 🔄 RESTful API communication between frontend and backend
- 🎨 Responsive UI styled with Tailwind CSS
- ⚡ Fast development environment powered by Vite

---

## 🏗 Project Structure

```bash
RecipeViewOnReact/
│
├── backend/
│   ├── data/                  # JSON database storage
│   ├── node_modules/
│   ├── package.json
│   ├── package-lock.json
│   └── server.js              # Express server (Port 8080)
│
├── frontend/
│   ├── node_modules/
│   ├── public/
│   ├── src/                   # React source files
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── tsconfig.json
│   ├── tsconfig.app.json
│   ├── tsconfig.node.json
│   └── vite.config.ts         # Vite configuration
│
└── .gitignore
```

---

## 📦 Installation & Setup

### Prerequisites

- Node.js (v16+ recommended)
- npm

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/MamesJikolai/RecipeViewOnReact
cd RecipeViewOnReact
```

### 2️⃣ Install Backend Dependencies

```bash
cd backend
npm install
node server.js
```

Backend runs on:

```
http://localhost:8080
```

### 3️⃣ Install Frontend Dependencies

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## 📄 License

This project is intended for educational purposes.

---

If you'd like, I can now:

- Add an **API documentation section**
- Add **sample screenshots placeholders**
- Add **GitHub badges**
- Improve the overview to sound stronger for portfolio use\*\*
- Add a **Deployment section (Render, Vercel, etc.)**
