import { useState } from "react";

import quizCompleted from "../assets/quiz-complete.png";
import QUESTIONS from "../questions.js";

export default function Quiz() {
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  const activeQuestionIndex = selectedAnswers.length;

  const quizIsCompleted = activeQuestionIndex === QUESTIONS.length;

  function handleSelectAnswer(selectedAnswer) {
    setSelectedAnswers((prevAnswers) => [...prevAnswers, selectedAnswer]);
  }

  if (quizIsCompleted) {
    return (
      <div id="summary">
        <img src={quizCompleted} alt="Trophy icon" />
        <h2>Quiz completed</h2>
      </div>
    );
  }

  const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);

  return (
    <div id="quiz">
      <div id="question">
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswers.map((answer) => {
            return (
              <li className="answer" key={answer}>
                <button onClick={() => handleSelectAnswer(answer)}>
                  {answer}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
