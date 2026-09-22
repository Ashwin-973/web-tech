function TaskItem({ todo, onToggle, onDelete }) {
  return (
    <li className="task-item">
      <div className="task-content">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo._id, !todo.completed)}
        />

        <span className={todo.completed ? "completed" : ""}>
          {todo.task}
        </span>
      </div>

      <button onClick={() => onDelete(todo._id)}>
        Delete
      </button>
    </li>
  );
}

export default TaskItem;