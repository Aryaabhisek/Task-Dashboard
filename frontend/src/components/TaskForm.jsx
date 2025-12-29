import { useState } from "react";

export default function TaskForm({ onAdd }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd(title);
    setTitle("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="task-form"
      style={{ borderRadius: "5px" }}
    >
      <input
        type="text"
        placeholder="Enter task title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        type="submit"
        style={{
          backgroundColor: "#023047",
          color: "#ffffff",
          border: "none",
          padding: "8px 12px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Add Task
      </button>
    </form>
  );
}
