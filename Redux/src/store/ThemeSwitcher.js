import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggleTheme: true,
};

const ThemeSwitcher = createSlice({
  name: "ThemeSwitcher",
  initialState,
  reducers: {
    handleToggle: (state) => {
      state.toggleTheme = !state.toggleTheme;
    },
  },
});

export const { handleToggle } = ThemeSwitcher.actions;
export default ThemeSwitcher.reducer;
