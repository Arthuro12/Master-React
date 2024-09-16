import { useRef, useState } from "react";

import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const resultModal = useRef(null);

  const timer = useRef(null);
  const [remainingTime, setRemainingTime] = useState(targetTime * 1000);
  const timerIsActive = remainingTime > 0 && remainingTime < targetTime * 1000;
  // const [timerStarted, setTimerStarted] = useState(false);
  // const [timerExpired, setTimerExpired] = useState(false);

  function handleStart() {
    // setTimerStarted(true);
    timer.current = setInterval(() => {
      // setTimerExpired(true);
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 10);
    }, 10);
  }

  if (remainingTime <= 0) {
    clearInterval(timer.current);
    // setRemainingTime(targetTime * 1000);
    resultModal.current.open();
  }

  function handleReset() {
    setRemainingTime(targetTime * 1000);
  }

  function handleStop() {
    resultModal.current.open();
    clearInterval(timer.current);
  }

  return (
    <>
      {/* {timerExpired && (
        <ResultModal ref={resultModal} result="lost" targetTime={targetTime} />
      )} */}
      <ResultModal
        ref={resultModal}
        result="lost"
        targetTime={targetTime}
        remainingTime={remainingTime}
        onReset={handleReset}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challeng-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button
            type="button"
            onClick={timerIsActive ? handleStop : handleStart}
          >
            {timerIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Timer is running..." : "Time inactive"}
        </p>
      </section>
    </>
  );
}
