const axios = require("axios");

const TOKEN = "PASTE_NEW_VALID_TOKEN_HERE";

const weights = {
  Placement: 3,
  Result: 2,
  Event: 1,
};

async function fetchNotifications() {
  const res = await axios.get(
    "http://20.207.122.201/evaluation-service/notifications",
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    }
  );

  const notifications = res.data.notifications;

  const sorted = notifications.sort((a, b) => {
    if (weights[b.Type] !== weights[a.Type]) {
      return weights[b.Type] - weights[a.Type];
    }
    return new Date(b.Timestamp) - new Date(a.Timestamp);
  });

  return sorted;
}

module.exports = { fetchNotifications };
