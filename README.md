Sure! Here’s the README fully written as normal text, clean and readable:

---

# MERN To-Do App 📝

A modern, dark-themed To-Do application built using the MERN stack (MongoDB, Express, React, Node.js). This project demonstrates a full-stack implementation with a responsive frontend, RESTful APIs, and persistent database storage.

---

## Features

* Add, update, and delete tasks.
* Toggle tasks as completed or not completed.
* Fully dark-themed UI with clean, professional layout.
* Responsive design suitable for desktop and large screens.
* Persistent storage using MongoDB Atlas.
* Built with React and Vite for fast frontend development.
* Backend REST API using Express and Node.js.

---

## Tech Stack

* Frontend: React, Vite, CSS (Dark Theme)
* Backend: Node.js, Express
* Database: MongoDB (Atlas or local)
* HTTP Client: Axios

---

## Getting Started

### 1. Clone the repository

Run the following commands in your terminal:

```
git clone https://github.com/username/mern-todo.git
cd mern-todo
```

### 2. Setup Backend

Navigate to the backend folder and install dependencies:

```
cd backend
npm install
```

Create a `.env` file in the backend folder with the following content:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Start the backend server:

```
npm run dev
```

### 3. Setup Frontend

Navigate to the frontend folder, install dependencies, and start the development server:

```
cd ../frontend
npm install
npm run dev
```

Open your browser at the URL shown in the terminal (usually `http://localhost:5173`).

---

## Project Structure

```
mern-todo/
├── backend/          # Express server and API routes
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
├── frontend/         # React + Vite frontend
│   ├── src/
│   ├── index.html
│   └── package.json
├── .gitignore
└── README.md
```

---

