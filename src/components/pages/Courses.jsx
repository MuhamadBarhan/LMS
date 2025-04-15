import React, { useEffect, useState } from "react";
import Footer from "../Footer";
import YourProgressCard from "../YourProgressCard";
import ExploreCard from "../ExploreCard";
import "../styles/courses.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../Navbar";

const Courses = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true }); 
  }, []);

  return (
    <>
      <div className="courses-container">
        <h2 data-aos="fade-down">Your Progress</h2>
        <div className="cards-row" data-aos="fade-up">
          <YourProgressCard />
        </div>

        <h2 data-aos="fade-down">Explore</h2>
        <div className="cards-row" data-aos="fade-up">
          <ExploreCard />
        </div>

        {/* Explore All Button */}
        <div className="explore-btn-wrapper" data-aos="zoom-in">
          <button className="explore-btn">Explore All Courses</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Courses;
