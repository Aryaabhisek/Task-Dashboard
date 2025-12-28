export default function StatsCards({ tasks }) {
  const total = tasks.length;
  const completed = tasks.filter(t => t.status === "Completed").length;
  const pending = tasks.filter(t => t.status === "Pending").length;

  return (
    <div className="stats">
      <div className="card">Total: {total}</div>
      <div className="card pending">Pending: {pending}</div>
      <div className="card completed">Completed: {completed}</div>
    </div>
  );
}
