import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaUser, FaEnvelope, FaLock, FaRedhat } from "react-icons/fa";

import signup from "../assets/images/sign-up.png";
import ggl_logo from "../assets/icons/google.png";
import linkedIn_logo from "../assets/icons/linkedin.png";
import logo from "../assets/icons/logo.png";
import "../components/styles/signUp.css";

import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../redux/userSlice";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error, isLoggedIn, username, email, userRole } = useSelector(
    (state) => state.user
  );

  const [userData, setUserData] = useState({
    name: "",
    education: "",
    email: "",
    password: "",
    confirmPass: "",
    remember: false,
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      if (userData.remember) {
        localStorage.setItem("userEmail", userData.email);
      }
      localStorage.setItem(
        "user",
        JSON.stringify({
          username,
          email,
          userRole,
        })
      );
      alert("Signup successful! Redirecting...");
      navigate("/courses");
    }
  }, [isLoggedIn, username, email, userRole, navigate, userData.email, userData.remember]);

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!userData.name.trim()) newErrors.name = "Name is required";
    if (!userData.education) newErrors.education = "Education is required";
    if (!userData.email.trim()) newErrors.email = "Email is required";
    else if (!emailRegex.test(userData.email)) newErrors.email = "Invalid email format";

    if (!userData.password.trim()) newErrors.password = "Password is required";
    else if (userData.password.length < 6) newErrors.password = "Minimum 6 characters";

    if (userData.password !== userData.confirmPass)
      newErrors.confirmPass = "Passwords do not match";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    dispatch(signupUser(userData));
    // Don't store anything here — do it in useEffect after signup success
  };

  const renderError = (field) =>
    errors[field] && <p className="text-danger">{errors[field]}</p>;

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

          <button className="btn btn-light w-100 d-flex align-items-center justify-content-center mt-3">
            <img src={ggl_logo} alt="Google" className="me-2" width="20" />
            Sign Up with Google
          </button>
          <button className="btn btn-light w-100 d-flex align-items-center justify-content-center mt-2">
            <img src={linkedIn_logo} alt="LinkedIn" className="me-2" width="20" />
            Sign Up with LinkedIn
          </button>

          <p className="text-center fw-bold my-3" data-aos="flip-up">
            OR
          </p>

          {error && <p className="text-danger text-center">{error}</p>}

          <form onSubmit={handleSubmit} autoComplete="off">
            {/* Name */}
            <div className="input-group mb-3">
              <span className="input-group-text"><FaUser /></span>
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Enter Your Full Name"
                value={userData.name}
                onChange={handleChange}
              />
            </div>
            {renderError("name")}

            {/* Education */}
            <div className="mb-3 d-flex align-items-center">
              <span className="input-group-text"><FaRedhat /></span>
              <select
                className="form-select ms-2"
                name="education"
                value={userData.education}
                onChange={handleChange}
              >
                <option value="">Select Your Education</option>
                {["B.Tech", "B.E", "B.Sc", "M.Sc", "M.Tech", "M.E"].map((edu) => (
                  <option key={edu} value={edu.toLowerCase()}>
                    {edu}
                  </option>
                ))}
              </select>
            </div>
            {renderError("education")}

            {/* Email */}
            <div className="input-group mb-3">
              <span className="input-group-text"><FaEnvelope /></span>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Enter Your Email"
                value={userData.email}
                onChange={handleChange}
              />
            </div>
            {renderError("email")}

            {/* Password */}
            <div className="input-group mb-3">
              <span className="input-group-text"><FaLock /></span>
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Enter Your Password"
                value={userData.password}
                onChange={handleChange}
              />
            </div>
            {renderError("password")}

            {/* Confirm Password */}
            <div className="input-group mb-3">
              <span className="input-group-text"><FaLock /></span>
              <input
                type="password"
                className="form-control"
                name="confirmPass"
                placeholder="Re-Enter Your Password"
                value={userData.confirmPass}
                onChange={handleChange}
              />
            </div>
            {renderError("confirmPass")}

            {/* Remember Me */}
            <div className="form-check mb-2">
              <input
                className="form-check-input"
                name="remember"
                type="checkbox"
                checked={userData.remember}
                onChange={handleChange}
              />
              <label className="form-check-label">Remember me</label>
            </div>

            <button type="submit" className="btn btn-success w-100 mt-3" disabled={loading}>
              {loading ? "Signing Up..." : "Sign Up"}
            </button>
          </form>

          <p className="text-center mt-3">
            Already have an account? <Link to="/login">Login here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
