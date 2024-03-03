import React from "react";
import "./LoginSignup.css";
import user_icon from "../Assets/user.png";
import password_icon from "../Assets/password.png";
import email_icon from "../Assets/email.png";

const LoginSignup = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="text">Sign Up</div>
        <div className="underline"></div>
      </div>

      <div className="inputs">
        <div className="input">
          <img className="icon" src={user_icon} alt="" />
          <input type="text" placeholder="Username" />
        </div>

        <div className="input">
          <img className="icon" src={email_icon} alt="" />
          <input type="email" placeholder="Username" />
        </div>

        <div className="input">
          <img className="icon" src={password_icon} alt="" />
          <input type="password" placeholder="Username" />
        </div>
      </div>
      <div className="forgot-password">
        Forget Your Password?<span></span>
      </div>
      <div classNmae="submit-container">
        <div classNmae="submit">Sign Up</div>
        <div classNmae="submit">Login</div>
      </div>
    </div>
  );
};

export default LoginSignup;
