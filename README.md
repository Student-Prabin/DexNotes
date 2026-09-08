📝 DexNotes

DexNotes is a simple full-stack note-taking application built with the MERN stack.

This project was created primarily to revise and strengthen my MERN stack knowledge by building a complete application from frontend to backend and database. It serves as a practical refresher for concepts such as REST APIs, CRUD operations, MongoDB, API communication, middleware, and basic backend security.

DexNotes is also the starting point for a future idea called DexGoals — a social platform where friends can share their goals, track progress, and keep each other accountable.

🎯 Purpose

The main purpose of DexNotes is learning and revision.

Instead of revising MERN concepts separately, I wanted to put them together in a small project and practice building a full-stack application.

Through this project, I'm revisiting:

React and frontend development
Node.js and Express.js
MongoDB and Mongoose
REST API development
CRUD operations
Client-server communication
Axios for making API requests
Express middleware
API rate limiting
Environment variables
Full-stack project structure
🚀 Features
Notes
Create notes
View notes
Update notes
Delete notes
Store notes in MongoDB
Backend
RESTful API using Express.js
MongoDB integration using Mongoose
Rate limiting to help prevent excessive API requests
Environment-based configuration
Middleware-based backend structure
Frontend
Built with React
Axios for communicating with the backend API
Simple and responsive user interface
🛠️ Tech Stack
Technology	Purpose
React	Frontend UI
Node.js	Backend runtime
Express.js	REST API and server
MongoDB	Database
Mongoose	MongoDB object modeling
Axios	HTTP requests between frontend and backend
Rate Limiting	Basic API protection
JavaScript	Primary programming language
🏗️ Application Architecture
┌──────────────────────┐
│                      │
│       React          │
│      Frontend        │
│                      │
└──────────┬───────────┘
           │
           │ Axios
           │ HTTP Requests
           ▼
┌──────────────────────┐
│                      │
│   Node.js + Express  │
│                      │
│    REST API          │
│    Middleware        │
│    Rate Limiting     │
│                      │
└──────────┬───────────┘
           │
           │ Mongoose
           ▼
┌──────────────────────┐
│                      │
│       MongoDB        │
│                      │
└──────────────────────┘

📂 Project Structure
DexNotes/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.jsx
│   │
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   └── server.js
│
├── .gitignore
├── README.md
└── package.json


The structure may change as the project develops.

🔐 Rate Limiting

The backend includes API rate limiting as a basic security measure.

Rate limiting restricts the number of requests a client can make within a certain period of time. This helps reduce excessive requests and provides basic protection against API abuse.

This is also part of the project because I wanted to refresh some backend concepts beyond basic CRUD functionality.

⚙️ Getting Started
Clone the repository
git clone <your-repository-url>
cd DexNotes

Install dependencies

Install the backend dependencies:

cd server
npm install


Install the frontend dependencies:

cd ../client
npm install

Environment Variables

Create a .env file in the backend directory.

PORT=5000
MONGODB_URI=your_mongodb_connection_string


Add any other environment variables required by the project.

Run the backend
cd server
npm run dev

Run the frontend

In another terminal:

cd client
npm run dev

🗺️ Roadmap
Current — DexNotes
 MERN project setup
 MongoDB integration
 REST API
 Note CRUD operations
 Axios API communication
 API rate limiting
 Authentication
 Further UI improvements
Future — DexGoals

The long-term idea is to evolve DexNotes into DexGoals.

DexGoals would allow users to create goals and share them with friends, creating a more social and accountability-focused experience.

Possible future features:

 User authentication
 User profiles
 Create and manage goals
 Goal deadlines
 Goal progress tracking
 Friends
 Share goals
 Reactions
 Comments
 Notifications
 Goal streaks
 Achievements
 Progress dashboard
 Privacy controls

The general idea:

DexNotes
   │
   │  MERN revision project
   ▼
DexGoals
   │
   ├── Users
   ├── Goals
   ├── Friends
   ├── Progress
   ├── Accountability
   └── Community

🌱 What I'm Practicing

This project is mainly about revisiting MERN by building, rather than trying to create a large production application from the beginning.

The project gives me a chance to refresh how the different parts of a MERN application work together:

React
  ↓
Axios
  ↓
Express API
  ↓
Middleware / Rate Limiting
  ↓
Mongoose
  ↓
MongoDB


As the project grows, I plan to use the same foundation to explore more advanced concepts and eventually experiment with the DexGoals idea.

🔮 From Notes to Goals

DexNotes is the starting point.

Today, the application is focused on creating and managing notes.

In the future, I want to transform the concept into DexGoals, where the focus shifts from storing information to achieving something.

DexNotes: Write it down.
DexGoals: Set it. Share it. Achieve it. 🚀

📄 License

This project is primarily for learning, practice, and experimentation with the MERN stack.
