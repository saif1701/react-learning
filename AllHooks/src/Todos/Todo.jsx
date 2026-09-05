import { useContext, useEffect, useState } from "react";
import { TodoContext } from "./todoContext";
const Todo = () => {
  const [todoTitle, setTodoTitle] = useState("");
  const { state, dispatch } = useContext(TodoContext);

  const handleChange = (e) => {
    setTodoTitle(e.target.value);
  };

  useEffect(() => {
    console.log(state);
  }, [state]);

  const addTodos = (e) => {
    e.preventDefault();
    if (!todoTitle.trim()) return;
    const todo = {
      id: crypto.randomUUID(),
      title: todoTitle,
    };
    dispatch({
      type: "ADD_TODOS",
      payload: todo,
    });
    setTodoTitle("");
  };

  const deleteTodo = (id) => {
    dispatch({
      type: "DELETE_TODO",
      payload: id,
    });
    setTodoTitle("");
  };

  return (
    <>
      <div>
        <form onSubmit={addTodos}>
          <input
            type="text"
            name=""
            id=""
            value={todoTitle}
            onChange={handleChange}
          />
          <button>Add</button>
        </form>

        {state.todos.length > 0
          ? state.todos.map((item) => (
              <p key={item.id}>
                {item.title} <span onClick={() => deleteTodo(item.id)}>x</span>
              </p>
            ))
          : "NO TODOS ADDED"}
      </div>
    </>
  );
};

export default Todo;
