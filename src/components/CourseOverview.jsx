import React from "react";
import {
  CheckCircle,
  StarFill,
  BoxArrowUpRight,
  Clock,
  Calendar,
} from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/CourseOverview.css";
import avatar from "../assets/images/avatar.png";
import CourseModules from "./CourseModules";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const courseData = {
  overviewTitle: "Course Overview",
  overviewSubtitle:
    "A comprehensive course to master modern web development from frontend to backend.",
  overviewDescription:
    "This course is designed to take you from zero to hero in web development. You'll learn everything from HTML/CSS basics to advanced React and Node.js concepts, along with database integration, authentication, and deployment strategies.",
  learnTitle: "What You'll Learn",
  learnItems: [
    "Build responsive websites using HTML5, CSS3, and JavaScript",
    "Develop backend APIs using Node.js and Express",
    "Implement authentication and database integration",
    "Create dynamic web applications with React and Next.js",
    "Deploy applications using Git, Vercel, and Netlify",
    "Work with modern development tools and workflows",
  ],
  instructor: {
    name: "Alex Johnson",
    rating: 4.8,
    students: "12,450",
    bio: "Senior Software Engineer with 10+ years of experience. Previously worked at Google and Meta, now teaching full-time.",
    image: avatar,
    profileLink: "#",
  },
  duration: {
    totalHours: "45 hours",
    totalWeeks: "12 weeks",
    startDate: "June 15, 2025",
    endDate: "September 7, 2025",
  },
  courseContent: {
    summary: "51 lessons • 45 total hours",
    modules: [
      {
        title: "Module 1: Web Development Fundamentals",
        lessons: "12 lessons",
        hours: "10 hours",
        topics: [
          { title: "Introduction to HTML5", preview: true, watch: true },
          { title: "CSS Fundamentals", preview: true, watch: true },
          { title: "CSS Layout and Flexbox" },
          { title: "Responsive Design Principles" },
          { title: "JavaScript Basics" },
        ],
      },
      {
        title: "Module 2: Frontend Development with React",
        lessons: "15 lessons",
        hours: "12 hours",
        topics: [
          { title: "React Components" },
          { title: "Props and State" },
          { title: "React Hooks" },
        ],
      },
      {
        title: "Module 3: Backend Development with Node.js",
        lessons: "14 lessons",
        hours: "11 hours",
        topics: [
          { title: "Node.js Basics" },
          { title: "Express.js Setup" },
          { title: "REST API Development" },
        ],
      },
      {
        title: "Module 4: Full Stack Integration",
        lessons: "10 lessons",
        hours: "8 hours",
        topics: [
          { title: "Connecting Frontend and Backend" },
          { title: "Authentication Flows" },
          { title: "Deployment Strategies" },
        ],
      },
    ],
  },
};

const CourseOverview = () => {
  const {
    overviewTitle,
    overviewSubtitle,
    overviewDescription,
    learnTitle,
    learnItems,
    instructor,
    duration,
    courseContent,
  } = courseData;

  const sectionTitles = {
    community: "Community & Support",
    resources: "Course Resources",
  };

  const communityFeatures = [
    {
      icon: "💬",
      title: "Discussion Forums",
      description: "Connect with peers and discuss course topics",
    },
    {
      icon: "👥",
      title: "Live Q&A Sessions",
      description: "Weekly sessions with the instructor",
    },
  ];

  const courseResources = [
    { title: "Complete Course Code Repository", type: "code" },
    { title: "HTML/CSS/JavaScript Cheat Sheets", type: "pdf" },
    { title: "Web Development Roadmap", type: "pdf" },
    { title: "Design Assets for Projects", type: "assets" },
    { title: "Database Schema Templates", type: "code" },
  ];

  const courseFormatDetails = [
    {
      icon: "⏰",
      title: "Course Type",
      subtitle: "Hybrid (85 videos)",
    },
    {
      icon: "✔️",
      title: "Assessments",
      subtitle: "Quizzes, Assignments, Projects",
    },
  ];

  const certificationTitle = "Certificate of Completion";
  const certificationDesc = `Upon successful completion of the course, you'll receive a verified certificate that you can share with employers.`;

  const certificationRequirements = `80% completion + 75% on final assessment + all projects submitted`;

  const prerequisitesTitle = "Prerequisites";

  const prerequisitesList = [
    "Basic computer skills",
    "Familiarity with using the internet",
    "No prior programming experience required",
    "Laptop with at least 8GB RAM recommended",
  ];
  const pricing = {
    currentPrice: "$349",
    originalPrice: "$499",
    discountText: "30% off",
    offerNote: "Limited time offer • 3 days left at this price",
    features: [
      "Full lifetime access",
      "Access on mobile and desktop",
      "Certificate of completion",
      "All course resources included",
    ],
  };

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-8 pe-lg-5">
          <h3 className="fw-bold" data-aos="fade-up">
            {overviewTitle}
          </h3>
          <p
            className="text-muted fs-5"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {overviewSubtitle}
          </p>
          <p className="text-secondary" data-aos="fade-up" data-aos-delay="200">
            {overviewDescription}
          </p>

          <h4 className="fw-bold mt-5 mb-4" data-aos="fade-right">
            {learnTitle}
          </h4>
          <div className="row" data-aos="fade-up">
            {learnItems.map((item, index) => (
              <div
                className="col-md-6 mb-3 d-flex align-items-start"
                key={index}
              >
                <CheckCircle className="text-success me-2 mt-1" size={20} />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <h4 className="fw-bold" data-aos="fade-up">
            Course Content
          </h4>
          <p className="text-muted" data-aos="fade-up" data-aos-delay="100">
            {courseContent.summary}
          </p>
          <CourseModules modules={courseContent.modules} />

          <h4 className="fw-bold mt-5 mb-3">Course Format</h4>
          <div className="row g-3 mb-5" data-aos="zoom-in" data-aos-delay="100">
            {courseFormatDetails.map((item, idx) => (
              <div className="col-md-6" key={idx}>
                <div className="border rounded p-3 h-100 d-flex align-items-start">
                  <div className="me-3 fs-4 bg-light rounded-circle p-2">
                    {item.icon}
                  </div>
                  <div>
                    <h6 className="fw-semibold mb-1">{item.title}</h6>
                    <p className="text-muted small mb-0">{item.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h4 className="fw-bold mb-4">Certification</h4>
          <div
            className="row g-4 align-items-start"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className="col-md-4">
              <div className="bg-light border rounded ratio ratio-1x1 d-flex align-items-center justify-content-center">
                <span className="text-muted">[Certificate Preview]</span>
              </div>
            </div>
            <div className="col-md-8">
              <h6 className="fw-semibold mb-2">{certificationTitle}</h6>
              <p className="text-muted">{certificationDesc}</p>
              <p className="fw-semibold mb-1">Requirements to earn:</p>
              <p className="text-muted mb-0">{certificationRequirements}</p>
            </div>
          </div>
          <h4 className="fw-bold mt-5 mb-3">{prerequisitesTitle}</h4>
          <ul className="list-unstyled">
            {prerequisitesList.map((item, index) => (
              <li key={index} className="d-flex align-items-start mb-2">
                <span className="text-success me-2 fs-5">✔️</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h4 className="fw-bold mt-5 mb-3">{sectionTitles.community}</h4>
          <div className="row g-3 mb-5" data-aos="zoom-in" data-aos-delay="100">
            {communityFeatures.map((feature, index) => (
              <div className="col-md-6" key={index}>
                <div className="border rounded p-3 h-100 d-flex align-items-start">
                  <div className="me-3 fs-4 bg-light rounded-circle p-2">
                    {feature.icon}
                  </div>
                  <div>
                    <h6 className="fw-semibold mb-1">{feature.title}</h6>
                    <p className="text-muted small mb-0">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h4 className="fw-bold mb-4">{sectionTitles.resources}</h4>
          <div className="row g-3" data-aos="zoom-in" data-aos-delay="100">
            {courseResources.map((item, index) => (
              <div className="col-md-6" key={index}>
                <div className="border rounded p-3 d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <span className="me-2 fs-5">⬇️</span>
                    <span className="fw-medium">{item.title}</span>
                  </div>
                  <span className="badge rounded-pill bg-light border small text-dark fw-semibold text-uppercase px-3">
                    {item.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-lg-4 mt-5 mt-lg-0">
          <div className="sticky-top" data-aos="zoom-in" data-aos-delay="100">
            {/* Instructor Card */}
            <div className="card shadow-sm border rounded p-3 mb-4">
              <h5 className="fw-bold mb-3">Instructor</h5>
              <div className="d-flex align-items-center mb-3">
                <img
                  src={instructor.image}
                  alt="Instructor"
                  className="rounded-circle me-3"
                  style={{ width: "60px", height: "60px", objectFit: "cover" }}
                />
                <div>
                  <h6 className="mb-1 fw-semibold">{instructor.name}</h6>
                  <div
                    className="text-muted"
                    data-aos="zoom-in"
                    data-aos-delay="100"
                  >
                    <StarFill className="text-warning me-1" />
                    {instructor.rating} &bull; {instructor.students} students
                  </div>
                </div>
              </div>
              <p className="text-secondary small">{instructor.bio}</p>
              <a
                href={instructor.profileLink}
                className="btn btn-outline-teal w-100 d-flex align-items-center justify-content-center gap-2 mt-2"
              >
                <BoxArrowUpRight /> View Profile
              </a>
            </div>

            {/* Duration Card */}
            <div
              className="card shadow-sm border rounded p-3 mb-4"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <h5 className="fw-bold mb-3">Course Duration</h5>
              <div className="d-flex justify-content-between mb-2">
                <span className="text-muted">
                  <Clock className="me-1" /> Total Hours
                </span>
                <strong>{duration.totalHours}</strong>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <span className="text-muted">
                  <Calendar className="me-1" /> Duration
                </span>
                <strong>{duration.totalWeeks}</strong>
              </div>
              <hr />
              <div className="mb-2">
                <span className="text-muted">Start Date</span>
                <p className="mb-1 fw-semibold">{duration.startDate}</p>
              </div>
              <div>
                <span className="text-muted">End Date</span>
                <p className="mb-0 fw-semibold">{duration.endDate}</p>
              </div>
            </div>

            {/* Pricing Card */}
            <div
              className="card shadow-sm border rounded p-3"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="d-flex align-items-center mb-2">
                <h3 className="fw-bold me-2 mb-0">{pricing.currentPrice}</h3>
                <del className="text-muted mt-1 me-2">
                  {pricing.originalPrice}
                </del>
                <span className="badge bg-success-subtle text-success fw-semibold">
                  {pricing.discountText}
                </span>
              </div>

              <p className="text-muted small mb-3">{pricing.offerNote}</p>

              <button className="btn btn-teal w-100 mb-2 fw-semibold">
                Enroll Now
              </button>
              <button className="btn btn-outline-teal w-100 mb-3">
                Try Free Lesson
              </button>

              <p className="text-center text-muted small mb-3">
                30-day money-back guarantee
              </p>

              <ul className="list-unstyled small mb-0">
                {pricing.features.map((feature, index) => (
                  <li key={index} className="d-flex align-items-start mb-2">
                    <CheckCircle className="text-success me-2 mt-1" size={18} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseOverview;
