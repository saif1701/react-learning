import "./App.css";
import APIFetch from "./components/APIFetch.jsx";
import Counter from "./components/Counter.jsx";
import SearchFIlter from "./components/SearchFIlter.jsx";
import Todo from "./components/Todo.jsx";

function App() {
  return (
    <>
      <SearchFIlter />
      <Todo />
      <APIFetch />
      <Counter />
      <div className="ticks"></div>
    </>
  );
}

export default App;
