import avatar from "../assets/avatar_pic.jpg";

export default function Header() {
  return (
    <header className="header">
      <h2>Task Dashboard</h2>
      <div className="user">
        <span>Hello, Arya</span>
        <img src={avatar} alt="avatar" />
      </div>
    </header>
  );
}