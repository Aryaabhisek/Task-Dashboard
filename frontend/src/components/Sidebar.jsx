import { useState } from "react";

export default function Sidebar({ open, setOpen }) {
  const [active, setActive] = useState("Dashboard");

  const items = ["Dashboard", "Tasks", "Analytics"];

  const renderIcon = (it) => {
    switch (it) {
      case "Dashboard":
        return (
          <svg className="icon" aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 10v-8h8v8h-8z" fill="currentColor" />
          </svg>
        );
      case "Tasks":
        return (
          <svg className="icon" aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 11l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M21 8V7a2 2 0 0 0-2-2h-3.18A2 2 0 0 1 13 3H11a2 2 0 0 1-1.82 2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
        );
      case "Analytics":
        return (
          <svg className="icon" aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 3v18h18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8 14v5M13 10v9M18 6v13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      default:
        return <span className="icon" aria-hidden>●</span>;
    }
  };

  return (
    <aside className={`sidebar ${open ? "open" : ""}`} onClick={(e) => e.stopPropagation()}>
      <div className="sidebar-inner">
        <h3>Menu</h3>
        <ul>
          {items.map((it) => (
            <li
              key={it}
              className={active === it ? "active" : ""}
              onClick={() => setActive(it)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setActive(it);
                }
              }}
            >
              {renderIcon(it)}
              <span className="label">{it}</span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
