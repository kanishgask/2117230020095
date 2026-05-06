# Notification System Design

## 📌 Overview
This project is a Campus Notifications System that fetches notifications from a protected external API and displays them based on priority and recency.

The system is divided into:
- Backend (Node.js)
- Frontend (Next.js)
- External Notification API

---

## 🔐 Authentication
The external API is protected using a Bearer Token (JWT).

Each request includes:
Authorization: Bearer <ACCESS_TOKEN>

This ensures:
- Only authorized users can access data
- Secure communication with API

---

## 📡 Data Source

API Endpoint:
http://20.207.122.201/evaluation-service/notifications

Response Format:
