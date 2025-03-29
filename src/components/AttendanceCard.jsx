import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { PieChart, Pie, Cell } from "recharts";
import "../components/styles/AttendanceCard.css";

const courses = [
  {
    title: "Git and GitHub Crash Course",
    instructor: "Esther Howard",
    totalHours: 28,
    attendedHours: 23,
    attendancePercentage: 82,
  },
  {
    title: "Figma UI UX Design",
    instructor: "Jane Cooper",
    totalHours: 90,
    attendedHours: 86,
    attendancePercentage: 95,
  },
];

const Attendance = () => {
  return (
    <div className="container mt-4">


      {/* Course Cards - Two per Row */}
      <div className="row">
        {courses.map((course, index) => {
          const data = [
            { name: "Attended", value: course.attendedHours },
            { name: "Missed", value: course.totalHours - course.attendedHours },
          ];
          const COLORS = ["#2a98a5", "#f5a25d"];

          return (
            <div className="col-md-6 mb-4" key={index}> {/* Two cards per row */}
              <div className="card custom-card">
                <div className="card-body d-flex align-items-center justify-content-between">

                  {/* Left Section - Title, Instructor, Progress Bar */}
                  <div className="left-section">
                    <h5 className="card-title">{course.title}</h5>
                    <p className="card-subtitle mb-2 text-muted">
                      By {course.instructor}
                    </p>
                    <div className="progress mt-2">
                      <div
                        className="progress-bar progress-bar-striped bg-info" // Add a Bootstrap color class
                        role="progressbar"
                        style={{ width: `${course.attendancePercentage}%` }}
                      />
                    </div>

                    <p className="progress-text">
                      {course.attendancePercentage}% completed
                    </p>
                  </div>

                  {/* Middle Section - Pie Chart */}
                  <div className="middle-section">
                    <PieChart width={90} height={90}>
                      <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius={25}
                        outerRadius={35}
                        fill="#8884d8"
                        paddingAngle={3}
                        dataKey="value"
                      >
                        {data.map((entry, i) => (
                          <Cell key={`cell-${i}`} fill={COLORS[i]} />
                        ))}
                      </Pie>
                    </PieChart>
                  </div>

                  {/* Right Section - Details */}
                  <div className="right-section">
                    <p><strong>Total Hours:</strong> {course.totalHours}</p>
                    <p><strong>Hours Attended:</strong> {course.attendedHours}</p>
                    <p><strong>Attendance %:</strong> {course.attendancePercentage}%</p>
                  </div>

                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Attendance;
