import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Components
import SignUp from "./components/signup";
import Login from "./components/login";
import Home from './components/pages/Home';
import Courses from "./components/pages/Courses";
import AttendancePage from "./components/pages/AttendancePage";
import Certificates from "./components/Certificates";
import Assessments from "./components/Assessments";
import Profile from "./components/pages/Profile";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Learning from "./components/Learning";
import CourseDetailsPage from "./components/pages/CourseDetailsPage";
import EnrolledCoursePage from "./components/pages/EnrolledCoursePage";
import AboutUsPage from "./components/pages/AboutUsPage";
import ExploreMorePage from "./components/pages/ExploreMorePage";
import QuizPathway from "./components/QuizPathway";
import ExploreMoreMain from "./components/pages/ExploreMoreMain";
import ViewPathway from "./components/pages/ViewPathway";
import CourseLearningPage from "./components/pages/CourseLearningPage";
import CompleteProfile from "./components/complete-profile";
import PrivateRoute from "./components/PrivateRoute";
import { Navigate } from "react-router-dom";
import ForgotPassword from "./components/ForgotPassword";


function App() {
  const isAuthenticated = !!localStorage.getItem("authToken");
  const location = useLocation();
  const [userDetails, setUserDetails] = useState([]);

  // Hide Navbar on login & signup pages
  const hideNavbarRoutes = ["/login", "/signup"];
  const isNavbarVisible = !hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {isNavbarVisible && <Navbar />}
      <Routes>
        <Route path="/" element={isAuthenticated ? <Navigate to="/courses" /> : <Home />} />
        <Route path="/login" element={<Login setUserDetails={setUserDetails}/>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/courses" element={<PrivateRoute><Courses /></PrivateRoute>} />
        <Route path="/attendance" element={<AttendancePage />} />
        <Route path="/certificate" element={<Certificates />} />
        <Route path="/assessments" element={<Assessments />} />
        <Route path="/profile" element={<Profile userDetails={userDetails}/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/learning" element={<PrivateRoute><Learning /></PrivateRoute>} />
        <Route path="/coursedetails" element={<CourseDetailsPage />} />
        <Route path="/enrolledcoursedetails" element={<EnrolledCoursePage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/explore" element={<ExploreMoreMain />} />
        <Route path="/quiz" element={<QuizPathway />} />
        <Route path="/pathway" element={<ViewPathway />} />
        <Route path="/complete-profile" element={<CompleteProfile />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </>
  );
}

export default App;
