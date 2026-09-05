import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "../slice/todoSlice";

const store = configureStore({
  reducer: {
    todo: TodoSlice,
  },
});

export default store;
