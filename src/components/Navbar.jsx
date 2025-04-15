import React, { useEffect, useState, useRef } from "react";
import "../components/styles/Navbar.css";
import logo from "../assets/icons/logo.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const username = localStorage.getItem("username");
    const isLoggedIn = !!localStorage.getItem("authToken");

    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setDropdownOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            window.removeEventListener("resize", handleResize);
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleLogout = () => {
        setMenuOpen(false);
        navigate("/home");
        localStorage.removeItem("username");
        localStorage.removeItem("email");
        localStorage.removeItem("authToken");
    };

    return (
        <header className="header">
            <div className="logo" onClick={() => navigate("/home")} style={{ cursor: "pointer" }}>
                <img src={logo} alt="SkillWave Logo" className="logo" />
            </div>

            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>☰</div>

            <nav className={menuOpen ? "nav-active" : ""}>
                <ul>
                    <li><a onClick={() => navigate("/aboutus")}>About</a></li>
                    <li><a onClick={() => navigate("/courses")}>Courses</a></li>
                    <li><a onClick={() => navigate("/learning")}>My Learning</a></li>
                    {isMobile && isLoggedIn && (
                        <>
                            <li><a onClick={() => navigate("/profile")}>My Profile</a></li>
                            <li><a onClick={handleLogout}>Logout</a></li>
                        </>
                    )}
                </ul>

                {!isMobile && isLoggedIn ? (
                    <div className="avatar-container" ref={dropdownRef}>
                        <div className="avatar" onClick={() => setDropdownOpen(!dropdownOpen)}>
                        {username ? username.charAt(0).toUpperCase() : "U"}
                        </div>
                        {dropdownOpen && (
                            <div className="dropdown">
                                <button onClick={() => navigate("/profile")}>My Profile</button>
                                <button onClick={handleLogout}>Logout</button>
                            </div>
                        )}
                    </div>
                ) : (
                    !isLoggedIn && <button className="login-btn" onClick={() => navigate("/login")}>Login</button>
                )}
            </nav>
        </header>
    );
};

export default Navbar;
