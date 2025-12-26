import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import StatsCards from "../components/StatsCards";
import TaskList from "../components/TaskList";

export default function Dashboard() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main">
        <Header />
        <StatsCards />
        <TaskList />
      </div>
    </div>
  );
}
