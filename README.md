# 📝 DexNotes

A full-stack note-taking application built with the **MERN stack**.

> A small project I built to revise and strengthen my MERN stack knowledge through hands-on development.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge\&logo=react\&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge\&logo=node.js\&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge\&logo=express\&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge\&logo=mongodb\&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge\&logo=axios\&logoColor=white)

---

## 📌 Overview

**DexNotes** is a simple CRUD-based note-taking application developed as a practical **MERN stack revision project**.

The main goal of the project was to refresh how the different components of a full-stack JavaScript application work together:

```text
React
  ↓
Axios
  ↓
Express.js / Node.js
  ↓
Mongoose
  ↓
MongoDB
```

Along the way, I also implemented **API rate limiting** to revisit backend middleware and basic API security concepts.

---

## ✨ Features

* 📝 Create notes
* 👀 View notes
* ✏️ Edit notes
* 🗑️ Delete notes
* 💾 MongoDB persistence
* 🔌 REST API
* 📡 Axios-based API communication
* 🛡️ API rate limiting
* 🔐 Environment variable configuration
* 🔗 Separate frontend and backend
* ⚡ Full-stack MERN integration

---

## 🛠️ Tech Stack

| Layer           | Technologies                  |
| --------------- | ----------------------------- |
| **Frontend**    | React, Axios, JavaScript, CSS |
| **Backend**     | Node.js, Express.js           |
| **Database**    | MongoDB, Mongoose             |
| **Security**    | API Rate Limiting             |
| **Development** | npm, Git, GitHub              |

---

## 📂 Project Structure

```text
DexNotes/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── ...
│
├── frontend/
│   ├── src/
│   └── ...
│
├── .gitignore
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

* [Node.js](https://nodejs.org/)
* [MongoDB](https://www.mongodb.com/)

### 1. Clone the Repository

```bash
git clone https://github.com/Student-Prabin/DexNotes.git
cd DexNotes
```

### 2. Install Backend Dependencies

```bash
cd backend
npm install
```

### 3. Install Frontend Dependencies

Open another terminal:

```bash
cd frontend
npm install
```

---

## 🔐 Environment Variables

Create a `.env` file inside the `backend` directory:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

Make sure `.env` is included in your `.gitignore` file so sensitive configuration values are not committed to GitHub.

Example:

```gitignore
node_modules/
.env
```

---

## ▶️ Running the Application

### Start the Backend

From the `backend` directory:

```bash
npm run dev
```

The backend will run on:

```text
http://localhost:5000
```

### Start the Frontend

Open another terminal:

```bash
cd frontend
npm run dev
```

The frontend will then be available at the URL provided by Vite.

---

## 🛡️ Rate Limiting

DexNotes uses **API rate limiting** on the backend to control the number of requests a client can make within a specific period.

This provides a basic layer of protection against excessive requests and was also implemented as part of revisiting:

* Express middleware
* API security
* Request handling
* Backend protection mechanisms

---

## 🧠 What I'm Revising

This project is primarily focused on refreshing my understanding of:

* ⚛️ React
* 🟢 Node.js
* 🚂 Express.js
* 🍃 MongoDB
* 🔗 Mongoose
* 🌐 REST APIs
* ✏️ CRUD operations
* 📡 Axios
* 🧩 Express middleware
* 🛡️ API rate limiting
* 🔐 Environment variables
* 🔄 Frontend & backend integration

Instead of revising these concepts individually or simply following tutorials, I wanted to reinforce them by **building a working application from scratch**.

---

## 🗺️ Roadmap

### DexNotes

* [x] MERN setup
* [x] MongoDB integration
* [x] REST API
* [x] CRUD operations
* [x] Axios integration
* [x] API rate limiting
* [ ] Authentication
* [ ] Improve UI
* [ ] Add more features

---

# 🚀 Future: DexGoals

**DexNotes** is the starting point for a larger idea I want to explore later: **DexGoals**.

The idea is to transform the note-taking foundation into a **social goal-sharing application** where friends can create goals, share them with each other, track progress, and provide accountability.

### 💡 Possible Features

* 🔐 User authentication
* 👤 User profiles
* 🎯 Create and manage goals
* 📅 Goal deadlines
* 📊 Progress tracking
* 👥 Friends
* 🔗 Goal sharing
* 💬 Comments
* ❤️ Reactions
* 🔔 Notifications
* 🔥 Goal streaks
* 🏆 Achievements
* 🔒 Privacy controls

### Evolution

```text
DexNotes
   ↓
MERN Revision + Experimentation
   ↓
DexGoals
   ↓
Goals + Friends + Progress + Accountability
```

The long-term idea is to evolve from a simple personal productivity tool into a platform focused on **social accountability and goal achievement**.

---

## 📌 Project Status

**🚧 In Development**

DexNotes is currently a **learning and revision project**.

The architecture, UI, and feature set may change as I continue experimenting with the MERN stack and improving my full-stack development skills.

---

## 👨‍💻 Author

### Prabin

GitHub: [@Student-Prabin](https://github.com/Student-Prabin)

---

## ⭐ Support

If you found the project interesting, feel free to **⭐ the repository**!

More features and improvements are coming as I continue learning and experimenting with the MERN stack.
