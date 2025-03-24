import React, { useState } from "react";
import "../components/styles/Navbar.css";
import logo from "../assets/icons/logo.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="header">
            <div className="logo">
                <img src={logo} alt="SkillWave Logo" className="logo" />
            </div>

            {/* Hamburger Icon */}
            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                ☰
            </div>

            <nav className={menuOpen ? "nav-active" : ""}>
                <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="/courses">Courses</a></li>
                    <li><a href="#">My Learning</a></li>
                </ul>
                <button className="login-btn" onClick={() => navigate("/login")}>Login</button>
            </nav>
        </header>
    );
};

export default Navbar;
