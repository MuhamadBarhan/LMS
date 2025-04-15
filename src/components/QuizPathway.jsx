import React, { useState } from "react";
import "./styles/QuizPathway.css";
import { useNavigate } from "react-router-dom";

const steps = [
  {
    question: "What is your current skill level?",
    options: [
      "Beginner - I'm just starting out",
      "Intermediate - I have some experience",
      "Advanced - I'm looking to specialize",
    ],
    key: "level",
  },
  {
    question: "Which domain are you most interested in?",
    options: ["Web Development", "Mobile Development", "Data Science", "UI/UX Design"],
    key: "domain",
  },
  {
    question: "What is your preferred learning pace?",
    options: ["Self-paced", "Structured & guided", "Fast-track"],
    key: "pace",
  },
];

const recommendations = {
  "Mobile Development": {
    title: "Mobile App Developer Path",
    description: "Build native and cross-platform mobile applications.",
    journey: [
      "Programming Fundamentals",
      "Flutter & Dart",
      "UI/UX for Mobile",
      "State Management",
      "API Integration",
      "Mobile App Project",
    ],
  },
  "Web Development": {
    title: "Full Stack Web Developer Path",
    description: "Master front-end and back-end web technologies.",
    journey: [
      "HTML, CSS, JavaScript",
      "React.js / Angular",
      "Backend with Node.js",
      "Database Essentials",
      "API Integration",
      "Capstone Project",
    ],
  },
  "Data Science": {
    title: "Data Science Path",
    description: "Analyze data and build ML models.",
    journey: [
      "Python Basics",
      "Data Wrangling & Analysis",
      "Machine Learning",
      "Deep Learning",
      "Data Visualization",
      "Final Project",
    ],
  },
  "UI/UX Design": {
    title: "UI/UX Designer Path",
    description: "Design intuitive and engaging digital experiences.",
    journey: [
      "Design Fundamentals",
      "Figma & Prototyping",
      "User Research",
      "Visual Hierarchy",
      "Design Systems",
      "Portfolio Project",
    ],
  },
};

const QuizPathway = ({ onBack }) => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const navigate = useNavigate();

  const handleSelect = (option) => {
    const key = steps[step].key;
    setAnswers((prev) => ({ ...prev, [key]: option }));
  };

  const handleNext = () => {
    if (step === steps.length - 1) {
      setShowResult(true);
    } else {
      setStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (step === 0) {
      onBack(); // return to Explore More
    } else {
      setStep((prev) => prev - 1);
    }
  };

  const selectedDomain = answers["domain"];
  const recommendation = recommendations[selectedDomain];

  return (
    <div className="container quiz">
      <a href="#" onClick={onBack} className="text-muted d-block mb-3 backToExplore">
        ← Back to Explore
      </a>
      <h2 className="fw-bold">Find Your Learning Path</h2>
      <p className="text-muted">Answer a few questions to get a personalized learning pathway tailored to your goals and experience.</p>

      {!showResult ? (
        <>
          <div className="progress mb-3">
            <div
              className="progress-bar bg-dark"
              role="progressbar"
              style={{ width: `${((step + 1) / steps.length) * 100}%` }}
            ></div>
          </div>
          <p className="text-muted">Step {step + 1} of {steps.length}</p>

          <div className="card p-4">
            <h5 className="mb-3">{steps[step].question}</h5>
            {steps[step].options.map((option) => (
              <div className="form-check mb-2" key={option}>
                <input
                  className="form-check-input"
                  type="radio"
                  name={`step-${step}`}
                  checked={answers[steps[step].key] === option}
                  onChange={() => handleSelect(option)}
                />
                <label className="form-check-label">{option}</label>
              </div>
            ))}
            <div className="d-flex justify-content-between mt-4">
              <button className="btn btn-outline-secondary" onClick={handleBack}>
                Back
              </button>
              <button
                className="btn btn-dark"
                onClick={handleNext}
                disabled={!answers[steps[step].key]}
              >
                Next
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="progress mb-3">
            <div className="progress-bar bg-dark w-100"></div>
          </div>
          <p className="text-muted">Step 4 of 4</p>
          <div className="card p-4">
            <h5 className="fw-bold mb-3">Your Recommended Pathway</h5>
            <p className="text-muted">
              Based on your answers, we recommend the following learning path:
            </p>
            <h5>{recommendation.title}</h5>
            <p className="text-muted">{recommendation.description}</p>
            <div className="p-3 bg-light rounded border">
              <h6>Your Learning Journey:</h6>
              <ol className="mb-0">
                {recommendation.journey.map((item, i) => (
                  <li key={i}>
                    <strong>{item}</strong>
                    {i === 0 && <p className="text-muted small">Core programming concepts for this domain.</p>}
                  </li>
                ))}
              </ol>
            </div>
            <div className="d-flex gap-3 mt-4">
              <button className="btn btn-dark" onClick={onBack}>Start This Pathway</button>
              <button className="btn btn-outline-dark" onClick={onBack}>
                Explore Other Pathways
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default QuizPathway;
