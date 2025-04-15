import React, { useState } from "react";
// import pathwayData from "../../assets/data/pathwayData";
import "../styles/ViewPathway.css";
import { FaCheckCircle, FaClock, FaChevronLeft } from "react-icons/fa";
import java from "../../assets/images/explore-thumbnail.png";


const pathwayData = {
    id: 1,
    title: "Web Development Pathway",
    description: "Become a proficient web developer with this comprehensive learning path",
    duration: "8 weeks",
    steps: 6,
    tags: ["Web Development", "Beginner Friendly", "Hands-on"],
    overview: {
      about: "This comprehensive learning path is designed to take you from beginners to intermediate in Web Development. You'll build practical skills through hands-on projects and gain the knowledge needed to succeed in this field.",
      whatYouLearn: [
        "HTML & CSS Fundamentals",
        "Responsive Web Design",
        "Web Performance Optimization",
        "JavaScript Essentials",
        "React.js Fundamentals",
        "Portfolio Project"
      ],
      whoIsFor: [
        "Beginners with little to no prior experience",
        "Individuals looking to build a career in Web Development",
        "Self-motivated learners who want a structured approach",
        "Aspiring web developers and designers"
      ]
    },
    curriculum: [
      {
        id: 1,
        title: "HTML & CSS Fundamentals",
        description: "Learn the building blocks of web development"
      },
      {
        id: 2,
        title: "JavaScript Essentials",
        description: "Master programming concepts with JavaScript"
      },
      {
        id: 3,
        title: "Responsive Web Design",
        description: "Create websites that work on any device"
      },
      {
        id: 4,
        title: "React.js Fundamentals",
        description: "Build modern user interfaces with React"
      },
      {
        id: 5,
        title: "Web Performance Optimization",
        description: "Make your websites fast and efficient"
      },
      {
        id: 6,
        title: "Portfolio Project",
        description: "Build a complete portfolio to showcase your skills"
      }
    ],
    features: [
      "6 comprehensive steps",
      "Hands-on projects and exercises",
      "Community support",
      "Certificate of completion"
    ]
  };

const ViewPathway = () => {
    const [activeTab, setActiveTab] = useState("overview");
    const [pathway, setPathway] = useState(pathwayData); // This would come from API later

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
    
  
    return (
      <div className="container pathwayCustom">
        <div className="row">
          {/* Left Content */}
          <div className="col-lg-8">
            <a href="/explore" className="text-decoration-none mb-3 d-inline-flex align-items-center" style={{ color: 'gray' }}>
              <FaChevronLeft className="me-1" /> Back to Explore
            </a>
  
            <div className="mb-3">
              {pathway.tags.map((tag, idx) => (
                <span key={idx} className="badge bg-light text-dark me-2 tag-pill">
                  {tag}
                </span>
              ))}
            </div>
  
            <h3 className="fw-bold">{pathway.title}</h3>
            <p className="text-muted">{pathway.description}</p>
  
            <div className="d-flex align-items-center mb-3">
              <div className="me-4 d-flex align-items-center">
                <FaClock className="me-1" />
                <span>Duration: {pathway.duration}</span>
              </div>
              <div className="d-flex align-items-center">
                <i className="bi bi-list-ol me-1"></i>
                <span>{pathway.steps} steps</span>
              </div>
            </div>
  
            <div className="tab-buttons mb-4">
              <button
                className={`tab-btn ${activeTab === "overview" ? "active" : ""}`}
                onClick={() => setActiveTab("overview")}
              >
                Overview
              </button>
              <button
                className={`tab-btn ${activeTab === "curriculum" ? "active" : ""}`}
                onClick={() => setActiveTab("curriculum")}
              >
                Curriculum
              </button>
            </div>
  
            <div className="tab-content">
              {activeTab === "overview" && (
                <div className="pathway-overview">
                  <h4 className="fw-bold mb-4">About This Learning Path</h4>
                  <p className="mb-4">
                    {pathway.overview.about}
                  </p>
  
                  <div className="row">
                    <div className="col-md-6 mb-4 mb-md-0">
                      <h5 className="fw-bold mb-3">What You'll Learn</h5>
                      <ul className="list-unstyled">
                        {pathway.overview.whatYouLearn.map((item, index) => (
                          <li key={index} className="mb-2 d-flex align-items-start">
                            <FaCheckCircle className="text-primary mt-1 me-2 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
  
                    <div className="col-md-6">
                      <h5 className="fw-bold mb-3">Who This Path Is For</h5>
                      <ul className="list-unstyled">
                        {pathway.overview.whoIsFor.map((item, index) => (
                          <li key={index} className="mb-2 d-flex align-items-start">
                            <i className={`bi ${index === 0 ? 'bi-person-fill' : index === 1 ? 'bi-briefcase-fill' : index === 2 ? 'bi-lightbulb-fill' : 'bi-palette-fill'} text-info mt-1 me-2 flex-shrink-0`}></i>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === "curriculum" && (
              <div className="pathway-curriculum">
                <h4 className="section-title">Learning Path Curriculum</h4>
                <ol className="curriculum-list">
                  {pathway.curriculum.map((item) => (
                    <li key={item.id} className="curriculum-item">
                      <div className="curriculum-content">
                        <h5 className="curriculum-title">{item.title}</h5>
                        <p className="curriculum-description">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            )}
            </div>
            <div className="row">
            {sampleCourses.map((course, idx) => (
              <div className="col-md-6 mb-4" key={idx}>
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
  
          {/* Right Card */}
          <div className="col-lg-4">
            <div className="sticky-top" style={{ top: "80px" }}>
              <div className="card shadow-sm rounded-3 p-4">
                <h5 className="fw-bold text-center">{pathway.title}</h5>
                <div className="text-center text-primary mb-4">
                  <FaClock className="me-2" />
                  <span>{pathway.duration}</span>
                </div>
  
                <ul className="list-unstyled mb-4">
                  {pathway.features.map((feature, index) => (
                    <li key={index} className="mb-2 d-flex align-items-start">
                      <FaCheckCircle className="me-2 text-success mt-1 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
  
                <button className="btn btn-dark w-100 fw-semibold">
                  Enroll in This Pathway
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
export default ViewPathway;