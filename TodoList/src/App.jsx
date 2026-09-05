import { useState, useEffect } from "react";
import TodoItems from "../TodoItems";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    console.log(todos);
  }, [todos]);
  const addTodos = (e) => {
    e.preventDefault();
    if (title.trim() === "") return;
    setTodos((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        title,
      },
    ]);

    setTitle("");
    console.log(todos);
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <TodoItems />
      <section id="center">
        <form onSubmit={addTodos}>
          <input
            type="text"
            name="title"
            id=""
            value={title}
            onChange={handleChange}
          />
          <button>Add</button>
        </form>
      </section>

      <div className="ticks">
        {todos.map((todo) => (
          <p key={todo.id}>
            {todo.title} <span onClick={() => deleteTodo(todo.id)}>x</span>
          </p>
        ))}
      </div>
    </>
  );
}

export default App;
