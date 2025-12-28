import { useState } from "react";

export default function Sidebar() {
  const [active, setActive] = useState("Dashboard");

  const items = ["Dashboard", "Tasks", "Analytics"];

  return (
    <aside className="sidebar">
      <h3>Menu</h3>
      <ul>
        {items.map((it) => (
          <li
            key={it}
            className={active === it ? "active" : ""}
            onClick={() => setActive(it)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && setActive(it)}
          >
            {it}
          </li>
        ))}
      </ul>
    </aside>
  );
}
