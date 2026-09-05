import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./CounterSlice";
import ThemeSwitcher from "./ThemeSwitcher";
import TodoSlice from "./todoSlice";
import UserSlice from "./UserSlice";
import loggerMiddleware from "./loggerMiddleware";

export const store = configureStore({
  reducer: {
    counter: CounterReducer,
    theme: ThemeSwitcher,
    todo: TodoSlice,
    users: UserSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware),
});
