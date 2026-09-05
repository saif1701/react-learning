import { useContext } from "react";
import CounterContext from "./hooks/useContext/CounterContext";

const Counter = () => {
  const { count, Inc } = useContext(CounterContext);
  return <button onClick={Inc}>{count}</button>;
};

export default Counter;
