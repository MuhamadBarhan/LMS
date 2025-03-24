import React, { useEffect } from "react";
import "../components/styles/Body.css";
import AOS from "aos";
import "aos/dist/aos.css";
import heroImage from "../assets/images/home_img.png"; // Place image in `assets`
import { useNavigate } from "react-router-dom";

const Body = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1 second
      }, []);
      const navigate = useNavigate();
  return (
    <section className="hero">
      <div className="hero-text" data-aos="fade-right">
        <h1>Make your <span className="highlight">learning</span> easier</h1>
        <p>Start Learning today!</p>
        <button className="cta-btn" onClick={() => navigate("/login")} data-aos="zoom-in">Get Started</button>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Learning Illustration" data-aos="fade-left" />
      </div>
    </section>
  );
};

export default Body;
