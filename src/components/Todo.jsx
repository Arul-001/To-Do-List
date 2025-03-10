import React from 'react';

export const Todo = ({ task, deleteTodo, editTodo, toggleComplete }) => {
  return (
    <div className="Todo">
      <p
        className={`${task.completed ? "completed" : "incompleted"}`}
        onClick={() => toggleComplete(task.id)}
      >
        {task.task}
      </p>
      <div>
        <span
          className="edit-icon"
          onClick={() => editTodo(task.id)}
          role="button"
          style={{ cursor: "pointer", marginRight: "10px", color: "blue" }}
        >
          ✏️
        </span>
        <span
          className="delete-icon"
          onClick={() => deleteTodo(task.id)}
          role="button"
          style={{ cursor: "pointer", color: "red" }}
        >
          🗑️
        </span>
      </div>
    </div>
  );
};
