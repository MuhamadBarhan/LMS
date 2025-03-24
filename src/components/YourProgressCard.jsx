import React from "react";
import "../components/styles/progressCard.css";
import thumbnail from "../assets/images/progress-thumbnail.png"; // placeholder image
import avatar from "../assets/images/avatar.png"; // placeholder

const YourProgressCard = () => {
  return (
    <div className="progress-card">
      <img src={thumbnail} alt="Thumbnail" className="progress-thumbnail" />
      <div className="progress-content">
        <p className="category">Version Control</p>
        <h3 className="title">Git and GitHub crash course</h3>
        <div className="user-info">
          <img src={avatar} alt="Avatar" />
          <div>
            <p>Esther Howard</p>
            <span>Enrolled</span>
          </div>
        </div>
        <p className="lesson">7. Workflow on GitHub</p>
        <p className="progress">Course 7 of 10 Completed</p>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: "70%" }}></div>
        </div>
      </div>
    </div>
  );
};

export default YourProgressCard;
