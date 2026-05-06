const express = require("express");
const cors = require("cors");
const { fetchNotifications } = require("./service");

const app = express();
app.use(cors());

app.get("/notifications", async (req, res) => {
  try {
    const data = await fetchNotifications();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/priority", async (req, res) => {
  try {
    const data = await fetchNotifications();
    res.json(data.slice(0, 10));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(5000, () => console.log("Backend running on port 5000"));
