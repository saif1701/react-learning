import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo } from "./store/todoSlice";

const Todos = () => {
  const todoList = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const addNewTodo = () => {
    dispatch(
      addTodo({
        id: 1,
        text: "Learn Redux",
      }),
    );
  };

  return (
    <>
      <button onClick={addNewTodo}>add todo</button>
      {todoList.map((todo) => (
        <div key={todo.text}>
          {todo.text}
          <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
        </div>
      ))}
    </>
  );
};

export default Todos;
