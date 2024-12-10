import { useEffect, useState } from "react";

export default function QuestionTimer({ timeout, mode, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    console.log("Setting Timeout");
    const timer = setTimeout(onTimeout, timeout);

    return () => {
      clearTimeout(timer);
    };
  }, [timeout, onTimeout]);

  useEffect(() => {
    console.log("Setting Interval");
    const interval = setInterval(() => {
      setRemainingTime((prevRemaininTime) => prevRemaininTime - 100);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <progress
      id="question-time"
      className={mode}
      max={timeout}
      value={remainingTime}
    />
  );
}
