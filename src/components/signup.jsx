import React from "react";
import { Link } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import signup from "../assets/images/sign-up.png";
import ggl_logo from "../assets/icons/google.png";
import linkedIn_logo from "../assets/icons/linkedin.png";
import logo from "../assets/icons/logo.png";
import '../assets/styles/signUp.css'


const SignUp = () => {
  return (
    <>
    <header>
      <img src={logo} alt="SkillWave Logo" className="logo" />
    </header>
    <div className="signup-container">
      <div className="left-section">
        <img src={signup} alt="Sign Up Illustration" />
      </div>
      <div className="right-section" id="right-section">
        <h2>
          Begin Your Journey With <span className="brand">Skill<span className="wave">Wave</span></span>
        </h2>
        <button className="google-btn">
          <img src={ggl_logo} alt="Google" /> Sign Up with Google
        </button>
        <button className="linkedin-btn">
          <img src={linkedIn_logo} alt="LinkedIn" /> Sign Up with LinkedIn
        </button>
        <p className="or-divider">OR</p>
        <form className="signup-form">
          <div className="input-field">
            <FaUser className="icon" />
            <input type="text" placeholder="Enter Your Full Name" />
          </div>
          <div className="input-field">
            <FaEnvelope className="icon" />
            <input type="email" placeholder="Enter Your Mail or Phone Number" />
          </div>
          <div className="input-field">
            <FaLock className="icon" />
            <input type="password" placeholder="Enter Your Password" />
          </div>
          <div className="remember-me">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>
          <button type="submit" className="signup-btn">Sign Up</button>
        </form>
      </div>
    </div>
    </>
  );
};

export default SignUp;
