export default function StatsCards({ tasks }) {
  const total = tasks.length;
  const completed = tasks.filter((t) => t.status === "Completed").length;
  const pending = tasks.filter((t) => t.status === "Pending").length;

  const baseStyle = {
    padding: "12px 18px",
    borderRadius: "5px",
    minWidth: "240px",
    textAlign: "center",
    display: "inline-block",
    marginRight: "8px",
  };

  return (
    <div className="stats" style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 8, margin: "12px 0" }}>
      <div className="card" style={{ ...baseStyle, backgroundColor: "#0d6efd", color: "#fff" }}>All: {total}</div>
      <div className="card pending" style={{ ...baseStyle, backgroundColor: "#ffc107", color: "#000" }}>Pending: {pending}</div>
      <div className="card completed" style={{ ...baseStyle, backgroundColor: "#198754", color: "#fff" }}>Completed: {completed}</div>
    </div>
  );
}
