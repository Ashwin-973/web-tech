import { useState } from "react";

function TaskForm({ onAddTodo }) {
  const [newTodo, setNewTodo] = useState("");

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!newTodo.trim()) {
      return;
    }

    await onAddTodo(newTodo);

    setNewTodo("");
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        value={newTodo}
        onChange={handleInputChange}
        placeholder="Enter a task..."
      />

      <button type="submit">
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;