import "./SideBar.css";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

export default function SideBar({ onEditProfileClick, onLogOut, isLoggedIn }) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <div className="sidebar">
      <div className="sidebar__user-container">
        {currentUser?.avatar ? (
          <img
            src={currentUser?.avatar}
            alt="User Avatar"
            className="sidebar__avatar"
          />
        ) : (
          <span className="sidebar__avatar-ph">
            {currentUser?.name?.[0]}
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
