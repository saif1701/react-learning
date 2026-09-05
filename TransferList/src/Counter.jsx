import { useState, useEffect } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [start, setStart] = useState(false);

  //   const increment = () => {
  //     setHistory((prev) => [...prev, counter]);
  //     setCounter((prev) => prev + 1);
  //   };

  //   const decrement = () => {
  //     setHistory((prev) => [...prev, counter]);
  //     setCounter((prev) => prev - 1);
  //   };

  useEffect(() => {
    if (!start) return;
    const timer = setInterval(() => {
      setCounter((prev) => prev + 1);
    }, 1);

    return () => {
      clearInterval(timer);
    };
  }, [start]);

  const minutes = Math.floor(counter / 60000);
  const seconds = Math.floor((counter % 60000) / 1000);
  const mm = Math.floor((counter % 1000) / 10);

  //   const undo = () => {
  //     if (history.length === 0) return;

  //     const previousValue = history[history.length - 1];
  //     setRedoHistory((prev) => [...prev, counter]);
  //     setCounter(previousValue);
  //     setHistory((prev) => prev.slice(0, -1));
  //   };

  //   const redo = () => {
  //     if (redoHistory.length === 0) return;
  //     const nextValue = redoHistory[redoHistory.length - 1];
  //     setHistory((prev) => [...prev, counter]);
  //     setCounter(nextValue);
  //     setRedoHistory((prev) => prev.slice(0, -1));
  //     // your logic
  //   };

  const reset = () => {
    setCounter(0);
    setStart(false);
  };

  const startCount = () => {
    setStart(true);
  };

  const pauseCounter = () => {
    setStart(false);
  };

  //   const highest = Math.max(counter, ...history);

  const test = Math.floor((1000 % 1000) / 10);

  return (
    <>
      <div>
        {minutes} : {String(seconds).padStart(2, "0")} : :{" "}
        {String(mm).padStart(2, "0")}
      </div>
      {test}
      {/* <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
      <button onClick={undo} disabled={history.length === 0}>
      Undo
      </button>
      <button onClick={redo}>Redo</button> */}
      <button onClick={reset}>Reset</button>
      <button onClick={startCount}>Start</button>
      <button onClick={pauseCounter}>Pause</button>
      {/* <p>Highest Value : {highest}</p> */}
    </>
  );
};

export default Counter;
