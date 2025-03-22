import React from "react";
import { Link } from "react-router-dom";
import '../assets/styles/login.css'
import logo from "../assets/icons/logo.png";
import signup from "../assets/images/sign-up.png";
import ggl_logo from "../assets/icons/google.png";
import linkedIn_logo from "../assets/icons/linkedin.png";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

const Login = () => {
  return (
    <>
    <header>
          <img src={logo} alt="SkillWave Logo" className="logo" />
        </header>
    <div className="login-container">
      <div className="login-left">
        <img src={signup} alt="Login Illustration" className="illustration"/>
      </div>
      <div className="login-right">
        <h2 >Welcome to <br></br><span className="brand">Skill<span className="wave">Wave</span></span></h2>

        <button className="social-login google">
          <img src={ggl_logo} alt="Google" /> Login with Google
        </button>
        <button className="social-login linkedin">
          <img src={linkedIn_logo} alt="LinkedIn" /> Login with LinkedIn
        </button>

        <div className="divider">
          <span>OR</span>
        </div>

        <div className="input-group">
            <FaEnvelope className="icon" />
          <input type="text" placeholder="Enter Your Mail or Phone Number" />
        </div>
        <div className="input-group">
            <FaLock className="icon" />
          <input type="password" placeholder="Enter Your Password" />
          
        </div>

        <div className="role-selector">
          <label>
            <input type="radio" name="role" value="teacher" defaultChecked /> Teacher
          </label>
          <label>
            <input type="radio" name="role" value="student" /> Student
          </label>
        </div>

        <div className="options">
          <label><input type="checkbox" /> Remember me</label>
          <a href="#" className="forgot-password">Forgot Password?</a>
        </div>

        <button className="login-btn">Login</button>

        <p className="register-text">
          Don’t have an account? <Link to="/signup">Register</Link>
        </p>
      </div>
    </div>
    </>
  );
};

export default Login;
