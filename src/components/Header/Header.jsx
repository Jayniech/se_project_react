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
      <button
        onClick={handleAddClick}
        type="button"
        className="header__add-clothes-btn"
      >
        + Add clothes
      </button>
      {isLoggedIn ? (
        <Link to="/profile" className="header__link">
        <div className="header__user-container">
          <p className="header__username">{currentUser.name}</p>
          {currentUser.avatar ? (<img src={currentUser.avatar} alt="User Avatar" className="header__avatar"/>):(<span className="header__avatar-ph">{currentUser.name[0]}</span>)}
        </div>
      </Link>
      ):(
        <div>
          <button onClick={onSignup}>Sign Up</button>
          <button onClick={onLogin}>Log In</button>
          {/* TODO - 
              1. style login sign up buttons 
              2. fix button positions on register and login modals */}
        </div>
      )}
      
    </header>
  );
}

export default Header;
