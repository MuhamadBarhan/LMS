import React, { useState, useEffect } from "react";
import courseData from "../../assets/data/pathwayData";
import "../styles/CourseLearningPage.css";

const CourseLearningPage = () => {
  const [data, setData] = useState(null);
  const [activeTab, setActiveTab] = useState("Lesson");

  useEffect(() => {
    // Simulate API fetch
    setTimeout(() => {
      setData(courseData[0]);
    }, 500);
  }, []);

  if (!data) return <div className="container mt-4">Loading...</div>;

  return (
    <div className="container customLearn">
      <h4 className="fw-bold">{data.title}</h4>
      <div className="text-muted small mb-3">
        <i className="bi bi-clock"></i> {data.duration} &nbsp;&nbsp;
        <i className="bi bi-journal-code"></i> {data.modules} modules &nbsp;&nbsp;
        <i className="bi bi-calendar"></i> {data.dateRange} &nbsp;&nbsp;
        <i className="bi bi-chat-dots"></i> {data.community}
      </div>

      <div className="progress-card p-3 rounded border mb-3">
        <div className="mb-2 fw-medium">Course Progress</div>
        <div className="progress mb-3" style={{ height: "6px" }}>
          <div
            className="progress-bar bg-dark"
            style={{ width: `${data.courseProgress}%` }}
          ></div>
        </div>
        <div className="mb-2 fw-medium">Attendance</div>
        <div className="progress mb-2" style={{ height: "6px" }}>
          <div
            className="progress-bar bg-dark"
            style={{ width: `${data.attendance.percent}%` }}
          ></div>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <span className="text-muted small">
            {data.attendance.attendedDays} of {data.attendance.totalDays} days attended
          </span>
          <button className="btn btn-dark btn-sm">▶ Continue Learning</button>
        </div>
      </div>

      <div className="tab-menu d-flex border rounded">
        {["Lesson", "Attendance", "Notes", "Assignments", "Discussion", "Downloads"].map((tab) => (
          <button
            key={tab}
            className={`btn flex-fill tab-btn ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CourseLearningPage;
