import React, { useState, useEffect } from "react";
import "../components/styles/Navbar.css";
import logo from "../assets/icons/logo.png";
import { useNavigate } from "react-router-dom";

const Navbar = (props) => {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(props.isLoggedIn); // Change based on login state
    const [username, setUsername] = useState("JohnDoe"); // Replace with actual username
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleLogout = () => {
        setIsLoggedIn(false);
        setMenuOpen(false);
        // Perform logout logic here (e.g., clearing tokens)
        navigate("/home");
    };

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
                    
                    {/* Add My Profile and Logout inside the menu on mobile */}
                    {isMobile && isLoggedIn && (
                        <>
                            <li><a href="#" onClick={()=>navigate("/profile")}>My Profile</a></li>
                            <li><a href="#" onClick={handleLogout}>Logout</a></li>
                        </>
                    )}
                </ul>

                {/* Show avatar only on desktop */}
                {!isMobile && isLoggedIn ? (
                    <div className="avatar-container">
                        <div className="avatar" onClick={() => setMenuOpen(!menuOpen)}>
                            {username.charAt(0).toUpperCase()}
                        </div>
                        {menuOpen && (
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
