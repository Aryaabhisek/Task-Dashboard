import { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import StatsCards from "../components/StatsCards";
import TaskList from "../components/TaskList";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="app" onClick={() => setSidebarOpen(false)}>
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      <div className="main">
        <Header onToggleSidebar={() => setSidebarOpen((s) => !s)} />
        <StatsCards tasks={tasks} />
        <TaskList setDashboardTasks={setTasks} />
      </div>
    </div>
  );
}
