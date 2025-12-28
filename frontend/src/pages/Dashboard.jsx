import { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import StatsCards from "../components/StatsCards";
import TaskList from "../components/TaskList";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);

  return (
    <div className="app">
      <Sidebar />
      <div className="main">
        <Header />
        <StatsCards tasks={tasks} />
        <TaskList setDashboardTasks={setTasks} />
      </div>
    </div>
  );
}
