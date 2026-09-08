DexNotes

A full-stack note-taking application built with the MERN stack.

A small project I built to revise and strengthen my MERN stack knowledge through hands-on development.










Overview

DexNotes is a simple CRUD-based note-taking application developed as a practical MERN revision project.

The goal was to refresh how the different parts of a full-stack JavaScript application work together:

React → Axios → Express/Node.js → Mongoose → MongoDB


Along the way, I also implemented API rate limiting to revisit backend middleware and basic API security concepts.

Features
Create notes
View notes
Edit notes
Delete notes
MongoDB persistence
REST API
Axios-based API communication
API rate limiting
Environment variable configuration
Separate frontend and backend
Tech Stack
Layer	Technologies
Frontend	React, Axios, JavaScript, CSS
Backend	Node.js, Express.js
Database	MongoDB, Mongoose
Security	API Rate Limiting
Project Structure
DexNotes/
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

Getting Started
Prerequisites
Node.js
MongoDB
Clone the repository
git clone https://github.com/Student-Prabin/DexNotes.git
cd DexNotes

Install dependencies

Backend:

cd backend
npm install


Frontend:

cd ../frontend
npm install

Environment Variables

Create a .env file inside the backend directory:

PORT=5000
MONGODB_URI=your_mongodb_connection_string


Make sure .env is included in .gitignore.

Run the backend
cd backend
npm run dev

Run the frontend

Open another terminal:

cd frontend
npm run dev

Rate Limiting

The backend uses rate limiting to control the number of requests a client can make within a given period.

This provides a basic layer of protection against excessive requests and was also implemented as part of revisiting backend middleware and security concepts.

What I'm Revising

This project is mainly focused on refreshing my knowledge of:

React
Node.js
Express.js
MongoDB
Mongoose
REST APIs
CRUD operations
Axios
Middleware
Rate limiting
Environment variables
Frontend and backend integration

Rather than following tutorials or revising concepts individually, I wanted to reinforce them by building a working application.

Roadmap
DexNotes
 MERN setup
 MongoDB integration
 REST API
 CRUD operations
 Axios integration
 API rate limiting
 Authentication
 Improve UI
 Add more features
Future: DexGoals

DexNotes is the starting point for a larger idea I want to explore later: DexGoals.

The idea is to transform the note-taking foundation into a social goal-sharing application where friends can create goals, share them with each other, track progress, and provide accountability.

Possible future features:

User authentication
User profiles
Create and manage goals
Goal deadlines
Progress tracking
Friends
Goal sharing
Comments
Reactions
Notifications
Goal streaks
Achievements
Privacy controls

The progression would be:

DexNotes
   ↓
MERN revision + experimentation
   ↓
DexGoals
   ↓
Goals + Friends + Progress + Accountability

Project Status

In development

DexNotes is currently a learning and revision project. The architecture and features may change as I continue experimenting with the MERN stack.

Author

Prabin

GitHub: @Student-Prabin

If you found the project interesting, feel free to ⭐ the repository.
