import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk(
  "users/fetchUsers",
  async (rejectWithValue) => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      if (!res.ok) {
        return rejectWithValue(data.messages);
      }
      return data;
    } catch (error) {
      return rejectWithValue("Network Errro", error);
    }
  },
);

const initialState = {
  users: [],
  loading: false,
  error: null,
};

const UserSlice = createSlice({
  name: "Users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = true;
        state.error = action.payload;
      });
  },
});

export default UserSlice.reducer;
