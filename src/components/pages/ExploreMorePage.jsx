import { useState } from "react";
import "../styles/ExploreMorePage.css";
import { FiFilter, FiSearch } from "react-icons/fi";
import java from "../../assets/images/explore-thumbnail.png";

export default function ExploreMorePage({ onTakeQuiz }) {
  const [activeTab, setActiveTab] = useState("General");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedLevel, setSelectedLevel] = useState("All Levels");
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [showLevelDropdown, setShowLevelDropdown] = useState(false);

  const categories = [
    "All Categories",
    "Web Development",
    "Mobile Development",
    "Data Science",
    "UI/UX Design",
    "Cloud Computing",
    "Cybersecurity",
  ];

  const levels = ["All Levels", "Beginner", "Intermediate", "Advanced"];

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

  const pathways = [
    {
      id: "frontend-dev",
      title: "Front-End Developer Path",
      image: java, // example path (you can place images in /public/images)
      description: "Become a professional front-end developer from scratch.",
      category: "Web Development",
      level: "Beginner to Intermediate",
      duration: "6 months",
      steps: [
        {
          title: "HTML & CSS Fundamentals",
          description: "Learn the building blocks of web development.",
        },
        {
          title: "JavaScript Essentials",
          description: "Master programming concepts with JavaScript.",
        },
        {
          title: "Responsive Web Design",
          description: "Create websites that work on any device.",
        },
        {
          title: "React.js Fundamentals",
          description: "Build modern user interfaces with React.",
        },
        {
          title: "Web Performance Optimization",
          description: "Make your websites fast and efficient.",
        },
        {
          title: "Portfolio Project",
          description: "Build a complete portfolio to showcase your skills.",
        },
      ],
    },
    {
      id: "fullstack-dev",
      title: "Full-Stack Developer Path",
      image: java,
      description: "Master both front-end and back-end development.",
      category: "Web Development",
      level: "Intermediate",
      duration: "9 months",
      steps: [
        {
          title: "Front-End Fundamentals",
          description: "HTML, CSS, and JavaScript essentials.",
        },
        {
          title: "React.js Development",
          description: "Build modern user interfaces.",
        },
        {
          title: "Node.js & Express",
          description: "Create server-side applications with JavaScript.",
        },
        {
          title: "Database Design",
          description: "Work with SQL and NoSQL databases.",
        },
        {
          title: "API Development",
          description: "Build and consume RESTful APIs.",
        },
        {
          title: "Authentication & Security",
          description: "Implement secure user authentication.",
        },
        {
          title: "Full-Stack Project",
          description: "Build a complete web application from scratch.",
        },
      ],
    },
    {
      id: "data-science",
      title: "Data Science Path",
      image: java,
      description: "Learn to analyze data and build predictive models.",
      category: "Data Science",
      level: "Beginner to Intermediate",
      duration: "8 months",
      steps: [
        {
          title: "Python Programming",
          description: "Learn Python for data analysis.",
        },
        {
          title: "Data Analysis with Pandas",
          description: "Manipulate and analyze data efficiently.",
        },
        {
          title: "Data Visualization",
          description: "Create compelling visualizations.",
        },
        {
          title: "Statistical Analysis",
          description: "Apply statistical methods to data.",
        },
        {
          title: "Machine Learning Basics",
          description: "Build predictive models with scikit-learn.",
        },
        {
          title: "Data Science Project",
          description: "Solve a real-world problem with data science.",
        },
      ],
    },
    {
      id: "mobile-dev",
      title: "Mobile App Developer Path",
      image: java,
      description: "Build native and cross-platform mobile applications.",
      category: "Mobile Development",
      level: "Intermediate",
      duration: "7 months",
      steps: [
        {
          title: "Programming Fundamentals",
          description: "Core programming concepts for mobile development.",
        },
        {
          title: "Flutter & Dart",
          description: "Build cross-platform apps with Flutter.",
        },
        {
          title: "UI/UX for Mobile",
          description: "Design intuitive mobile interfaces.",
        },
        {
          title: "State Management",
          description: "Manage application state effectively.",
        },
        {
          title: "API Integration",
          description: "Connect your app to backend services.",
        },
        {
          title: "Mobile App Project",
          description: "Build and deploy a complete mobile application.",
        },
      ],
    },
    {
      id: "ui-ux-design",
      title: "UI/UX Designer Path",
      image: java,
      description: "Master the art and science of user experience design.",
      category: "UI/UX Design",
      level: "Beginner to Intermediate",
      duration: "6 months",
      steps: [
        {
          title: "Design Fundamentals",
          description: "Learn core visual design principles.",
        },
        {
          title: "User Research",
          description: "Understand user needs and behaviors.",
        },
        {
          title: "Wireframing & Prototyping",
          description: "Create low and high-fidelity prototypes.",
        },
        {
          title: "UI Design",
          description: "Design beautiful and functional interfaces.",
        },
        {
          title: "UX Design",
          description: "Create seamless user experiences.",
        },
        {
          title: "Design Systems",
          description: "Build scalable design systems.",
        },
        {
          title: "Portfolio Project",
          description: "Create a UX case study for your portfolio.",
        },
      ],
    },
  ];

  const filteredCourses = sampleCourses.filter((course) => {
    const matchSearch = course.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchCategory =
      selectedCategory === "All Categories" ||
      course.category === selectedCategory;
    const matchLevel =
      selectedLevel === "All Levels" || course.level === selectedLevel;
    return matchSearch && matchCategory && matchLevel;
  });

  return (
    <div className="container py-4 exploreMore">
      <h1 className="fw-bold mb-3">Explore More</h1>

      {/* Toggle tabs */}
      <div className="tab-toggle d-inline-flex p-1 rounded-3 bg-light">
        <button
          className={`tab-btn px-3 py-2 rounded-3 fw-semibold ${
            activeTab === "General" ? "active" : ""
          }`}
          onClick={() => setActiveTab("General")}
        >
          General Courses
        </button>
        <button
          className={`tab-btn px-3 py-2 rounded-3 fw-semibold ${
            activeTab === "Personalized" ? "active" : ""
          }`}
          onClick={() => setActiveTab("Personalized")}
        >
          Personalized Learning Pathways
        </button>
      </div>

      {/* General Courses */}
      {activeTab === "General" && (
        <>
          <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mt-4 mb-4">
            {/* Search */}
            <div className="search-container d-flex align-items-center flex-grow-1">
              <FiSearch className="me-2 text-muted" />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="form-control border-0 shadow-none"
              />
            </div>

            {/* Filters */}
            <div className="d-flex align-items-center gap-2 flex-wrap">
              <FiFilter className="text-muted" />
              <span className="fw-semibold">Filters:</span>

              {/* Category Dropdown */}
              <div className="custom-dropdown">
                <div
                  className="dropdown-toggle"
                  onClick={() => {
                    setShowCategoryDropdown((prev) => !prev);
                    setShowLevelDropdown(false);
                  }}
                >
                  {selectedCategory}
                </div>
                {showCategoryDropdown && (
                  <ul className="dropdown-menu show">
                    {categories.map((cat, idx) => (
                      <li
                        key={idx}
                        onClick={() => {
                          setSelectedCategory(cat);
                          setShowCategoryDropdown(false);
                        }}
                      >
                        {cat}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Level Dropdown */}
              <div className="custom-dropdown">
                <div
                  className="dropdown-toggle"
                  onClick={() => {
                    setShowLevelDropdown((prev) => !prev);
                    setShowCategoryDropdown(false);
                  }}
                >
                  {selectedLevel}
                </div>
                {showLevelDropdown && (
                  <ul className="dropdown-menu show">
                    {levels.map((lvl, idx) => (
                      <li
                        key={idx}
                        onClick={() => {
                          setSelectedLevel(lvl);
                          setShowLevelDropdown(false);
                        }}
                      >
                        {lvl}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>

          {/* Courses */}
          <div className="row">
            {filteredCourses.map((course, idx) => (
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

            {filteredCourses.length === 0 && (
              <div className="col-12 text-center text-muted">
                No courses found.
              </div>
            )}
          </div>
        </>
      )}

      {/* Personalized Pathways */}
      {activeTab === "Personalized" && (
        <div className="mt-4">
          <div className="personalized-box p-4 rounded-4 d-flex justify-content-between align-items-center flex-wrap mb-4">
            <div>
              <h5 className="fw-bold">Find Your Perfect Learning Path</h5>
              <p className="text-muted mb-3">
                Take a quick quiz to get a personalized learning pathway based
                on your goals, experience level, and interests.
              </p>
              <div className="d-flex gap-2 flex-wrap">
                <span className="badge-option">
                  <i className="bi bi-graph-up-arrow me-1"></i> Skill Assessment
                </span>
                <span className="badge-option">
                  <i className="bi bi-journals me-1"></i> Tailored Content
                </span>
                <span className="badge-option">
                  <i className="bi bi-person-lines-fill me-1"></i> Progress
                  Tracking
                </span>
              </div>
            </div>

            <button className="btn btn-outline take-quiz-btn" onClick={onTakeQuiz}>
              Take the Quiz
            </button>
          </div>
          <h4 className="fw-bold mb-3">Popular Learning Pathways</h4>
          <div className="row g-4">
            {pathways.slice(0, 3).map((pathway) => (
              <div key={pathway.id} className="col-md-4">
                <div className="card h-100 shadow-sm border-0 rounded-4 overflow-hidden">
                  <img
                    src={pathway.image}
                    alt={pathway.title}
                    className="card-img-top object-fit-cover"
                    style={{ height: "180px", objectFit: "cover" }}
                  />

                  <div className="card-body">
                    <div className="d-flex gap-2 mb-2 flex-wrap">
                      <span className="badge bg-light text-dark fw-semibold">
                        {pathway.category}
                      </span>
                      <span className="badge bg-light text-dark fw-semibold">
                        {pathway.level}
                      </span>
                    </div>
                    <h6 className="fw-bold">{pathway.title}</h6>
                    <p className="text-muted mb-2">{pathway.description}</p>
                    <div className="text-muted small mb-2">
                      <i className="bi bi-clock me-1"></i>
                      {pathway.duration}
                    </div>
                    <ul className="list-unstyled mb-2">
                      {pathway.steps.slice(0, 3).map((step, i) => (
                        <li key={i} className="d-flex align-items-center mb-1">
                          <i className="bi bi-check-circle me-2 text-success"></i>
                          <span>{step.title}</span>
                        </li>
                      ))}
                    </ul>
                    {pathway.steps.length > 3 && (
                      <p className="text-primary small mb-3">
                        +{pathway.steps.length - 3} more steps
                      </p>
                    )}
                    <button className="btn btn-outline w-100 pathway-btn">
                      View Pathway <i className="bi bi-arrow-right ms-2"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
