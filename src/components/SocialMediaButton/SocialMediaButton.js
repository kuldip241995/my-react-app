import React from "react";
import "./SocialMediaButton.css";
const SocialMediaButton = ({ image, text, onClick }) => {
  return (
    <button className="social-media-button" onClick={onClick}>
      <img src={image} alt={text} className="social-media-icon" />
      <span className="social-media-text">{text}</span>
    </button>
  );
};
export default SocialMediaButton;
