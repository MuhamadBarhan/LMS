import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
// import { setUser } from "../redux/userSlice";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import "../components/styles/Login.css";
import logo from "../assets/icons/logo.png";
import signup from "../assets/images/sign-up.png";
import ggl_logo from "../assets/icons/google.png";
import linkedIn_logo from "../assets/icons/linkedin.png";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { loginUser } from "../redux/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    userRole: "",
    remember: false,
  });

  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      navigate("/courses");
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validateForm = () => {
    const { email, password, userRole } = loginData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim() || !emailRegex.test(email)) {
      setErrorMessage("Please enter a valid email.");
      return false;
    }

    if (!password || password.length < 6) {
      setErrorMessage("Password must be at least 6 characters.");
      return false;
    }

    if (!userRole) {
      setErrorMessage("Please select a user role.");
      return false;
    }

    setErrorMessage("");
    return true;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
  
    try {
      // Await the dispatch call to resolve the Promise
      const resultAction = await dispatch(loginUser(loginData));
  
      // Check if the action was fulfilled
      if (loginUser.fulfilled.match(resultAction)) {
        const { username, email, userRole } = resultAction.payload;
  
        // Store in localStorage if "Remember Me" is checked
        if (loginData.remember) {
          localStorage.setItem("user", JSON.stringify({ username, email, userRole }));
        }
  
        alert("Login Successful!");
        navigate("/courses");
      } else {
        // If login is rejected, show the error message from payload
        setErrorMessage(resultAction.payload || "Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setErrorMessage("Something went wrong. Please try again.");
    }
  };
  

  return (
    <>
      <header className="text-center py-3">
        <img src={logo} alt="SkillWave Logo" className="logo" data-aos="fade-down" />
      </header>

      <div className="row align-items-center justify-content-center w-84 container">
        <div className="row rounded-4 p-6 bg-white login-container">
          <div className="col-md-6 d-none d-md-flex align-items-center justify-content-center" data-aos="fade-right">
            <img src={signup} alt="Login Illustration" className="img-fluid" />
          </div>

          <div className="col-md-6 p-4 shadow rounded bg-white" data-aos="fade-left">
            <h2 className="text-center">
              Welcome to <br />
              <span className="brand">Skill<span className="wave">Wave</span></span>
            </h2>

            <button className="btn btn-light w-100 my-2 d-flex align-items-center justify-content-center" data-aos="fade-up">
              <img src={ggl_logo} alt="Google" className="me-2" style={{ width: "20px" }} />
              Login with Google
            </button>
            <button className="btn btn-light w-100 my-2 d-flex align-items-center justify-content-center" data-aos="fade-up" data-aos-delay="200">
              <img src={linkedIn_logo} alt="LinkedIn" className="me-2" style={{ width: "20px" }} />
              Login with LinkedIn
            </button>

            <div className="text-center my-3 text-muted" data-aos="flip-up">OR</div>

            <form onSubmit={handleLogin}>
              <div className="mb-3 input-group" data-aos="fade-up">
                <span className="input-group-text"><FaEnvelope /></span>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter Your Email"
                  value={loginData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3 input-group" data-aos="fade-up" data-aos-delay="200">
                <span className="input-group-text"><FaLock /></span>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Enter Your Password"
                  value={loginData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="d-flex justify-content-center my-3" data-aos="fade-up">
                <div className="form-check me-3">
                  <input
                    type="radio"
                    className="form-check-input"
                    name="userRole"
                    value="Teacher"
                    checked={loginData.userRole === "Teacher"}
                    onChange={handleChange}
                    id="role-teacher"
                  />
                  <label className="form-check-label" htmlFor="role-teacher">Teacher</label>
                </div>
                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    name="userRole"
                    value="Student"
                    checked={loginData.userRole === "Student"}
                    onChange={handleChange}
                    id="role-student"
                  />
                  <label className="form-check-label" htmlFor="role-student">Student</label>
                </div>
              </div>

              <div className="d-flex justify-content-between mb-3" data-aos="fade-up">
                <label className="form-check-label">
                  <input
                    type="checkbox"
                    name="remember"
                    checked={loginData.remember}
                    onChange={handleChange}
                    className="form-check-input me-1"
                    aria-label="Remember me"
                  />
                  Remember me
                </label>
                <Link to="/forgot-password" className="text-decoration-none text-primary">Forgot Password?</Link>
              </div>

              {errorMessage && (
                <div className="alert alert-danger text-center py-1" data-aos="fade-in">
                  {errorMessage}
                </div>
              )}

              <button className="btn btn-primary w-100" type="submit" data-aos="zoom-in">Login</button>
            </form>

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
