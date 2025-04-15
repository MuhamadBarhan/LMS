import React from "react";
// import "../components/styles/progressCard.css";
import thumbnail from "../assets/images/progress-thumbnail.png"; // placeholder image
import avatar from "../assets/images/avatar.png"; // placeholder
import java from "../assets/images/explore-thumbnail.png";
import CourseCard from "./CourseCard";


const YourProgressCard = () => {
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
        progress: 70,
        completed: false,
        actions: ["Continue Learning"]
      }
    ]
  return (
    <div
      className="card p-3 shadow-sm border-0 rounded-4 h-100"
      style={{ minHeight: "100%" }}
    >
    <div className="row g-4">
        {courses.map((course, idx) => (
          <div
            className="col-md-6 col-lg-4"
            style={{width:'25vw'}}
            key={idx}
            data-aos="fade-up"
            data-aos-delay={idx * 100}
          >
            <CourseCard {...course} />
          </div>
        ))}
      </div>
      </div>
  );
};

export default YourProgressCard;
