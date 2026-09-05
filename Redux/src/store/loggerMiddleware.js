const loggerMiddleware = (store) => (next) => (action) => {
  if (action.type === "Counter/increment") {
    console.log("Counter was incremented!");
  }
  next(action);
};

export default loggerMiddleware;
