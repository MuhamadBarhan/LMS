import React from "react";
import CourseBanner from "../CourseBanner";
import CourseOverview from "../CourseOverview";

const CourseDetailsPage = () => {
  return (
    <div className="container" style={{marginTop:'8rem', width:'100vw'}} >
      <CourseBanner />
      <CourseOverview />
    </div>
  );
};

export default CourseDetailsPage;
