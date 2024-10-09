import { useState } from "react";

export default function Quiz() {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  return <p>Currently active Question</p>;
}
