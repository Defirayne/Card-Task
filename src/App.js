import React, { useState } from "react";

function App() {
  const questions = [
    {
      question: "What is React?",
      options: ["Library", "Database", "Browser", "Operating System"],
      correctAnswer: "Library",
    },
    {
      question: "Which hook is used for state?",
      options: ["useEffect", "useState", "useRef", "useMemo"],
      correctAnswer: "useState",
    },
    {
      question: "What does JSX stand for?",
      options: [
        "JavaScript XML",
        "Java Syntax Extension",
        "Java XML",
        "JSON XML",
      ],
      correctAnswer: "JavaScript XML",
    },
    {
      question: "Who developed React?",
      options: ["Google", "Meta", "Microsoft", "Apple"],
      correctAnswer: "Meta",
    },
    {
      question: "Who are my supervisors?",
      options: ["Blessing and John", "Victor and Jane", "Iyanu and Joseph", "Glory and Joshua"],
      correctAnswer: "Iyanu and Joseph",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (selectedOption) => {
    if (
      selectedOption ===
      questions[currentQuestion].correctAnswer
    ) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;   

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };


  return (
    <div>
      <h1>Quiz App</h1>

      {showResult ? (
        <div>
          <h2>Quiz Completed!</h2>
          <h3>
            Your Score: {score} / {questions.length}
          </h3>
        </div>
      ) : (
        <div>
          <h2>
            Question {currentQuestion + 1}
          </h2>

          <p>
            {questions[currentQuestion].question}
          </p>

          {questions[currentQuestion].options.map(
            (option, index) => (
              <button
                key={index}
                onClick={() =>
                  handleAnswer(option)
                }
              >
                {option}
              </button>
            )
          )}
        </div>
      )}
    </div>
  );
}


export default App;