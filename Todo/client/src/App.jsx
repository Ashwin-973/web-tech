import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./index.css";

const API_URL = "http://localhost:5000/api/todos";

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  /*
    Fetch todos when component mounts
  */

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      setLoading(true);

      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error("Failed to fetch todos");
      }

      const data = await response.json();

      setTodos(data);
    } catch (error) {
      console.error(error);
      setError("Unable to load tasks.");
    } finally {
      setLoading(false);
    }
  };

  /*
    Add new todo
  */

  const addTodo = async (task) => {
    try {
      const response = await fetch(API_URL, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          task,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create todo");
      }

      const newTodo = await response.json();

      setTodos((previousTodos) => [
        newTodo,
        ...previousTodos,
      ]);
    } catch (error) {
      console.error(error);
      setError("Unable to add task.");
    }
  };

  /*
    Toggle completed status
  */

  const toggleTodo = async (id, completed) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "PATCH",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          completed,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to update todo");
      }

      const updatedTodo = await response.json();

      setTodos((previousTodos) =>
        previousTodos.map((todo) =>
          todo._id === updatedTodo._id
            ? updatedTodo
            : todo
        )
      );
    } catch (error) {
      console.error(error);
      setError("Unable to update task.");
    }
  };

  /*
    Delete todo
  */

  const deleteTodo = async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete todo");
      }

      setTodos((previousTodos) =>
        previousTodos.filter((todo) => todo._id !== id)
      );
    } catch (error) {
      console.error(error);
      setError("Unable to delete task.");
    }
  };

  return (
    <div className="app">
      <div className="todo-container">

        <h1>MERN Todo</h1>

        <p className="subtitle">
          React + Express + MongoDB
        </p>

        <TaskForm onAddTodo={addTodo} />

        {error && (
          <p className="error">
            {error}
          </p>
        )}

        {loading ? (
          <p>Loading tasks...</p>
        ) : (
          <TaskList
            todos={todos}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
        )}

      </div>
    </div>
  );
}

export default App;