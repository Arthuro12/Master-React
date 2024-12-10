import { useCallback, useState } from "react";

import Questions from "./Questions.jsx";
import Summary from "./Summary.jsx";

import QUESTIONS from "../questions.js";

export default function Quiz() {
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  const activeQuestionIndex = selectedAnswers.length;
  const quizIsCompleted = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    setSelectedAnswers((prevAnswers) => [...prevAnswers, selectedAnswer]);
  },
  []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (quizIsCompleted) {
    return <Summary userAnswers={selectedAnswers} />;
  }

  return (
    <Questions
      key={activeQuestionIndex}
      index={activeQuestionIndex}
      onSelectAnswer={handleSelectAnswer}
      onSkipAnswer={handleSkipAnswer}
    />
  );
}
