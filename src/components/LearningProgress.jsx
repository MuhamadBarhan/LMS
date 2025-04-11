// LearningDashboard.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/LearningProgress.css";
import { BsClock, BsBook, BsCalendar, BsPlayCircle } from "react-icons/bs";
import "bootstrap-icons/font/bootstrap-icons.css";

const classes = [
  {
    title: "Advanced React Patterns",
    description: "Learn how to implement complex React patterns",
    tag: "Live",
    time: "Today",
    schedule: "3:00 PM - 4:30 PM",
    startIn: "2h 15m",
    button: "Join Class",
  },
  {
    title: "Database Design Fundamentals",
    description: "Learn relational database design principles",
    tag: "Upcoming",
    time: "Tomorrow",
    schedule: "2:00 PM - 3:30 PM",
    startIn: "1d 4h 45m",
    button: "Add to Calendar",
  },
  {
    title: "API Development with Node.js",
    description: "Building RESTful APIs with Express",
    tag: "Recorded",
    time: "May 2, 2025",
    schedule: "Duration: 1h 15m",
    button: "Watch Recording",
  },
];

export default function LearningProgress() {
  return (
    <div className="container py-5 d-lg-flex gap-4">
  {/* Left Section: Upcoming & Ongoing Classes */}
  <div className="flex-fill border rounded p-4 mb-4" style={{ borderColor: "#dee2e6" }}>
    <div className="mb-3 border-bottom pb-2">
      <h4 className="fw-bold">Upcoming & Ongoing Classes</h4>
      <p className="text-muted">Live sessions and recorded classes</p>
    </div>

    {classes.map((cls, i) => (
      <div
        key={i}
        className="class-card d-flex justify-content-between align-items-center p-3 mb-3 border rounded"
      >
        <div>
          <span className={`badge tag-${cls.tag.toLowerCase()}`}>
            {cls.tag}
          </span>
          <h6 className="fw-bold mt-2 mb-1">{cls.title}</h6>
          <p className="mb-1 text-muted small">{cls.description}</p>
          <p className="mb-0 text-muted small">
            <BsCalendar className="me-2" /> {cls.time} &nbsp;
            <BsClock className="ms-2 me-2" /> {cls.schedule}
          </p>
        </div>
        <div className="text-end">
          {cls.startIn && (
            <p className="text-muted small mb-2">
              Starts in: {cls.startIn}
            </p>
          )}
          <button className="btn btn-teal btn-sm">{cls.button}</button>
        </div>
      </div>
    ))}
  </div>

  {/* Right Section: Learning Progress */}
  <div className="learning-progress border rounded p-4" style={{ borderColor: "#dee2e6" }}>

    <h5 className="fw-bold mb-4">Learning Progress</h5>

    {/* Study Time */}
    <div className="mb-3">
      <p className="fw-semibold mb-1">
        <BsClock className="me-2" /> Study Time{" "}
        <span className="float-end fw-bold">5h 30m</span>
      </p>
      <div className="progress mb-1">
        <div className="progress-bar bg-dark" style={{ width: "75%" }}></div>
      </div>
      <small className="text-muted">+2h 15m compared to last week</small>
    </div>

    {/* Lessons Completed */}
    <div className="mb-3">
      <p className="fw-semibold mb-1">
        <BsBook className="me-2" /> Lessons Completed{" "}
        <span className="float-end fw-bold">12</span>
      </p>
      <div className="progress mb-1">
        <div className="progress-bar bg-dark" style={{ width: "85%" }}></div>
      </div>
      <small className="text-muted">+3 compared to last week</small>
    </div>

    {/* Learning Streak */}
    <div>
      <p className="fw-semibold mb-2">
        <BsPlayCircle className="me-2" /> Learning Streak{" "}
        <span className="float-end fw-bold">3 days</span>
      </p>
      <div className="d-flex gap-2">
        {[1, 2, 3, 4, 5, 6, 7].map((day, i) => (
          <div
            key={i}
            className={`streak-circle ${day <= 3 ? "active" : ""}`}
          >
            {day}
          </div>
        ))}
      </div>
      <small className="text-muted">
        Keep going! 4 more days for a perfect week
      </small>
    </div>
  </div>
</div>

  );
}
