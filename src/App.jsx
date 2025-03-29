import React, { useEffect } from "react";
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import SignUp from "./components/signup";
import Login from "./components/login";
import Home from './components/pages/Home';
import Courses from "./components/pages/Courses";
import AttendancePage from "./components/pages/AttendancePage";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Certificates from "./components/Certificates"
import Assessments from "./components/Assessments";
import Profile from "./components/pages/Profile"

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" }); // Initialize AOS
  }, []);

  return (
    <>
    <Router>
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
      </Routes>
    </Router>
    </>
  )
}

export default App
