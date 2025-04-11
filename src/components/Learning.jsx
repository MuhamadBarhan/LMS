import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import CourseCard from "../components/CourseCard";
import java from "../assets/images/explore-thumbnail.png";
import LearningProgress from "./LearningProgress";
import LearningOverview from "./LearningOverview";
import BookmarkedLessons from "./BookmarkedLessons";

function Learning() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const courses = [
    {
      image: java,
      title: "Web Development Fundamentals",
      description: "Learn HTML, CSS, and JavaScript basics",
      status: "In Progress",
      progress: 60,
      completed: false,
      actions: ["Continue Learning"]
    },
    {
      image: java,
      title: "UX Design Principles",
      description: "Master the fundamentals of user experience design",
      status: "Completed",
      progress: 100,
      completed: true,
      actions: ["Review", "View Certificate"]
    },
    {
      image: java,
      title: "Data Science Essentials",
      description: "Intro to data analysis and visualization",
      status: "Not Started",
      progress: 0,
      completed: false,
      actions: ["Start Learning"]
    }
  ];

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredCourses = courses.filter((course) => {
    const matchesFilter =
      activeFilter === "All" || course.status === activeFilter;
    const matchesSearch = course.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="container py-5 mt-5">
      <h1 className="fw-bold mb-1" data-aos="fade-right">
        My Learning
      </h1>
      <p className="text-muted mb-4" data-aos="fade-left">
        Track your progress and manage your courses
      </p>

      {/* Search Bar */}
      <div className="input-group mb-4" data-aos="zoom-in">
        <input
          type="text"
          className="form-control"
          placeholder="Search enrolled courses..."
          value={searchTerm}
          onChange={handleSearchChange}
          style={{ border: "solid", borderColor: "lightgray" }}
        />
      </div>

      {/* Filter Buttons */}
      <div
        className="d-flex justify-content-between align-items-center mb-4"
        data-aos="fade-up"
      >
        <h4 className="fw-semibold">Enrolled Courses</h4>
        <div className="btn-group">
          {["All", "In Progress", "Completed", "Not Started"].map((label) => (
            <button
              key={label}
              className={`btn border-0 ${
                activeFilter === label ? "text-white fw-bold" : "text-dark"
              }`}
              style={{
                backgroundColor:
                  activeFilter === label ? "#00796b" : "#f8f9fa"
              }}
              onClick={() => setActiveFilter(label)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Course Cards */}
      <div className="row g-4">
        {filteredCourses.map((course, idx) => (
          <div
            className="col-md-6 col-lg-4"
            key={idx}
            data-aos="fade-up"
            data-aos-delay={idx * 100}
          >
            <CourseCard {...course} />
          </div>
        ))}
        {filteredCourses.length === 0 && (
          <div className="text-muted text-center">No courses found.</div>
        )}
      </div>

      {/* Additional Sections with Animations */}
      <div data-aos="fade-up" data-aos-delay="100">
        <LearningProgress />
      </div>

      <div data-aos="fade-up" data-aos-delay="200">
        <LearningOverview />
      </div>

      <div data-aos="fade-up" data-aos-delay="300">
        <BookmarkedLessons />
      </div>
    </div>
  );
}

export default Learning;
