import React, { useState, useEffect } from "react";

const CountUp = ({ start, end, duration, startNow }) => {
  const [count, setCount] = useState(start);
  const [isRunning, setIsRunning] = useState(false);
  const step = (end - start) / (duration * 100); // Assuming duration is in seconds

  useEffect(() => {
    console.log(step);
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        if (count < end) {
          setCount(count + step);
        } else {
          setCount(end);
          setIsRunning(false);
          clearInterval(timer);
        }
      }, 1000 / 60); // 60fps
    }
    return () => clearInterval(timer);
  }, [count, end, isRunning, start, step]);

  const handleStart = () => {
    setIsRunning(true);
  };

  useEffect(() => {
    console.log(startNow, "Any Change");
    if (startNow) {
      setCount(0);
      handleStart();
    }
  }, [startNow]);

  return (
    <div>
      <span>{Math.round(count)}+</span>
    </div>
  );
};

export default CountUp;
