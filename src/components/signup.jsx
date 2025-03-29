import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import signup from "../assets/images/sign-up.png";
import ggl_logo from "../assets/icons/google.png";
import linkedIn_logo from "../assets/icons/linkedin.png";
import logo from "../assets/icons/logo.png";
import "../components/styles/signUp.css";


const SignUp = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const navigate = useNavigate();

  return (
    <div className="container py-3">
      <header className="text-center py-3 logoSec">
        <img src={logo} alt="SkillWave Logo" className="logo" />
      </header>
      <div className="row align-items-center justify-content-center">
        <div className="col-md-6 text-center" data-aos="fade-right">
          <img src={signup} alt="Sign Up Illustration" className="img-fluid" />
        </div>
        <div className="col-md-6 p-4 shadow rounded bg-white" data-aos="fade-left">
          <h2 className="text-left" data-aos="zoom-in">
            Begin Your Journey With SkillWave
          </h2>
          <button className="btn btn-light w-100 d-flex align-items-center justify-content-center mt-3" data-aos="fade-left">
            <img src={ggl_logo} alt="Google" className="me-2" width="20" /> Sign Up with Google
          </button>
          <button className="btn btn-light w-100 d-flex align-items-center justify-content-center mt-2" data-aos="fade-left" data-aos-delay="200">
            <img src={linkedIn_logo} alt="LinkedIn" className="me-2" width="20" /> Sign Up with LinkedIn
          </button>
          <p className="text-center fw-bold my-3" data-aos="flip-up">OR</p>
          <form>
            <div className="input-group mb-3" data-aos="fade-left">
              <span className="input-group-text"><FaUser /></span>
              <input type="text" className="form-control" placeholder="Enter Your Full Name" />
            </div>
            <div className="input-group mb-3" data-aos="fade-left" data-aos-delay="200">
              <span className="input-group-text"><FaEnvelope /></span>
              <input type="email" className="form-control" placeholder="Enter Your Mail or Phone Number" />
            </div>
            <div className="input-group mb-3" data-aos="fade-left" data-aos-delay="300">
              <span className="input-group-text"><FaLock /></span>
              <input type="password" className="form-control" id="pass" placeholder="Enter Your Password" />
            </div>
            <div className="input-group mb-3" data-aos="fade-left" data-aos-delay="300">
              <span className="input-group-text"><FaLock /></span>
              <input type="password" className="form-control" id="confirmPass" placeholder="Re-Enter Your Password" />
            </div>
            <div className="form-check" data-aos="fade-left">
              <input className="form-check-input" type="checkbox" id="remember" />
              <label className="form-check-label" htmlFor="remember">Remember me</label>
            </div>
            <button type="submit" className="btn btn-success w-100 mt-3" onClick={() => navigate("/courses")}>Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;