import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CounterProvider } from "./hooks/useContext/CounterContext";
import TodoProvider from "./Todos/todoContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CounterProvider>
      <TodoProvider>
        <App />
      </TodoProvider>
    </CounterProvider>
  </StrictMode>,
);
