import { useEffect, useState } from "react";

const API = "/api/tasks";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    fetch(API).then((r) => r.json()).then(setTasks);
  }, []);

  const addTask = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    const res = await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });
    const newTask = await res.json();
    setTasks([newTask, ...tasks]);
    setText("");
  };

  const toggleTask = async (task) => {
    const res = await fetch(`${API}/${task._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ done: !task.done }),
    });
    const updated = await res.json();
    setTasks(tasks.map((t) => (t._id === updated._id ? updated : t)));
  };

  const deleteTask = async (id) => {
    await fetch(`${API}/${id}`, { method: "DELETE" });
    setTasks(tasks.filter((t) => t._id !== id));
  };

  return (
    <div style={{ maxWidth: 420, margin: "40px auto", fontFamily: "sans-serif" }}>
      <h1>Tasks</h1>

      <form onSubmit={addTask} style={{ display: "flex", gap: 8 }}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="New task..."
          style={{ flex: 1 }}
        />
        <button type="submit">Add</button>
      </form>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map((task) => (
          <li key={task._id} style={{ display: "flex", gap: 8, alignItems: "center", padding: "6px 0" }}>
            <input type="checkbox" checked={task.done} onChange={() => toggleTask(task)} />
            <span style={{ flex: 1, textDecoration: task.done ? "line-through" : "none" }}>
              {task.text}
            </span>
            <button onClick={() => deleteTask(task._id)}>✕</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
