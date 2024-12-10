import { useState } from "react";

import QuestionTimer from "./QuestionTimer.jsx";
import Answers from "./Answers.jsx";

import QUESTIONS from "../questions.js";

export default function Questions({ index, onSelectAnswer, onSkipAnswer }) {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });

  let timer = 10000;

  if (answer.selectedAnswer) {
    timer = 1000;
  }

  if (answer.isCorrect !== null) {
    timer = 2000;
  }

  function handleSelectAnswer(answer) {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null,
    });

    const firstTimer = setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: QUESTIONS[index].answers[0] === answer,
      });

      const secondTimer = setTimeout(() => {
        onSelectAnswer(answer);
      }, 2000);

      return () => {
        clearTimeout(secondTimer);
      };
    }, 1000);

    return () => {
      clearTimeout(firstTimer);
    };
  }

  let answerState = "";

  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAnswer) {
    answerState = "answered";
  }

  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer
          key={timer}
          timeout={timer}
          mode={answerState}
          onTimeout={answer.selectedAnswer === "" ? onSkipAnswer : null}
        />
        <h2>{QUESTIONS[index].text}</h2>
        <Answers
          answers={QUESTIONS[index].answers}
          selectedAnswer={answer.selectedAnswer}
          answerState={answerState}
          onSelect={handleSelectAnswer}
        />
      </div>
    </div>
  );
}
