import React from "react";
import "./TextInput.css";
const TextInput = ({ label, type, value, onChange, placeholder, error }) => {
  return (
    <div className="form-group">
      <text className="form-label-style">{label}</text>
      <div>
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`form-input ${error ? "error" : ""}`}
        />
      </div>
      <div>{error && <span className="error-message">{error}</span>}</div>
    </div>
  );
};

export default TextInput;
