import React, { useState } from "react";
import "./Login.css";
import images from "../../assets/images";
import TextInput from "../../components/TextInput/TextInput";
import ThemeButton from "../../components/ThemeButton/ThemeButton";
import SocialMediaButton from "../../components/SocialMediaButton/SocialMediaButton";
import icons from "../../assets/icons";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loginButtonEnabled, setLoginButtonEnabled] = useState(false);

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

  const handleLoginButtonEnabledDisabled = () => {
    setLoginButtonEnabled(
      emailError === "" && passwordError === "" ? true : false
    );
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    // // Basic validation
    // if (!email || !password) {
    //   setError("Please enter both email and password");
    //   return;
    // }
    // // Simulate login process (replace with your actual login logic)
    // if (email === "user@example.com" && password === "password") {
    //   // Successful login
    //   console.log("Login successful!");
    //   setError("");
    // } else {
    //   // Failed login
    //   setError("Invalid email or password");
    // }
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
            <text className="title-text">Login to your account!</text>
          </div>
          <div style={{ margin: "1.5rem" }}></div>
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
          <form onSubmit={handleSubmit} style={{ marginTop: "1.5rem" }}>
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
          />
          <p className="dont-have-account-text" onClick={() => {}}>
            Don't have an account? <span className="signup-text">Sign up</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
