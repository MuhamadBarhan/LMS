import React from "react";
import "../components/styles/CourseCard.css";

const CourseCard = ({ image, title, description, status, progress, completed, actions }) => {
  const teal = "#00796b";

  return (
    <div
      className="card p-3 shadow-sm border-0 rounded-4 h-100"
      style={{ minHeight: "100%" }}
    >
      <div className="position-relative rounded-3 mb-3 overflow-hidden" style={{ height: "180px" }}>
        <img
          src={image || "/placeholder.png"}
          alt="Course Thumbnail"
          className="w-100 h-100 object-fit-cover"
        />
        <span
          className={`badge position-absolute top-0 end-0 m-2 ${completed ? "text-white" : "text-dark"}`}
          style={{
            backgroundColor: completed ? teal : "#f8f9fa"
          }}
        >
          {status}
        </span>
      </div>

      <h5 className="fw-bold mb-1">{title}</h5>
      <p className="text-muted">{description}</p>

      <div className="d-flex justify-content-between small fw-medium">
        <span>Progress</span>
        <span>{progress}%</span>
      </div>
      <div className="progress my-2" style={{ height: "4px" }}>
        <div
          className="progress-bar"
          style={{ width: `${progress}%`, backgroundColor: teal }}
          role="progressbar"
        />
      </div>

      {/* Button(s) */}
      <div className={`d-${actions.length > 1 ? "flex" : "block"} gap-2 mt-3`}>
        {actions.map((label, index) => (
          <button
            key={index}
            className="btn text-white flex-fill"
            style={{ backgroundColor: teal, borderColor: teal }}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CourseCard;
