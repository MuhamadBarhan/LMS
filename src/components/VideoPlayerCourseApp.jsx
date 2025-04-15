// src/VideoPlayerCourseApp.jsx

import React, { useState } from "react";
import { courseData } from "./data/courseData";
import VideoPlayer from "./components/VideoPlayer";
import Quiz from "./components/Quiz";
import ModulesView from "./components/ModulesView";

const VideoPlayerCourseApp = () => {
  const modules = courseData.courseContent.modules;
  const [currentTopic, setCurrentTopic] = useState(modules[0].topics[0]);
  const [showQuiz, setShowQuiz] = useState(false);

  const markComplete = () => {
    const updatedModules = [...modules];
    updatedModules.forEach((mod) =>
      mod.topics.forEach((topic) => {
        if (topic.id === currentTopic.id) {
          topic.completed = true;
        }
      })
    );
    setShowQuiz(true);
  };

  const handleQuizPass = () => {
    setShowQuiz(false);
    alert("✅ Quiz passed! You can now proceed to next video.");
  };

  const handleQuizFail = () => {
    alert("❌ Try again. You need at least 3 correct answers.");
  };

  return (
    <div className="d-flex">
      <ModulesView
        modules={modules}
        onSelect={setCurrentTopic}
        currentTopic={currentTopic}
      />
      <div className="flex-grow-1 p-4">
        <h4>{currentTopic.title}</h4>
        {!showQuiz ? (
          <VideoPlayer topic={currentTopic} onComplete={markComplete} />
        ) : (
          <Quiz onPass={handleQuizPass} onFail={handleQuizFail} />
        )}
      </div>
    </div>
  );
};

export default VideoPlayerCourseApp;
