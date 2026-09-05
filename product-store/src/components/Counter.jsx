import { useReducer } from "react";
import CounterReducer, {
  initialState,
} from "../../../customHooks/src/reducers/CounterReducers";

const Counter = () => {
  const [state, dispatch] = useReducer(CounterReducer, initialState);

  const handleAdd = () =>
    dispatch({
      type: "INCREMENT",
      payload: state.counter,
    });

  const handleMinux = () =>
    dispatch({
      type: "DECREMENT",
      payload: state.counter,
    });

  const handleReset = () =>
    dispatch({
      type: "RESET",
      payload: state.counter,
    });

  return (
    <>
      <h1>{state.counter}</h1>
      <button onClick={handleAdd}>+</button>
      <button onClick={handleMinux}>-</button>
      <button onClick={handleReset}>RESET</button>
    </>
  );
};

export default Counter;
