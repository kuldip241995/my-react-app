import React, { useState } from "react";
import "./RegisterPage.css";
import images from "../../../assets/images";
import TextInput from "../../../components/TextInput/TextInput";
import ThemeButton from "../../../components/ThemeButton/ThemeButton";
import SocialMediaButton from "../../../components/SocialMediaButton/SocialMediaButton";
import icons from "../../../assets/icons";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loginButtonEnabled, setLoginButtonEnabled] = useState(false);
  const navigate = useNavigate(); // Use useNavigate hook

  const handleUserChange = (e) => {
    setUserName(e.target.value);
    setUsernameError(""); // Clear previous error message
    // Validate email format here
    // const isValid = /\S+@\S+\.\S+/.test(e.target.value);
    // if (!isValid) {
    //   setEmailError("Please enter valid email address");
    // }
    // handleLoginButtonEnabledDisabled();
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError(""); // Clear previous error message
    // Validate email format here
    const isValid = /\S+@\S+\.\S+/.test(e.target.value);
    if (!isValid) {
      setEmailError("Please enter valid email address");
    }
    handleLoginButtonEnabledDisabled();
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError(""); // Clear previous error message
    // Validate password format here
    const isValid = e.target.value.length >= 6;
    if (!isValid) {
      setPasswordError("Password must be at least 6 characters long");
    }
    handleLoginButtonEnabledDisabled();
  };

  const handleLoginButtonEnabledDisabled = (email, password) => {
    const isEmailValid = /\S+@\S+\.\S+/.test(email);
    const isPasswordValid = password.length >= 6;
    setLoginButtonEnabled(isEmailValid && isPasswordValid);
  };

  const handleSubmitClicked = (e) => {
    console.log("handleSubmit clicked..");
  };

  const handleLoginClicked = () => {
    navigate("/login"); // Navigate to signup page
  };

  return (
    <div className="login-page">
      <div className="image-container d-none d-md-block">
        {/* Replace the image URL with your actual image */}
        <img
          src={images.imgLoginLeft}
          alt="Login Background"
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      </div>
      <div className="form-container">
        <div className="form-sub-container">
          <img
            src={images.imgAppLogo}
            alt="Login Background"
            style={{ width: "100px", height: "50px" }}
          />
          <div className="title-container">
            <text className="title-text">Create Account</text>
          </div>
          <div style={{ margin: "1.5rem" }}></div>
          
          <form style={{ marginTop: "1.5rem" }}>
           <TextInput
              label="Username"
              value={username}
              onChange={handleUserChange}
              placeholder={"Enter your username"}
              error={usernameError}
            />
            <TextInput
              label="Email Address"
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder={"Enter your email"}
              error={emailError}
            />
            <TextInput
              label="Password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder={"Enter your password"}
              error={passwordError}
            />
          </form>
          <ThemeButton
            type="submit"
            text="Login to Continue"
            enabled={loginButtonEnabled}
            onClick={() => handleSubmitClicked()}
          />
          <p
            className="already-have-account-text"
            onClick={() => handleLoginClicked()}
          >
          
          Already have an account ? <span className="login-text">Log in</span>
          </p>
          <div className="social-login">
            <SocialMediaButton
              image={icons.icGoogle}
              text="Login with Google"
              onClick={() => {}}
            />
            <div style={{ margin: "0 10px" }}></div>
            <SocialMediaButton
              image={icons.icFacebook}
              text="Login with Facebook"
              onClick={() => {}}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
