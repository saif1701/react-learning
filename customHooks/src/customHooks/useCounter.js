import { useState } from "react";

const useCounter = (count) => {
  const [counter, setCounter] = useState(count);

  const increment = () => {
    setCounter((prev) => prev + 1);
  };

  const decrement = () => {
    setCounter((prev) => prev - 1);
  };

  return { counter, decrement, increment };
};

export default useCounter;
