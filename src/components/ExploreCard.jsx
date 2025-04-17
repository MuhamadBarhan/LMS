import React, { useEffect, useState } from "react";
import exploreImg from "../assets/images/explore-thumbnail.png";
import avatar from "../assets/images/avatar-explore.png";
import java from "../assets/images/explore-thumbnail.png";
import axios from "axios";

 
const ExploreCourses = () => {

  const [exploreCourseData, setExploreCourseData] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:8080/courses/all")
    .then((res)=>{
      setExploreCourseData(res.data);
    })
    .catch((error)=>{
      console.log(error);
      
    })
  },[])

  return (
    <div className="container py-4">
      <h4 className="mb-4 fw-bold">Explore More Courses</h4>
      <div className="row">
            {exploreCourseData.map((course) => (
              <div className="col-md-4 mb-4" key={course.id}>
                <div className="card h-100 shadow-sm">
                  {/* Image at top */}
                  <img
                    src={`http://localhost:8080/course_images/${course.image}`}
                    alt={course.title}
                    className="card-img-top"
                    style={{ height: "180px", objectFit: "cover" }}
                  />

                  <div className="card-body d-flex flex-column">
                    <h5 className="fw-bold">{course.title}</h5>
                    <p className="text-muted small">{course.description}</p>
                    <p className="text-muted small mb-1">
                      📂 {course.category} &nbsp; 🎓 {course.level}
                    </p>
                    <p className="text-muted small mb-1">
                      ⏱ {course.duration} &nbsp; 👨‍🏫 {course.instructorEntity.name}
                    </p>
                    <p className="fw-semibold">{course.price}</p>
                    <button className="btn btn-outline-dark mt-auto">
                      View Course
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
    </div>
  );
};

export default ExploreCourses;
