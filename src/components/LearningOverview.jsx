import React from "react";
import "./styles/LearningOverview.css"; // Create this for custom styling
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


const LearningOverview = () => {
  const data = {
    assignments: [
      {
        title: "Build a Responsive Landing Page",
        course: "Web Development Fundamentals",
        status: "due_soon",
        dueDate: "2025-05-07",
        action: "Submit Assignment"
      },
      {
        title: "User Persona Development",
        course: "UX Design Principles",
        status: "submitted",
        submittedDate: "2025-04-30",
        grade: "92/100",
        action: "View Feedback"
      }
    ],
    recommendations: [
      {
        title: "JavaScript DOM Manipulation",
        type: "lesson",
        duration: "15 min"
      },
      {
        title: "CSS Flexbox Layout Quiz",
        type: "assessment",
        duration: "10 min"
      }
    ]
  };

  return (
    <div className="container my-1">
      <div className="row g-4">
        {/* Assignments & Assessments */}
        <div className="col-md-8">
          <div className="card shadow-sm learning-section">
            <div className="card-body">
              <h4 className="card-title fw-bold">Assignments & Assessments</h4>
              <p className="text-muted">
                Track your pending and completed assignments
              </p>
              {data.assignments.map((item, index) => (
                <div key={index} className="border rounded p-3 mb-3">
                  <div className="d-flex justify-content-between align-items-start flex-wrap">
                    <div>
                      {item.status === "due_soon" ? (
                        <span className="badge bg-danger me-2">Due Soon</span>
                      ) : (
                        <span className="badge bg-secondary me-2">
                          Submitted
                        </span>
                      )}
                      <strong>{item.title}</strong>
                      <div className="text-muted small">{item.course}</div>
                      <div className="text-muted mt-1 small">
                        {item.dueDate && (
                          <>
                            <i className="bi bi-calendar-event me-1"></i>
                            Due: {new Date(item.dueDate).toDateString()}
                          </>
                        )}
                        {item.submittedDate && (
                          <>
                            <i className="bi bi-calendar-check me-1"></i>
                            Submitted:{" "}
                            {new Date(item.submittedDate).toDateString()}
                          </>
                        )}
                      </div>
                    </div>
                    <div className="text-end">
                      {item.grade && (
                        <div className="text-success fw-bold mb-2">
                          Grade: {item.grade}
                        </div>
                      )}
                      <button className="btn btn-teal btn-sm">
                        {item.action}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recommended Next */}
        <div className="col-md-4">
          <div className="card shadow-sm learning-section">
            <div className="card-body">
              <h5 className="fw-bold">Recommended Next</h5>
              <p className="text-muted small">
                Based on your learning progress
              </p>
              {data.recommendations.map((rec, i) => (
                <div
                  key={i}
                  className="d-flex justify-content-between align-items-center border rounded p-3 mb-2"
                >
                  <div>
                    <div className="fw-semibold">{rec.title}</div>
                    <div className="text-muted small">
                      {rec.duration} {rec.type === "lesson" ? "lesson" : "assessment"}
                    </div>
                  </div>
                  <div>
                    <i className="bi bi-chevron-right"></i>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningOverview;
