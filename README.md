

A full-stack blog application that allows users to create, read, update, and delete blog posts.

🌐 Tech Stack
Frontend
React (Vite or CRA)

React Router DOM

Tailwind CSS

Axios

Backend
Node.js

Express.js

MongoDB with Mongoose

CORS

Dotenv

📁 Project Structure
arduino
Copy
Edit
blog-app/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── .env
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── index.html
└── README.md
🚀 Getting Started
Prerequisites
Ensure Node.js and npm are installed:

bash
Copy
Edit
node -v
npm -v
🖥️ Frontend Setup (React)
📦 Dependencies
Install the following in the frontend/ directory:

bash
Copy
Edit
npm install react react-dom react-router-dom axios
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
⚙️ Tailwind Configuration
In tailwind.config.js:

js
Copy
Edit
content: ["./index.html", "./src/**/*.{js,jsx}"],
theme: { extend: {} },
plugins: [],
In src/index.css or App.css:

//enviroment variable used mongodb atlas
.env
 MongoDB_URL=mongodb+srv:/security purpose remove it...
PORT=8080

css
Copy
Edit
@tailwind base;
@tailwind components;
@tailwind utilities;
🛠️ Backend Setup (Node.js + Express + MongoDB)
📦 Dependencies
In the backend/ directory:

bash
Copy
Edit


npm init -y
npm install express mongoose cors dotenv
📁 .env Example
env
Copy
Edit
PORT=5000
MONGO_URL=your_mongo_connection_string


📁 Example Folder Structure
models/Post.js: Mongoose schema

routes/postRoutes.js: CRUD routes

server.js: Main Express server




🔗 API Endpoints (Example)
GET /app/v1/all – Get all posts

GET /app/v1//singleton/:id – Get single post

POST /app/v1/create/ – Create post

PUT /app/v1/update/:id – Update post

DELETE /app/v1/delete/:id – Delete post





🔄 Running the App
Frontend:
bash
Copy
Edit
cd frontend
npm run dev
Backend:
bash
Copy
Edit
cd backend
node server.js
✨ Features
📄 Add, edit, delete blog posts

🔍 View all blog posts

🎨 Responsive UI with TailwindCSS

🔗 REST API with MongoDB
