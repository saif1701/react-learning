import { useState, useEffect } from "react";
import "./App.css";
// import Counter from "./Counter";
import Counter from "./hooks/useReducer/Counter";
import UserList from "./UserList";
import Todo from "./Todos/Todo";

function App() {
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(false);
  const [watch, setWatch] = useState(0);

  useEffect(() => {
    if (!start) return;
    const timer = setInterval(() => {
      setWatch((prev) => prev + 1);
    }, 1);
    return () => {
      clearInterval(timer);
    };
  }, [start]);

  const Decrement = () => {
    setCount((prev) => (prev === 0 ? 0 : prev - 1));
    setStart(false);
  };

  const Increment = () => {
    setCount((prev) => (prev === 10 ? prev : prev + 1));
    setStart(true);
  };

  const reset = () => {
    setWatch(0);
    setStart(false);
  };

  const mm = Math.floor((watch % 1000) / 10);
  const sec = Math.floor((watch % 60000) / 1000);
  const minutes = Math.floor(watch / 60000);

  return (
    <>
      <section id="center">
        <Todo />
        <UserList />
        <Counter />
        <p>
          {count} : {minutes}min : {String(sec).padStart(2, 0)}sec :{" "}
          {String(mm).padStart(2, 0)} mm
        </p>
        <button type="button" className="counter" onClick={Increment}>
          Add
        </button>
        <button type="button" className="counter" onClick={Decrement}>
          Decrement
        </button>
        <button onClick={reset}>Reset</button>
      </section>
    </>
  );
}

export default App;
