import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../components/styles/header.css";
import profilePic from '../assets/images/boy.png'
import logo from '../assets/icons/logo.png'
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Change this based on authentication
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="SkillWave Logo" className="logo"/>
      </div>
      <nav className={`nav-links ${mobileMenuOpen ? "open" : ""}`}>
        <Link to="/">About</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/learning">My Learning</Link>
        {isLoggedIn ? (
          <>
            <Link to="/profile" className="mobile-only">
              My Profile
            </Link>
            <button className="mobile-only" onClick={() => {
                navigate("/home")
                alert("Logged out!")
                }}>
              Logout
            </button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>

      {isLoggedIn ? (
        <div className="profile-section">
          <img
            src={profilePic}
            alt="Profile"
            className="profile-pic"
            onClick={() => setShowDropdown(!showDropdown)}
          />
          {showDropdown && (
            <div className="dropdown">
              <Link to="/profile">My Profile</Link>
              <button onClick={() => {
                navigate("/home")
                alert("Logged out!")
                }}>
                  Logout</button>
            </div>
          )}
        </div>
      ) : (
        <Link to="/login" className="login-btn">
          Login
        </Link>
      )}

      <div className="hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        ☰
      </div>
    </header>
  );
};

export default Header;
