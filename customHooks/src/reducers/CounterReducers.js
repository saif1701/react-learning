export const initialState = { counter: 0 };

const CounterReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + 1 };
    case "DECREMENT":
      return {
        ...state,
        counter: state.counter > 0 ? state.counter - 1 : 0,
      };
    case "RESET":
      return { ...state, counter: 0 };
    default:
      return state;
  }
};

export default CounterReducer;
