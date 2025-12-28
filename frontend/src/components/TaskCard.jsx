export default function TaskCard({ task, onComplete, onDelete }) {
  return (
    <div className="task-card">
      <h4>{task.title}</h4>

      <span className={`badge ${task.status.toLowerCase()}`}>
        {task.status}
      </span>

      <div className="actions">
        {task.status !== "Completed" && (
          <button onClick={() => onComplete(task.id)}>
            Complete
          </button>
        )}
        <button onClick={() => onDelete(task.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}
