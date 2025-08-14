import "./SideBar.css";
import defaultAvatar from "../../assets/user_avatar.svg";

export default function SideBar() {
  return (
    <div className="sidebar">
      <img
        src={defaultAvatar}
        alt="Default avatar"
        className="sidebar__avatar"
      />
      <p className="sidebar__user-name">Terrence Tegegna</p>
    </div>
  );
}
