import { useState, useEffect } from "react";

const StopWatch = () => {
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(false);
  useEffect(() => {
    if (!start) return;
    const timer = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1);
    return () => clearInterval(timer);
  }, [start]);

  const stopCount = () => {
    setCount(0);
    setStart(false);
  };

  const mm = Math.floor((count % 1000) / 10);
  const sec = Math.floor((count % 60000) / 1000);
  const mins = Math.floor(count / 60000);

  return (
    <>
      {mins}:{String(sec).padStart(2, 0)}:{String(mm).padStart(2, 0)}
      <button disabled={start === true} onClick={() => setStart(true)}>
        start
      </button>
      <button disabled={start === false} onClick={() => setStart(false)}>
        pause
      </button>
      <button onClick={stopCount}>Stop</button>
    </>
  );
};

export default StopWatch;
