import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import signup from "../assets/images/sign-up.png";
import ggl_logo from "../assets/icons/google.png";
import linkedIn_logo from "../assets/icons/linkedin.png";
import logo from "../assets/icons/logo.png";
import "../components/styles/signUp.css";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1 second
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <header>
        <img src={logo} alt="SkillWave Logo" className="logo" data-aos="fade-down" />
      </header>

      <div className="signup-container">
        <div className="left-section" data-aos="fade-right">
          <img src={signup} alt="Sign Up Illustration" />
        </div>

        <div className="right-section" id="right-section" data-aos="fade-left">
          <h2 data-aos="zoom-in">
            Begin Your Journey With{" "}
            <span className="brand">
              Skill<span className="wave">Wave</span>
            </span>
          </h2>

          <button className="google-btn" data-aos="fade-up">
            <img src={ggl_logo} alt="Google" /> Sign Up with Google
          </button>
          <button className="linkedin-btn" data-aos="fade-up" data-aos-delay="200">
            <img src={linkedIn_logo} alt="LinkedIn" /> Sign Up with LinkedIn
          </button>

          <p className="or-divider" data-aos="flip-up">OR</p>

          <form className="signup-form">
            <div className="input-field" data-aos="fade-up">
              <FaUser className="icon" />
              <input type="text" placeholder="Enter Your Full Name" />
            </div>
            <div className="input-field" data-aos="fade-up" data-aos-delay="200">
              <FaEnvelope className="icon" />
              <input type="email" placeholder="Enter Your Mail or Phone Number" />
            </div>
            <div className="input-field" data-aos="fade-up" data-aos-delay="300">
              <FaLock className="icon" />
              <input type="password" placeholder="Enter Your Password" />
            </div>

            <div className="remember-me" data-aos="fade-up">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <button type="submit" className="signup-btn" onClick={() => navigate("/courses")} data-aos="zoom-in">Sign Up</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
