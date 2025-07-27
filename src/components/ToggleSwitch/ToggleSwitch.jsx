import { useContext, useState } from "react";
import "./ToggleSwitch.css";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

export default function ToggleSwitch() {
  const { handleToggleSwitchChange, currentTemperatureUnit } = useContext(
    CurrentTemperatureUnitContext
  );
  const [hoverState, setHoverState] = useState(false);

  const handleHoverState = () => {
    setHoverState(!hoverState);
  };

  return (
    <label
      onMouseEnter={handleHoverState}
      onMouseLeave={handleHoverState}
      className="toggle-switch"
      htmlFor="toggle-switch"
    >
      <input
        onChange={handleToggleSwitchChange}
        type="checkbox"
        id="toggle-switch"
        className="toggle-switch__checkbox"
      />
      <span
        className={`toggle-switch__circle ${
          currentTemperatureUnit === "F"
            ? hoverState
              ? "toggle-switch__circle_hover"
              : ""
            : hoverState
            ? "toggle-switch__circle_checked_hover"
            : "toggle-switch__circle_checked"
        }`}
      ></span>

      <span
        className={`toggle-switch__text toggle-switch__text_F ${
          currentTemperatureUnit === "F"
            ? "toggle-switch__text_active_color"
            : hoverState
            ? "toggle-switch__text_inactive_hovered"
            : ""
        }`}
      >
        F
      </span>
      <span
        className={`toggle-switch__text toggle-switch__text_C ${
          currentTemperatureUnit === "C"
            ? "toggle-switch__text_active_color"
            : hoverState
            ? "toggle-switch__text_inactive_hovered"
            : ""
        }`}
      >
        C
      </span>
    </label>
  );
}
