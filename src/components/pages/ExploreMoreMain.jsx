import React, { useState } from "react";
import QuizPathway from "../QuizPathway"; // create this component
import ExploreMorePage from "./ExploreMorePage"; // move the current UI logic here

const ExploreMoreMain = () => {
  const [showQuiz, setShowQuiz] = useState(false);

  return (
    <div>
      {showQuiz ? (
        <QuizPathway onBack={() => setShowQuiz(false)} />
      ) : (
        <ExploreMorePage onTakeQuiz={() => setShowQuiz(true)} />
      )}
    </div>
  );
};

export default ExploreMoreMain;
