import React from "react";
import exploreImg from "../assets/images/explore-thumbnail.png";
import avatar from "../assets/images/avatar-explore.png";
import java from "../assets/images/explore-thumbnail.png";


const sampleCourses = [
    {
      title: "React Basics",
      description: "Learn the fundamentals of React.",
      category: "Web Development",
      level: "Beginner",
      duration: "4 weeks",
      instructor: "John Doe",
      price: "$49",
      image: java,
    },
    {
      title: "Advanced Data Science",
      description: "Master ML and data pipelines.",
      category: "Data Science",
      level: "Advanced",
      duration: "6 weeks",
      instructor: "Jane Smith",
      price: "$99",
      image: java,
    },
    {
      title: "UI/UX Design Bootcamp",
      description: "Design user-first products.",
      category: "UI/UX Design",
      level: "Intermediate",
      duration: "5 weeks",
      instructor: "Alex Lee",
      price: "Free",
      image: java,
    },
  ];

 
const ExploreCourses = () => {
  return (
    <div className="container py-4">
      <h4 className="mb-4 fw-bold">Explore More Courses</h4>
      <div className="row">
            {sampleCourses.map((course, idx) => (
              <div className="col-md-4 mb-4" key={idx}>
                <div className="card h-100 shadow-sm">
                  {/* Image at top */}
                  <img
                    src={course.image}
                    alt={course.title}
                    className="card-img-top"
                    style={{ height: "180px", objectFit: "cover" }}
                  />

                  <div className="card-body d-flex flex-column">
                    <h5 className="fw-bold">{course.title}</h5>
                    <p className="text-muted small">{course.description}</p>
                    <p className="text-muted small mb-1">
                      📂 {course.category} &nbsp; 🎓 {course.level}
                    </p>
                    <p className="text-muted small mb-1">
                      ⏱ {course.duration} &nbsp; 👨‍🏫 {course.instructor}
                    </p>
                    <p className="fw-semibold">{course.price}</p>
                    <button className="btn btn-outline-dark mt-auto">
                      View Course
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
    </div>
  );
};

export default ExploreCourses;
