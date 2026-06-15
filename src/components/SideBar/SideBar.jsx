import "./SideBar.css";
import defaultAvatar from "../../assets/user_avatar.svg";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

export default function SideBar({ onEditProfileClick, onLogOut, isLoggedIn }) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <div className="sidebar">
      <div className="sidebar__user-container">
        {currentUser?.data?.avatar ? (
          <img
            src={currentUser?.data?.avatar}
            alt="User Avatar"
            className="sidebar__avatar"
          />
        ) : (
          <span className="sidebar__avatar-ph">
            {currentUser?.data?.name?.[0]}
          </span>
        )}
        <p className="sidebar__user-name">{currentUser?.data?.name}</p>
      </div>
      <div className="sidebar__button-container">
        <button
          onClick={onEditProfileClick}
          className="sidebar__edit-profile-btn"
        >
          Change profile data
        </button>
        <button onClick={onLogOut} className="sidebar__log-out-btn">
          Log out
        </button>
      </div>
    </div>
  );
}
