import { useState, useEffect } from "react";
import TaskCard from "./TaskCard";
import TaskForm from "./TaskForm";
import { getTasks, addTask as apiAddTask, updateTask, deleteTask as apiDeleteTask } from "../services/api";

export default function TaskList({ setDashboardTasks }) {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const load = async () => {
      try {
        const data = await getTasks();
        setTasks(data);
        if (setDashboardTasks) setDashboardTasks(data);
      } catch (err) {
        console.error("Failed to fetch tasks", err);
      }
    };
    load();
  }, [setDashboardTasks]);

  const filteredTasks = tasks.filter((task) => {
    if (filter === "All") return true;
    return task.status === filter;
  });

  const addTask = async (title) => {
    try {
      const newTask = await apiAddTask(title);
      setTasks((prev) => [newTask, ...prev]);
      if (setDashboardTasks) setDashboardTasks([newTask, ...tasks]);
    } catch (err) {
      console.error("Add task failed", err);
    }
  };

  const completeTask = async (id) => {
    try {
      const updated = await updateTask(id, { status: "Completed" });
      setTasks((prev) => prev.map((t) => (t._id === id || t.id === id ? { ...t, status: "Completed" } : t)));
      if (setDashboardTasks) setDashboardTasks(tasks.map((t) => (t._id === id || t.id === id ? { ...t, status: "Completed" } : t)));
    } catch (err) {
      console.error("Complete failed", err);
    }
  };

  const deleteTask = async (id) => {
    try {
      await apiDeleteTask(id);
      const newList = tasks.filter((t) => !(t._id === id || t.id === id));
      setTasks(newList);
      if (setDashboardTasks) setDashboardTasks(newList);
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  return (
    <div className="tasks">
      <TaskForm onAdd={addTask} />

      <div className="filters">
        {["All", "Pending", "Completed"].map((f) => (
          <button key={f} onClick={() => setFilter(f)} className={filter === f ? "active" : ""}>
            {f}
          </button>
        ))}
      </div>

      {filteredTasks.map((task) => (
        <TaskCard key={task._id || task.id} task={task} onComplete={() => completeTask(task._id || task.id)} onDelete={() => deleteTask(task._id || task.id)} />
      ))}
    </div>
  );
}
