import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "../components/styles/Login.css";
import logo from "../assets/icons/logo.png";
import signup from "../assets/images/sign-up.png";
import ggl_logo from "../assets/icons/google.png";
import linkedIn_logo from "../assets/icons/linkedin.png";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Login = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1 second
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <header>
        <img src={logo} alt="SkillWave Logo" className="logo" data-aos="fade-down" />
      </header>

      <div className="login-container">
        <div className="login-left" data-aos="fade-right">
          <img src={signup} alt="Login Illustration" className="illustration" />
        </div>

        <div className="login-right" data-aos="fade-left">
          <h2 data-aos="zoom-in">
            Welcome to <br />
            <span className="brand">
              Skill<span className="wave">Wave</span>
            </span>
          </h2>

          <button className="social-login google" data-aos="fade-up">
            <img src={ggl_logo} alt="Google" /> Login with Google
          </button>
          <button className="social-login linkedin" data-aos="fade-up" data-aos-delay="200">
            <img src={linkedIn_logo} alt="LinkedIn" /> Login with LinkedIn
          </button>

          <div className="divider" data-aos="flip-up">
            <span>OR</span>
          </div>

          <div className="input-group" data-aos="fade-up">
            <FaEnvelope className="icon" />
            <input type="text" placeholder="Enter Your Mail or Phone Number" />
          </div>
          <div className="input-group" data-aos="fade-up" data-aos-delay="200">
            <FaLock className="icon" />
            <input type="password" placeholder="Enter Your Password" />
          </div>

          <div className="role-selector" data-aos="fade-up">
            <label>
              <input type="radio" name="role" value="teacher" defaultChecked /> Teacher
            </label>
            <label>
              <input type="radio" name="role" value="student" /> Student
            </label>
          </div>

          <div className="options" data-aos="fade-up">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#" className="forgot-password">
              Forgot Password?
            </a>
          </div>
          <Link to="/home"></Link>
          <button className="login-btn" onClick={() => navigate("/courses")} data-aos="zoom-in">Login</button>

          <p className="register-text" data-aos="fade-up">
            Don’t have an account? <Link to="/signup">Register</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
