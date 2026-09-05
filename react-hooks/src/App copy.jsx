import { useEffect, useRef, useState } from "react";
import "./App.css";
import ThemeSwitcher from "./components/ThemeSwticher";

const CountDiv = ({ count }) => {
  return (
    <>
      <h1>{count}</h1>
    </>
  );
};

const InputFields = ({ inputVal, onChange, ref }) => {
  return (
    <>
      <input type="text" value={inputVal} ref={ref} onChange={onChange} />
      <p>{inputVal}</p>
    </>
  );
};

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const [show, setShow] = useState(false);
  const inputRf = useRef(null);

  useEffect(() => {
    console.log("component render when button hide show is clicked");
    inputRf.current.focus();
    return () => {
      if (count === 10) {
        console.log("count is 10");
        setCount(0);
      }
    };
  }, [count]);

  return (
    <>
      <div className="container">
        <h1>Hello React</h1>
        <ThemeSwitcher />
        <CountDiv count={count} />
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <p></p>
        <InputFields
          inputVal={input}
          onChange={(e) => setInput(e.target.value)}
          ref={inputRf}
        />
        {show && <p>Lorem fwegggeeeeeeeeeeerweeeeeeeee</p>}
        <button onClick={() => setShow(!show)}>{show ? "hide" : "show"}</button>
      </div>
    </>
  );
}

export default App;
