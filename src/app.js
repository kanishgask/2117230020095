import React, { useEffect, useState } from "react";
import axios from "axios";

const TOKEN = "PASTE_YOUR_ACCESS_TOKEN_HERE";

function App() {
  const [notifications, setNotifications] = useState([]);
  const [topNotifications, setTopNotifications] = useState([]);

  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    try {
      const res = await axios.get(
        "http://20.207.122.201/evaluation-service/notifications",
        {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
          },
        }
      );

      const data = res.data.notifications;

      // Priority weights
      const weights = {
        Placement: 3,
        Result: 2,
        Event: 1,
      };

      // Sort logic
      const sorted = [...data].sort((a, b) => {
        if (weights[b.Type] !== weights[a.Type]) {
          return weights[b.Type] - weights[a.Type];
        }
        return new Date(b.Timestamp) - new Date(a.Timestamp);
      });

      setNotifications(sorted);
      setTopNotifications(sorted.slice(0, 10));
    } catch (err) {
      console.error("Error fetching notifications:", err);
    }
  };

  const getColor = (type) => {
    if (type === "Placement") return "#e53935";
    if (type === "Result") return "#1e88e5";
    return "#43a047";
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>📢 Campus Notifications</h1>

      {/* TOP 10 */}
      <h2>🔥 Top 10 Priority Notifications</h2>
      {topNotifications.map((n, i) => (
        <div
          key={n.ID}
          style={{
            border: "1px solid #ddd",
            padding: "10px",
            margin: "10px 0",
            borderRadius: "8px",
            background: "#f9f9f9",
          }}
        >
          <strong style={{ color: getColor(n.Type) }}>
            [{n.Type}]
          </strong>
          <p>{n.Message}</p>
          <small>{n.Timestamp}</small>
        </div>
      ))}

      {/* ALL */}
      <h2>📄 All Notifications</h2>
      {notifications.map((n) => (
        <div
          key={n.ID}
          style={{
            border: "1px solid #ccc",
            padding: "8px",
            margin: "8px 0",
            borderRadius: "6px",
          }}
        >
          <strong>[{n.Type}]</strong> {n.Message}
          <br />
          <small>{n.Timestamp}</small>
        </div>
      ))}
    </div>
  );
}

export default App
