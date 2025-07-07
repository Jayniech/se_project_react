import "./Header.css";
import headerLogo from "../../assets/header_logo.svg";
import avatar from "../../assets/user_avatar.svg";

function Header() {
  return (
    <header className="header">
      <div className="header__column">
        <img src={headerLogo} alt="Header Logo" className="header__logo" />
        <p className="header__date-and-location">DATE, LOCATION</p>
      </div>
      <button className="header__add-clothes-btn">+ Add clothes</button>
      <div className="header__user-container">
        <p className="header__username">Terrence Tegegne</p>
        <img src={avatar} alt="User Avatar" className="header__avatar" />
      </div>
    </header>
  );
}

export default Header;
