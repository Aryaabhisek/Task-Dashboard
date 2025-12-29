import avatar from "../assets/avatar_pic.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";

export default function Header({ onToggleSidebar }) {
  return (
    <header className="header">
      <button className="hamburger" aria-label="Toggle menu" onClick={(e) => { e.stopPropagation(); onToggleSidebar?.(); }}>
        <span />
        <span />
        <span />
      </button>
      <FontAwesomeIcon icon={faListCheck} className="taskLogo"/>
      <div className="user">
        <span>Hello, Arya</span>
        <img src={avatar} alt="avatar" />
      </div>
    </header>
  );
}