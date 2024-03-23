import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUser } from "./authApi";


const initialState = {
  loggedInUser: null,
  status: "idle",
};

export const createUserAsync = createAsyncThunk(
  "users/createUser",
  async (userData) => {
    const response = await createUser(userData);
    return response.data;
  }
);

export const authSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(createUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createUserAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.loggedInUser = action.payload;
      });
  },
});

export const { increment } = authSlice.actions;

export const selectCount = (state) => state.counter.value;
export const selectLoggedInUser = (state) => state.auth.loggedInUser;

export default authSlice.reducer;
