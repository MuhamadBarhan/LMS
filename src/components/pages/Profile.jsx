import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import ProfileCard from "../ProfileCard";
import Attendance from "../pages/AttendancePage";
import Certifications from "../Certificates";
import Assessments from "../Assessments";
import "../styles/ProfilePage.css"
import Navbar from "../Navbar";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("attendance"); // Default is Attendance
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <Container className="mt-3">
      <Navbar isLoggedIn = {isLoggedIn} />
      <ProfileCard />
      
      {/* Navigation Tabs */}
      <ul className="nav nav-tabs mb-3 mt-3 ">
        <li className="nav-item">
          <button 
            className={`nav-link ${activeTab === "attendance" ? "active" : ""}`}
            onClick={() => setActiveTab("attendance")}
          >
            My Attendance
          </button>
        </li>
        <li className="nav-item">
          <button 
            className={`nav-link ${activeTab === "certificates" ? "active" : ""}`}
            onClick={() => setActiveTab("certificates")}
          >
            My Certifications
          </button>
        </li>
        <li className="nav-item">
          <button 
            className={`nav-link ${activeTab === "assessments" ? "active" : ""}`}
            onClick={() => setActiveTab("assessments")}
          >
            Assessments
          </button>
        </li>
      </ul>

      {/* Content based on activeTab */}
      {activeTab === "attendance" && <Attendance />}
      {activeTab === "certificates" && <Certifications />}
      {activeTab === "assessments" && <Assessments />}
    </Container>
  );
};

export default Dashboard;
