import { useEffect, useState } from "react";
import axios from "axios";
import NotificationCard from "../components/NotificationCard";

export default function Priority() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/priority")
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Top 10 Priority Notifications</h1>
      {data.map(n => <NotificationCard key={n.ID} n={n} />)}
    </div>
  );
}
