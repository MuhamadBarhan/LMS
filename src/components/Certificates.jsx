import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaEye, FaDownload, FaShareAlt } from "react-icons/fa";
import "../components/styles/Certificates.css";

const certifications = [
  {
    title: "Git and GitHub Crash Course",
    instructor: "Esther Howard",
    completionPercentage: 100,
  },
  {
    title: "Figma UI UX Design",
    instructor: "Jane Cooper",
    completionPercentage: 100,
  },
];

const Certifications = () => {
  return (
    <>
    <div className="container mt-4">

      {/* Certification Cards */}
      <div className="row">
        {certifications.map((cert, index) => (
          <div className="col-md-6" key={index}>
            <div className="card certification-card">
              <div className="card-body">
                <h5 className="card-title">{cert.title}</h5>
                <p className="card-subtitle mb-2 text-muted">By {cert.instructor}</p>
                
                {/* Progress Bar */}
                <div className="progress mt-3">
                  <div
                    className="progress-bar bg-info"
                    role="progressbar"
                    style={{ width: `${cert.completionPercentage}%` }}
                  />
                </div>
                <p className="completion-text">100% completed</p>

                {/* Action Icons */}
                <div className="action-icons">
                  <span><FaEye /> View</span>
                  <span><FaDownload /> Download</span>
                  <span><FaShareAlt /> Share</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Certifications;
