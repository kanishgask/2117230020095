# Stage 1 - Notification System Design

## APIs

POST /notifications  
GET /notifications/{userId}  
PUT /notifications/{id}/read  
DELETE /notifications/{id}  

---

## Request Example

{
  "userId": "123",
  "title": "Placement Update",
  "message": "You are shortlisted"
}

---

## Headers

Authorization: Bearer token  
Content-Type: application/json  

---

## Real-Time

Using WebSockets

---

# Stage 2 - Database Design

## DB: MongoDB

## Schema

{
  "_id": "id",
  "userId": "123",
  "title": "Event",
  "message": "Details",
  "read": false,
  "createdAt": "timestamp"
}

---

## Queries

- Get notifications
- Mark as read
- Delete

---

## Scaling Issues

- High traffic
- Large data

## Solutions

- Indexing
- Sharding
- Caching
