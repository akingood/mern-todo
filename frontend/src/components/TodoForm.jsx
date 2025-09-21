import React, { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5000/api/todos";

function TodoForm({ fetchTodos }) {
  const [task, setTask] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    await axios.post(API_URL, { task });
    setTask("");
    fetchTodos();
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task..."
        required
        style={{ padding: "8px", width: "70%" }}
      />
      <button type="submit" style={{ padding: "8px 12px", marginLeft: "10px" }}>
        Add
      </button>
    </form>
  );
}

export default TodoForm;
