export const initialState = {
  todos: [],
};

const TodoReducers = (state, action) => {
  switch (action.type) {
    case "ADD_TODOS":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
};

export default TodoReducers;
