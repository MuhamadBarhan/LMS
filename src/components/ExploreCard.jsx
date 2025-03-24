import React from "react";
import "../components/styles/exploreCard.css";
import exploreImg from "../assets/images/explore-thumbnail.png";
import avatar from "../assets/images/avatar-explore.png";

const ExploreCard = () => {
  return (
    <div className="explore-card">
      <img src={exploreImg} alt="Explore Thumbnail" className="explore-thumbnail" />
      <div className="explore-content">
        <p className="category">Front-End</p>
        <h3 className="title">Full JavaScript Course</h3>
        <p className="description">
          Learn how to make your website interactive, grab attention of the users.
        </p>
        <div className="explore-user">
          <img src={avatar} alt="Avatar" />
          <p>Jane Cooper</p>
        </div>
        <div className="explore-footer">
          <span>⭐ 4.5 (3.2k)</span>
          <span className="price">₹999</span>
        </div>
      </div>
    </div>
  );
};

export default ExploreCard;
