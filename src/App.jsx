import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { useDispatch } from "react-redux";
import { setUser } from "./redux/userSlice";

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

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      const user = JSON.parse(savedUser);
      dispatch(setUser(user));
    }
  }, [dispatch]);

  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();

  // Hide Navbar on login & signup pages
  const hideNavbarRoutes = ["/login", "/signup"];
  const isNavbarVisible = !hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {isNavbarVisible && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/attendance" element={<AttendancePage />} />
        <Route path="/certificate" element={<Certificates />} />
        <Route path="/assessments" element={<Assessments />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/learning" element={<Learning />} />
        <Route path="/coursedetails" element={<CourseDetailsPage />} />
        <Route path="/enrolledcoursedetails" element={<EnrolledCoursePage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/explore" element={<ExploreMorePage />} />
      </Routes>
    </>
  );
}

export default App;
