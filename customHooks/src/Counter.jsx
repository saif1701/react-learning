import useCounter from "./customHooks/useCounter";

const Counter = () => {
  const { counter, increment, decrement } = useCounter(0);

  const btnStyles = {
    backgroundColor: "#333",
    outline: 0,
    border: 0,
    padding: "8px 12px",
    color: "#fff",
  };

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={increment} style={btnStyles}>
        {" "}
        ADD{" "}
      </button>
      <button onClick={decrement}> ADD </button>
    </>
  );
};

export default Counter;
