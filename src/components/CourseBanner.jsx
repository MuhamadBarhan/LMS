import React from "react";
import "./styles/CourseBanner.css";
import java from '../assets/images/explore-thumbnail.png';

const CourseBanner = () => {
  const course = {
    title: "Full Stack Web Development",
    level: "Beginner",
    language: "JavaScript",
    duration: "12 Weeks",
    image: java
  };

  return (
    <div className="course-banner position-relative text-white rounded overflow-hidden">
      <img src={course.image} alt="Course" className="w-100 h-100 object-fit-cover" />
      
      <div className="overlay position-absolute top-0 start-0 w-100 h-100"></div>

      <div className="banner-content position-absolute bottom-0 start-0 p-4 text-white w-100">
        <div className="mb-3">
          <span className="badge bg-secondary me-2">{course.level}</span>
          <span className="badge bg-secondary me-2">{course.language}</span>
          <span className="badge bg-secondary">{course.duration}</span>
        </div>
        <h2 className="fw-bold m-0">{course.title}</h2>
      </div>
    </div>
  );
};

export default CourseBanner;
