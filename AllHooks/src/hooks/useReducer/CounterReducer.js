export const initialState = {
  count: 0,
};

const CounterReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };

    case "DECREMENT":
      return { ...state, count: state.count === 0 ? 0 : state.count - 1 };

    default:
      break;
  }
};

export default CounterReducer;
