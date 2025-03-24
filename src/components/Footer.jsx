import React from "react";
import "../components/styles/Footer.css";
import logo from "../assets/icons/logo_white.png";

const Footer = () => {
  return (
    <footer className="footer" >
      <div className="footer-content">
        <img src={logo} alt="SkillWave Logo" className="logo" />
        <p>Subscribe to get our Newsletter</p>
        <div className="newsletter">
          <input type="email" placeholder="Your Email" />
          <button>Subscribe</button>
        </div>
      </div>
      <div className="footer-links">
        <a href="#">Careers</a> | 
        <a href="#">Privacy Policy</a> | 
        <a href="#">Terms & Conditions</a>
      </div>
      <p>© 2025 Class Technologies Inc.</p>
    </footer>
  );
};

export default Footer;
