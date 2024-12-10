import quizCompleted from "../assets/quiz-complete.png";

import QUESTIONS from "../questions.js";

export default function Summary({ userAnswers }) {
  // const skippedAnswers = userAnswers.fil;
  return (
    <div id="summary">
      <img src={quizCompleted} alt="Trophy icon" />
      <h2>Quiz completed</h2>
      <div id="summary-stats">
        <p>
          <span className="number">10%</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">10%</span>
          <span className="text">answered correctly</span>
        </p>
        <p>
          <span className="number">10%</span>
          <span className="text">answered incorrectly</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((currAnswer, index) => {
          let answerClass = "user-answer";

          if (answer === null) {
            answerClass += " skipped";
          } else if (answer === QUESTIONS[index].answers[0]) {
            answerClass += " correct";
          } else {
            answerClass += " wrong";
          }

          return (
            <li key={currAnswer}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className={answerClass}>{(currAnswer ??= "Skipped")}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
