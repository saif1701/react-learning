import "./App.css";
import Counter from "./Counter";
import Theme from "./Theme";
import Todos from "./Todos";
import FetchUsers from "./fetchUsers";

function App() {
  return (
    <>
      <div>
        <FetchUsers />
        <Todos />
        <Theme />
        <Counter />
      </div>
    </>
  );
}

export default App;
