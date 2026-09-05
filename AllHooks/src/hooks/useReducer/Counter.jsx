import { useReducer } from "react";
import CounterReducer, { initialState } from "./CounterReducer";
import "../../App.css";

const Counter = () => {
  const [state, dispatch] = useReducer(CounterReducer, initialState);

  const addCount = () => {
    dispatch({
      type: "INCREMENT",
      payload: state.count,
    });
  };

  const dec = () => {
    dispatch({
      type: "DECREMENT",
      payload: state.count,
    });
  };

  return (
    <>
      <div id="center">
        {state.count}
        <button onClick={addCount}>Add</button>
        <button onClick={dec}>Minus</button>
      </div>
    </>
  );
};

export default Counter;
