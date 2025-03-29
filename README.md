# Mini Data Query Simulation Engine

## 📌 Project Overview

The **Mini Data Query Simulation Engine** is a lightweight backend service that simulates a simplified version of an AI-powered data query system. It converts natural language queries into pseudo-SQL, validates queries, and returns mock data responses.

## 🚀 Features

- ✅ Convert natural language queries into pseudo-SQL.
- ✅ Return structured query breakdowns.
- ✅ Validate query feasibility.
- ✅ Lightweight authentication using API keys.
- ✅ In-memory database using SQLite.
- ✅ Error handling for unsupported queries.

## 🏗️ Tech Stack

- **Backend:** Node.js + Express.js
- **Database:** SQLite (In-Memory)
- **Auth:** API key-based authentication
- **Testing:** Postman or cURL

---

## 📂 Folder Structure

```
mini-query-engine/
│── node_modules/       # Installed dependencies
│── src/
│   ├── controllers/
│   │   ├── queryController.js   # Handles query processing
│   ├── middleware/
│   │   ├── auth.js              # API key authentication
│   ├── utils/
│   │   ├── queryParser.js       # Converts NL queries to pseudo-SQL
│   ├── database/
│   │   ├── initDB.js            # Initializes SQLite database
│   ├── routes/
│   │   ├── queryRoutes.js       # Defines API endpoints
│   ├── app.js                   # Main Express app
│── .env                         # Environment variables
│── package.json                  # Dependencies
│── README.md                     # Project documentation
│── server.js                      # Entry point
```

---

## 🔧 Setup Instructions

### 1️⃣ Install Dependencies

```sh
npm install
```

### 2️⃣ Configure Environment Variables

Create a `.env` file in the root directory:

```env
API_KEY=12345  # Change this to a secure key
```

### 3️⃣ Run the Server

```sh
node server.js
```

The API will run on **[http://localhost:5000](http://localhost:5000)**.

---

## 📡 API Endpoints

### 1️⃣ **Query API**

- **Endpoint:** `POST /api/query`
- **Description:** Converts a natural language query into pseudo-SQL and returns mock data.
- **Headers:**
  ```json
  { "x-api-key": "12345" }
  ```
- **Request Body:**
  ```json
  { "query": "Show me all users" }
  ```
- **Response:**
  ```json
  {
    "query": "Show me all users",
    "sql": "SELECT * FROM users;",
    "type": "fetch",
    "data": [
      { "id": 1, "name": "Alice", "age": 25 },
      { "id": 2, "name": "Bob", "age": 30 }
    ]
  }
  ```

---

### 2️⃣ **Explain Query API**

- **Endpoint:** `POST /api/explain`
- **Description:** Returns an explanation of how the query is processed.
- **Request Body:**
  ```json
  { "query": "How many users are there?" }
  ```
- **Response:**
  ```json
  {
    "query": "How many users are there?",
    "explanation": "This query translates to: SELECT COUNT(*) FROM users;"
  }
  ```

---

### 3️⃣ **Validate Query API**

- **Endpoint:** `POST /api/validate`
- **Description:** Checks whether a query is valid and supported.
- **Request Body:**
  ```json
  { "query": "Show me all orders" }
  ```
- **Response:**
  ```json
  {
    "query": "Show me all orders",
    "valid": false
  }
  ```

---

## 📋 Postman Testing Examples

### 1️⃣ Query API Test

**Method:** `POST`
**URL:** `http://localhost:5000/api/query`
**Headers:**

```
Key: x-api-key    Value: 12345
```

**Body:** (JSON)

```
  {
      "query": "Show me all users"
  }
```

**Response:**

```
{
    "query": "Show me all users",
    "sql": "SELECT * FROM users;",
    "type": "fetch",
    "data": [
      { "id": 1, "name": "Alice", "age": 25 },
      { "id": 2, "name": "Bob", "age": 30 }
    ]
}
```

---

## 🛠️ Additional Commands

### Run the server in development mode:

```sh
nodemon server.js
```

### API Testing with cURL:

```sh
curl -X POST "http://localhost:5000/api/query" \
-H "Content-Type: application/json" \
-H "x-api-key: 12345" \
-d '{"query": "Show me all users"}'
```

---

## 📌 Future Enhancements

- Add support for more complex queries.
- Implement AI-based query processing.
- Store query history for analytics.

🚀 **Happy Coding!** 🎯

