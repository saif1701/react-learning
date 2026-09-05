import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo } from "./slice/todoSlice";
import { useState } from "react";

const TodoItems = () => {
  const [title, setTitle] = useState("");
  const todoList = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addTodo({
        id: crypto.randomUUID(),
        title: title,
      }),
    );
  };

  return (
    <>
      <section id="form">
        <form onSubmit={handleSubmit}>
          <input type="text" name="" id="" onChange={(e) => handleChange(e)} />
          <button>Add New Task</button>
        </form>
        <div>
          {todoList.map((todo) => (
            <div key={todo.id}>
              <span>
                {todo.title}{" "}
                <span onClick={() => dispatch(deleteTodo(todo.id))}>x</span>
              </span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default TodoItems;
