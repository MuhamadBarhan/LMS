import React from "react";
import exploreImg from "../assets/images/explore-thumbnail.png";
import avatar from "../assets/images/avatar-explore.png";

const courses = [
  {
    id: 1,
    title: "Full JavaScript Course",
    description: "Learn how to make your website interactive, grab attention of the users.",
    category: "Front-End",
    instructor: "Jane Cooper",
    image: exploreImg,
    avatar: avatar,
    rating: "4.5",
    reviews: "3.2k",
    price: "₹999",
  },
  {
    id: 2,
    title: "React Mastery",
    description: "Master the React framework with hands-on projects.",
    category: "Front-End",
    instructor: "John Doe",
    image: exploreImg,
    avatar: avatar,
    rating: "4.7",
    reviews: "2.5k",
    price: "₹1299",
  },
  {
    id: 3,
    title: "Advanced CSS Techniques",
    description: "Take your CSS skills to the next level with animations and layouts.",
    category: "Front-End",
    instructor: "Emily Stone",
    image: exploreImg,
    avatar: avatar,
    rating: "4.6",
    reviews: "1.8k",
    price: "₹899",
  },
];

const ExploreCourses = () => {
  return (
    <div className="container py-4">
      <h4 className="mb-4 fw-bold">Explore More Courses</h4>
      <div className="row">
        {courses.map((course) => (
          <div className="col-md-4 mb-4" key={course.id}>
            <div className="card h-100 shadow-sm">
              <img
                src={course.image}
                alt={course.title}
                className="card-img-top"
                style={{ height: "180px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="fw-bold">{course.title}</h5>
                <p className="text-muted small">{course.description}</p>
                <p className="text-muted small mb-1">📂 {course.category}</p>
                <div className="d-flex align-items-center gap-2 mb-2">
                  <img
                    src={course.avatar}
                    alt={course.instructor}
                    className="rounded-circle"
                    style={{ width: "28px", height: "28px" }}
                  />
                  <small className="text-muted">{course.instructor}</small>
                </div>
                <div className="d-flex justify-content-between align-items-center small mb-3">
                  <span>⭐ {course.rating} ({course.reviews})</span>
                  <span className="fw-semibold text-success">{course.price}</span>
                </div>
                <button className="btn btn-outline-dark mt-auto">View Course</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreCourses;
