import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo } from "./reducers/todoReducers";

const Todos = () => {
  const todoList = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    dispatch(
      addTodo({
        id: 1,
        title: "New task",
      }),
    );
  };
  return (
    <div>
      <button onClick={handleAddTodo}>AddTodo</button>
      {todoList.map((todo) => (
        <div key={todo.id}>
          {todo.title}
          <button onClick={() => dispatch(deleteTodo(todo.id))}>X</button>
        </div>
      ))}
    </div>
  );
};

export default Todos;
