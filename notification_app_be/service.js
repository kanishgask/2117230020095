const axios = require("axios");

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJrYW5pc2hnYS5zLjIwMjMuY3NlQHJpdGNoZW5uYWkuZWR1LmluIiwiZXhwIjoxNzc4MDUxNzQ1LCJpYXQiOjE3NzgwNTA4NDUsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiIzZDczZDlhNS1mNjA2LTRmN2QtODYyMS00YjEwYWMwNDQ0Y2UiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJrYW5pc2hnYSBzIiwic3ViIjoiMDIwOGY4N2EtM2Y1YS00NzEwLTgwODktMjVjYTMwODUwMWMxIn0sImVtYWlsIjoia2FuaXNoZ2Eucy4yMDIzLmNzZUByaXRjaGVubmFpLmVkdS5pbiIsIm5hbWUiOiJrYW5pc2hnYSBzIiwicm9sbE5vIjoiMjExNzIzMDAyMDA5NSIsImFjY2Vzc0NvZGUiOiJCVENEcVQiLCJjbGllbnRJRCI6IjAyMDhmODdhLTNmNWEtNDcxMC04MDg5LTI1Y2EzMDg1MDFjMSIsImNsaWVudFNlY3JldCI6IlZrekhUbWZIekNTVEpzQUcifQ.wgLR0bVG3JhLlXhL3qxoJn47lYDYt9II2npQ08CWbKY";

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
