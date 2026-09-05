import React, { useMemo, useState, useCallback } from "react";

export const Child = React.memo(({ onClick }) => {
  console.log("Child rendered");

  return <button onClick={onClick}>Child</button>;
});

const Counter = () => {
  const [numbers, setNumbers] = useState([1, 2, 4, 5]);
  const [count, setCount] = useState(0);

  const total = useMemo(() => {
    console.log("Calculating...");

    return numbers.reduce((sum, num) => sum + num, 0);
  }, [numbers]);

  const calling = () => {
    console.log("calling");
  };

  return (
    <div>
      <h1>Total: {total}</h1>

      <button onClick={() => setCount(count + 1)}>Count: {count}</button>

      <button onClick={() => setNumbers([...numbers, 6])}>Add Number</button>

      <Child onClick={calling} />
    </div>
  );
};

export default Counter;
