// src/components/ModulesView.jsx
import React from "react";
import { FaLock, FaUnlock } from "react-icons/fa";

const isUnlocked = (topic, index, topics) => {
  const today = new Date().toISOString().split("T")[0];
  const topicDate = topic.date;

  if (topicDate > today) return false; // Future date

  if (index === 0) return true; // First lesson always unlocked
  return topics[index - 1].completed; // Unlock only if previous is completed
};

const ModulesView = ({ modules, onSelect, currentTopic }) => {
  return (
    <div className="p-3 bg-light border-end" style={{ minWidth: "250px" }}>
      <h5 className="mb-3">Modules</h5>
      {modules.map((module) => (
        <div key={module.id} className="mb-4">
          <strong>{module.title}</strong>
          <ul className="list-group list-group-flush">
            {module.topics.map((topic, idx) => {
              const unlocked = isUnlocked(topic, idx, module.topics);
              const isActive = currentTopic?.id === topic.id;
              return (
                <li
                  key={topic.id}
                  className={`list-group-item d-flex justify-content-between align-items-center ${
                    isActive ? "active text-white" : ""
                  } ${!unlocked ? "disabled text-muted" : ""}`}
                  onClick={() => unlocked && onSelect(topic)}
                  style={{ cursor: unlocked ? "pointer" : "not-allowed" }}
                >
                  {topic.title}
                  {unlocked ? <FaUnlock /> : <FaLock />}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ModulesView;
