export default function TaskCard({ task, onComplete, onDelete, onEdit }) {
  const cardStyle = {
    borderRadius: "10px",
    padding: "12px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
    marginBottom: "12px",
    background: "#fff",
  };

  const completed = Boolean(task.completed || (task.status && task.status.toLowerCase() === "completed"));
  const handleComplete = () => onComplete?.(task.id);

  return (
    <div className="task-card" style={cardStyle}>
      <div className="task-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            type="checkbox"
            checked={completed}
            onChange={handleComplete}
            aria-label="Mark complete"
            style={{ marginRight: 8, width: 18, height: 18, cursor: "pointer" }}
          />
          <h4 style={{ margin: 0, textDecoration: completed ? "line-through" : "none", color: completed ? "#6c757d" : undefined }}>
            {task.title}
          </h4>
        </div>
        <span className={`badge ${task.status.toLowerCase()}`}>{task.status}</span>
      </div>

      <div className="actions" style={{ display: "flex", alignItems: "center" }}>
        <button
          className="icon-btn"
          aria-label="Edit"
          onClick={() => onEdit?.(task._id || task.id)}
          title="Edit"
          style={{ background: "transparent", border: "none", cursor: "pointer", color: "#0d6efd", marginRight: 8 }}
        >
          <i className="fas fa-pen-to-square" aria-hidden="true" />
        </button>

        <button
          className="icon-btn"
          aria-label="Delete"
          onClick={() => onDelete?.(task.id)}
          title="Delete"
          style={{ background: "transparent", border: "none", cursor: "pointer", color: "#dc3545" }}
        >
          <i className="far fa-xmark" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
