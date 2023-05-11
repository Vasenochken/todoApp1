import { useEffect, useState } from "react";

const Timer = ({ initialTime }) => {
  const [time, setTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRunning && time > 0) {
      intervalId = setInterval(() => {
        setTime(time - 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  let minutes = Math.floor(time / 60);
  let seconds = time % 60;

  return (
    <>
      <button
        className="icon icon-play"
        onClick={startTimer}
        disabled={isRunning}
      ></button>
      <button
        className="icon icon-pause"
        onClick={pauseTimer}
        disabled={!isRunning}
      ></button>
      {` ${minutes}:${seconds}`}
    </>
  );
};

export default Timer;
