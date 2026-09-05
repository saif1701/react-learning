import { createContext, useState } from "react";

const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const Inc = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <CounterContext.Provider value={{ count, Inc }}>
      {children}
    </CounterContext.Provider>
  );
};

export default CounterContext;
