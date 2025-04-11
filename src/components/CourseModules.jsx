import React, { useState } from "react";

const CourseModules = ({ modules }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="custom-accordion">
      {modules.map((module, index) => (
        <div key={index} className="mb-3 border rounded">
          <div
            className="p-3 d-flex justify-content-between align-items-center bg-light cursor-pointer"
            onClick={() => toggle(index)}
            style={{ cursor: "pointer" }}
          >
            <div>
              <strong>{module.title}</strong>
              <div className="text-muted small">
                {module.lessons} • {module.hours}
              </div>
            </div>
            <div>{openIndex === index ? "−" : "+"}</div>
          </div>
          {openIndex === index && (
            <div className="p-3">
              <ul className="list-unstyled mb-0">
                {module.topics.map((topic, i) => (
                  <li
                    key={i}
                    className="d-flex justify-content-between align-items-center py-1"
                  >
                    <span>
                      {topic.title}{" "}
                      {topic.preview && (
                        <span className="badge bg-light text-dark border ms-2">
                          Preview
                        </span>
                      )}
                    </span>
                    {topic.watch && (
                      <a
                        href="#"
                        className="text-primary text-decoration-none small"
                      >
                        Watch
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CourseModules;
