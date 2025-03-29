import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/styles/Login.css";
import logo from "../assets/icons/logo.png";
import signup from "../assets/images/sign-up.png";
import ggl_logo from "../assets/icons/google.png";
import linkedIn_logo from "../assets/icons/linkedin.png";
import { FaEnvelope, FaLock } from "react-icons/fa";

const Login = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS
  }, []);
  const navigate = useNavigate();

  return (
    <>
      <header className="text-center py-3">
        <img src={logo} alt="SkillWave Logo" className="logo" data-aos="fade-down" />
      </header>

      <div className="row align-items-center justify-content-center w-84 container">
        <div className="row rounded-4 p-6 bg-white login-container">
          {/* Left Section - Image */}
          <div className="col-md-6 d-none d-md-flex align-items-center justify-content-center" data-aos="fade-right">
            <img src={signup} alt="Login Illustration" className="img-fluid" />
          </div>

          {/* Right Section - Login Form */}
          <div className="col-md-6 p-4 shadow rounded bg-white" data-aos="fade-left">
            <h2 className="text-center">
              Welcome to <br />
              <span className="brand">Skill<span className="wave">Wave</span></span>
            </h2>

            {/* Social Login Buttons */}
            <button className="btn btn-light w-100 my-2 d-flex align-items-center justify-content-center" data-aos="fade-up">
              <img src={ggl_logo} alt="Google" className="me-2" style={{ width: "20px" }} />
              Login with Google
            </button>
            <button className="btn btn-light w-100 my-2 d-flex align-items-center justify-content-center" data-aos="fade-up" data-aos-delay="200">
              <img src={linkedIn_logo} alt="LinkedIn" className="me-2" style={{ width: "20px" }} />
              Login with LinkedIn
            </button>

            {/* Divider */}
            <div className="text-center my-3 text-muted" data-aos="flip-up">OR</div>

            {/* Email & Password Fields */}
            <div className="mb-3 input-group" data-aos="fade-up">
              <span className="input-group-text"><FaEnvelope /></span>
              <input type="text" className="form-control" placeholder="Enter Your Email or Phone Number" />
            </div>
            <div className="mb-3 input-group" data-aos="fade-up" data-aos-delay="200">
              <span className="input-group-text"><FaLock /></span>
              <input type="password" className="form-control" placeholder="Enter Your Password" />
            </div>

            {/* Role Selector */}
            <div className="d-flex justify-content-center my-3" data-aos="fade-up">
              <div className="form-check me-3">
                <input type="radio" className="form-check-input" name="role" value="teacher" defaultChecked />
                <label className="form-check-label">Teacher</label>
              </div>
              <div className="form-check">
                <input type="radio" className="form-check-input" name="role" value="student" />
                <label className="form-check-label">Student</label>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="d-flex justify-content-between mb-3" data-aos="fade-up">
              <label className="form-check-label">
                <input type="checkbox" className="form-check-input me-1" /> Remember me
              </label>
              <a href="#" className="text-decoration-none text-primary">Forgot Password?</a>
            </div>

            {/* Login Button */}
            <button className="btn btn-primary w-100" onClick={() => {
              navigate("/courses")
              }} data-aos="zoom-in">Login</button>

            {/* Register Link */}
            <p className="text-center mt-3" data-aos="fade-up">
              Don’t have an account? <Link to="/signup" className="text-primary">Register</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
