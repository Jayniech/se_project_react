import "./Header.css";
import headerLogo from "../../assets/header_logo.svg";
import avatar from "../../assets/user_avatar.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Header({
  handleAddClick,
  weatherData,
  isLoggedIn,
  onLogin,
  onSignup,
}) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  const currentUser = useContext(CurrentUserContext);
  console.log(currentUser);

  return (
    <header className="header">
      <div className="header__column">
        <Link to="/">
          <img src={headerLogo} alt="Header Logo" className="header__logo" />
        </Link>
        <p className="header__date-and-location">
          {currentDate}, {weatherData.city}
        </p>
      </div>
      <ToggleSwitch />
      {isLoggedIn ? (
        <>
          <button
            onClick={handleAddClick}
            type="button"
            className="header__add-clothes-btn"
          >
            + Add clothes
          </button>
          <Link to="/profile" className="header__link">
            <div className="header__user-container">
              <p className="header__username">{currentUser?.data?.name}</p>
              {currentUser?.data?.avatar ? (
                <img
                  src={currentUser?.data?.avatar}
                  alt="User Avatar"
                  className="header__avatar"
                />
              ) : (
                <span className="header__avatar-ph">
                  {currentUser?.data?.name?.[0]}
                </span>
              )}
            </div>
          </Link>
        </>
      ) : (
        <div className="header__button-container">
          <button onClick={onSignup} className="header__sign-up-btn">
            Sign Up
          </button>
          <button onClick={onLogin} className="header__log-in-btn">
            Log In
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
