<div align="center">
📝 DexNotes
A simple full-stack note-taking application built with the MERN stack.
<p> <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" /> <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" /> <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js" /> <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" /> <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white" alt="Axios" /> </p> <p> <a href="https://github.com/Student-Prabin/DexNotes"> <img src="https://img.shields.io/github/stars/Student-Prabin/DexNotes?style=flat-square" alt="Stars" /> </a> <a href="https://github.com/Student-Prabin/DexNotes/issues"> <img src="https://img.shields.io/github/issues/Student-Prabin/DexNotes?style=flat-square" alt="Issues" /> </a> <a href="https://github.com/Student-Prabin/DexNotes"> <img src="https://img.shields.io/github/license/Student-Prabin/DexNotes?style=flat-square" alt="License" /> </a> </p> </div>
📖 About

DexNotes is a full-stack note-taking application built using the MERN stack.

This project was created primarily as a MERN revision project. Instead of revisiting each technology separately, I wanted to practice building a complete application and refresh my understanding of how the different parts of a full-stack application work together.

The project covers concepts such as React, REST APIs, CRUD operations, MongoDB, Mongoose, Axios, Express middleware, and API rate limiting.

🚧 DexNotes is a learning project and is still evolving.

✨ Features
📝 Create notes
👀 View notes
✏️ Update notes
🗑️ Delete notes
💾 Persistent storage with MongoDB
🔗 RESTful API
⚡ Axios for API communication
🛡️ API rate limiting
🔧 Express middleware
🔐 Environment variable configuration
🏗️ Separate frontend and backend architecture
🛠️ Tech Stack
Frontend
Technology	Usage
⚛️ React	Building the user interface
📡 Axios	Making HTTP requests to the backend
🟨 JavaScript	Application logic
🎨 CSS	Styling
Backend
Technology	Usage
🟢 Node.js	JavaScript runtime
🚂 Express.js	Backend framework and REST API
🍃 Mongoose	MongoDB object modeling
🛡️ Rate Limiting	Limiting excessive API requests
Database
Technology	Usage
🍃 MongoDB	Storing notes and application data
🏗️ Architecture
                    ┌──────────────────┐
                    │                  │
                    │      React       │
                    │    Frontend      │
                    │                  │
                    └────────┬─────────┘
                             │
                             │ Axios
                             │ HTTP Requests
                             ▼
                    ┌──────────────────┐
                    │                  │
                    │ Node.js +        │
                    │ Express.js       │
                    │                  │
                    │ ┌──────────────┐ │
                    │ │ Rate Limiter │ │
                    │ └──────────────┘ │
                    │                  │
                    │    REST API      │
                    │                  │
                    └────────┬─────────┘
                             │
                             │ Mongoose
                             ▼
                    ┌──────────────────┐
                    │                  │
                    │     MongoDB      │
                    │                  │
                    └──────────────────┘

📂 Project Structure
DexNotes/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   └── ...
│
├── frontend/
│   ├── src/
│   └── ...
│
├── .gitignore
├── package.json
└── README.md


The project structure may change as the application evolves.

🚀 Getting Started
Prerequisites

Make sure you have the following installed:

Node.js
MongoDB
1. Clone the repository
git clone https://github.com/Student-Prabin/DexNotes.git

cd DexNotes

2. Install dependencies

Install the backend dependencies:

cd backend
npm install


Install the frontend dependencies:

cd ../frontend
npm install

3. Configure environment variables

Create a .env file inside the backend directory.

PORT=5000
MONGODB_URI=your_mongodb_connection_string


Make sure your .env file is included in .gitignore and never commit your database credentials.

4. Start the backend
cd backend
npm run dev

5. Start the frontend

Open another terminal:

cd frontend
npm run dev


The application should now be running locally.

🔐 Rate Limiting

DexNotes includes API rate limiting on the backend.

Rate limiting restricts the number of requests a client can make within a specific period of time. This helps prevent excessive requests and provides a basic layer of protection against API abuse.

Implementing rate limiting was also part of my goal of revisiting backend concepts beyond basic CRUD operations.

🎯 What I'm Practicing

The main purpose of this project is to revise MERN by building.

Some of the concepts I'm practicing include:

⚛️ React component development
🔗 REST API integration
📡 Axios HTTP requests
🟢 Express.js routing
🔄 CRUD operations
🍃 MongoDB and Mongoose
🧩 Express middleware
🛡️ API rate limiting
🔐 Environment variables
🏗️ Full-stack project architecture
🔄 Frontend ↔ Backend communication

The overall request flow is:

React
  │
  ▼
Axios
  │
  ▼
Express API
  │
  ▼
Middleware
  │
  ▼
Rate Limiting
  │
  ▼
Mongoose
  │
  ▼
MongoDB

🗺️ Roadmap
DexNotes
 MERN project setup
 MongoDB integration
 REST API
 Note CRUD operations
 Axios integration
 API rate limiting
 Authentication
 Improve UI/UX
 Add more advanced features
🔮 Future — DexGoals

DexNotes is intended to be the starting point for a future project called DexGoals.

The idea is to evolve the application from a personal note-taking app into a social goal-sharing platform where friends can create goals, share their progress, and keep each other accountable.

Potential Features
👤 User authentication
🧑 User profiles
🎯 Create and manage goals
📅 Goal deadlines
📊 Progress tracking
👥 Friends system
📢 Share goals with friends
❤️ Reactions
💬 Comments
🔔 Notifications
🔥 Goal streaks
🏆 Achievements
🔒 Privacy controls

The planned evolution:

                     DexNotes
                        │
                        │
                 MERN Revision
                        │
                        ▼
                     DexGoals
                        │
          ┌─────────────┼─────────────┐
          ▼             ▼             ▼
        Goals         Friends       Progress
          │             │             │
          └─────────────┼─────────────┘
                        ▼
                  Accountability

💡 The Idea

DexNotes — Write it down.
DexGoals — Set it. Share it. Achieve it.

📚 Why I Built This

This project is primarily about refreshing my MERN knowledge through hands-on development.

Rather than building DexGoals immediately, I wanted to start with something smaller and use it to rebuild my understanding of the MERN fundamentals.

As I continue developing DexNotes, I can gradually introduce more complex concepts and eventually use the project as the foundation for DexGoals.

📌 Project Status
<div align="center">
🚧 In Development

This is currently a learning and revision project.

More features and improvements will be added as I continue exploring the MERN stack.

</div>
👨‍💻 Author

Prabin

GitHub: @Student-Prabin

<div align="center">
⭐ If you find this project interesting, consider giving it a star!

Built while revisiting the MERN stack 🚀

</div>
