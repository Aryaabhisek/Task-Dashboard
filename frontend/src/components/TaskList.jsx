import { useState } from "react";
import TaskCard from "./TaskCard";
import TaskForm from "./TaskForm";

export default function TaskList() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Learn React", status: "Pending" },
    { id: 2, title: "Build Dashboard", status: "Completed" },
  ]);

  const [filter, setFilter] = useState("All");

  const filteredTasks = tasks.filter(task => {
    if (filter === "All") return true;
    return task.status === filter;
  });

  const addTask = (title) => {
    setTasks([
      ...tasks,
      { id: Date.now(), title, status: "Pending" }
    ]);
  };

  const completeTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, status: "Completed" } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="tasks">
      <TaskForm onAdd={addTask} />

      <div className="filters">
        {["All", "Pending", "Completed"].map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={filter === f ? "active" : ""}
          >
            {f}
          </button>
        ))}
      </div>

      {filteredTasks.map(task => (
        <TaskCard
          key={task.id}
          task={task}
          onComplete={completeTask}
          onDelete={deleteTask}
        />
      ))}
    </div>
  );
}
