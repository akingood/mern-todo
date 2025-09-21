import React from "react";
import axios from "axios";

const API_URL = "http://localhost:5000/api/todos";

function TodoList({ todos, fetchTodos }) {
  const toggleComplete = async (id, completed) => {
    await axios.put(`${API_URL}/${id}`, { completed: !completed });
    fetchTodos();
  };

  const deleteTodo = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    fetchTodos();
  };

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {todos.map((todo) => (
        <li
          key={todo._id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "10px",
            padding: "8px",
            border: "1px solid #ddd",
            borderRadius: "5px",
          }}
        >
          <span
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              flex: 1,
              textAlign: "left",
            }}
          >
            {todo.task}
          </span>

          {/* ✅ New Button to toggle completion */}
          <button
            onClick={() => toggleComplete(todo._id, todo.completed)}
            style={{
              background: todo.completed ? "gray" : "green",
              color: "white",
              border: "none",
              borderRadius: "5px",
              padding: "5px 10px",
              cursor: "pointer",
              marginRight: "10px",
            }}
          >
            {todo.completed ? "✔ Unmark" : "Mark Done"}
          </button>

          <button
            onClick={() => deleteTodo(todo._id)}
            style={{
              background: "red",
              color: "white",
              border: "none",
              borderRadius: "5px",
              padding: "5px 10px",
              cursor: "pointer",
            }}
          >
            ❌ Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
