import React from "react";
import "./ThemeButton.css";
const ThemeButton = ({ type, text, onClick, enabled }) => {
  return (
    <button
      className={`theme-button ${enabled ? "enabled" : "disabled"}`}
      type={type}
      onClick={enabled ? onClick : null}
      disabled={!enabled}
    >
      {text}
    </button>
  );
};

export default ThemeButton;
