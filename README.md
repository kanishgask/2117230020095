Campus Notifications System

📌 Overview

This project is a full-stack Campus Notifications System that fetches notifications from a protected external API and displays them based on priority and recency.

The system consists of:

- Backend (Node.js + Express)
- Frontend (Next.js + Material UI)
- External API (protected using access token)

---

🔐 Authentication

The external API is protected and requires a Bearer token.

All API requests include:

Authorization: Bearer <ACCESS_TOKEN>

---

📁 Project Structure

2117230020095/
│
├── notification_app_be/ # Backend (Node.js)
├── notification_app_fe/ # Frontend (Next.js)
├── logging_middleware/ # Logging functionality
├── screenshots/ # Output screenshots
├── notification_system_design.md
├── .gitignore
└── README.md

---

⚙️ Backend Setup

cd notification_app_be
npm install

▶️ Run Backend

node index.js

Backend runs on:

http://localhost:5000

---

💻 Frontend Setup

cd notification_app_fe
npm install

▶️ Run Frontend

npm run dev

Frontend runs on:

http://localhost:3000

---

🔑 Access Token Setup

Open:

notification_app_be/service.js

Replace:

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJrYW5pc2hnYS5zLjIwMjMuY3NlQHJpdGNoZW5uYWkuZWR1LmluIiwiZXhwIjoxNzc4MDUxNzQ1LCJpYXQiOjE3NzgwNTA4NDUsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiIzZDczZDlhNS1mNjA2LTRmN2QtODYyMS00YjEwYWMwNDQ0Y2UiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJrYW5pc2hnYSBzIiwic3ViIjoiMDIwOGY4N2EtM2Y1YS00NzEwLTgwODktMjVjYTMwODUwMWMxIn0sImVtYWlsIjoia2FuaXNoZ2Eucy4yMDIzLmNzZUByaXRjaGVubmFpLmVkdS5pbiIsIm5hbWUiOiJrYW5pc2hnYSBzIiwicm9sbE5vIjoiMjExNzIzMDAyMDA5NSIsImFjY2Vzc0NvZGUiOiJCVENEcVQiLCJjbGllbnRJRCI6IjAyMDhmODdhLTNmNWEtNDcxMC04MDg5LTI1Y2EzMDg1MDFjMSIsImNsaWVudFNlY3JldCI6IlZrekhUbWZIekNTVEpzQUcifQ.wgLR0bVG3JhLlXhL3qxoJn47lYDYt9II2npQ08CWbKY";

With your actual token:

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJrYW5pc2hnYS5zLjIwMjMuY3NlQHJpdGNoZW5uYWkuZWR1LmluIiwiZXhwIjoxNzc4MDUxNzQ1LCJpYXQiOjE3NzgwNTA4NDUsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiIzZDczZDlhNS1mNjA2LTRmN2QtODYyMS00YjEwYWMwNDQ0Y2UiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJrYW5pc2hnYSBzIiwic3ViIjoiMDIwOGY4N2EtM2Y1YS00NzEwLTgwODktMjVjYTMwODUwMWMxIn0sImVtYWlsIjoia2FuaXNoZ2Eucy4yMDIzLmNzZUByaXRjaGVubmFpLmVkdS5pbiIsIm5hbWUiOiJrYW5pc2hnYSBzIiwicm9sbE5vIjoiMjExNzIzMDAyMDA5NSIsImFjY2Vzc0NvZGUiOiJCVENEcVQiLCJjbGllbnRJRCI6IjAyMDhmODdhLTNmNWEtNDcxMC04MDg5LTI1Y2EzMDg1MDFjMSIsImNsaWVudFNlY3JldCI6IlZrekhUbWZIekNTVEpzQUcifQ.wgLR0bVG3JhLlXhL3qxoJn47lYDYt9II2npQ08CWbKY";

⚠️ Do NOT include "Bearer" in the token variable.

---

📡 API Endpoints

🔹 Get All Notifications

GET http://localhost:5000/notifications

🔹 Get Top 10 Priority Notifications

GET http://localhost:5000/priority

---

⚖️ Priority Logic

Notifications are sorted based on:

1. Type Priority:
   
   - Placement → 3
   - Result → 2
   - Event → 1

2. Timestamp:
   
   - Latest notifications appear first

---

🧪 Testing with Postman

External API

- Method: GET
- URL:

http://20.207.122.201/evaluation-service/notifications

- Header:

Authorization: Bearer <ACCESS_TOKEN>

---

📸 Screenshots

Screenshots are included in the "screenshots/" folder:

- Backend running
- All Notifications page
- Priority Notifications page

---

🚫 .gitignore

Includes:

- node_modules
- .env
- build files

---

🧩 Logging Middleware

A simple logging middleware logs:

- Request method
- Request URL

Used for debugging and monitoring.

---

🚀 Features

- Fetch notifications from protected API
- Priority-based sorting
- Top N notifications display
- Responsive UI (Material UI)
- Backend API integration
- Clean folder structure

---

⚠️ Important Notes

- Token must be valid and not expired
- Backend must be running before frontend
- Do not expose your token publicly

---

✅ Conclusion

This project demonstrates:

- API authentication using Bearer tokens
- Backend data processing and sorting
- Frontend rendering with modern UI
- Clean and modular full-stack architecture

