import { useEffect, useState } from "react";
import axios from "axios";

interface Task {
  _id: string;
  title: string;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    axios.get("https://your-backend-url.onrender.com/api/tasks")
      .then(res => setTasks(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Feture Came from Sachin</h1>
      <ul>
        {tasks.map((t) => (
          <li key={t._id}>{t.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
// push check