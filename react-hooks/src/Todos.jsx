import { useState } from "react";

function Todo() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Learn React Testing Library" },
  ]);

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <span>{todo.title}</span>

          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default Todo;
