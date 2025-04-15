// src/components/Quiz.jsx

import React, { useState } from "react";

const sampleQuestions = [
  {
    question: "What is HTML?",
    options: ["Markup Language", "Programming Language", "Scripting Language"],
    answer: "Markup Language",
  },
  {
    question: "What does CSS stand for?",
    options: ["Color Style Sheet", "Cascading Style Sheet", "Creative Style Syntax"],
    answer: "Cascading Style Sheet",
  },
  {
    question: "What tag is used for JavaScript?",
    options: ["<js>", "<javascript>", "<script>"],
    answer: "<script>",
  },
  {
    question: "Which is used to make layout?",
    options: ["div", "table", "flexbox"],
    answer: "flexbox",
  },
  {
    question: "What is the extension of a CSS file?",
    options: [".html", ".css", ".js"],
    answer: ".css",
  },
];

const Quiz = ({ onPass, onFail }) => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleSelect = (index, option) => {
    setSelectedAnswers({ ...selectedAnswers, [index]: option });
  };

  const handleSubmit = () => {
    let count = 0;
    sampleQuestions.forEach((q, i) => {
      if (selectedAnswers[i] === q.answer) count++;
    });
    setScore(count);
    setSubmitted(true);

    if (count >= 3) {
      onPass();
    } else {
      onFail();
    }
  };

  return (
    <div className="quiz-container">
      <h5>Quiz</h5>
      {sampleQuestions.map((q, i) => (
        <div key={i} className="mb-3">
          <strong>{q.question}</strong>
          {q.options.map((opt, j) => (
            <div key={j}>
              <input
                type="radio"
                name={`q${i}`}
                onChange={() => handleSelect(i, opt)}
                disabled={submitted}
              />{" "}
              {opt}
            </div>
          ))}
        </div>
      ))}
      {!submitted && (
        <button className="btn btn-success" onClick={handleSubmit}>
          Submit Quiz
        </button>
      )}
      {submitted && <p>Your score: {score}/5</p>}
    </div>
  );
};

export default Quiz;
