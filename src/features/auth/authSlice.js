import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { checkUser, createUser } from "./authApi";

const initialState = {
  loggedInUser: null,
  status: "idle",
  error: null,
};

export const createUserAsync = createAsyncThunk(
  "users/createUser",
  async (userData) => {
    const response = await createUser(userData);
    console.log("authslice" + response.data);
    return response.data;
  }
);
export const checkLogInfoAsync = createAsyncThunk(
  "users/checkUser",
  async (logInfo) => {
    const response = await checkUser(logInfo);
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
      })
      .addCase(checkLogInfoAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(checkLogInfoAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.loggedInUser = action.payload;
      })
      .addCase(checkLogInfoAsync.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.error;
      });
  },
});

export const { increment } = authSlice.actions;

export const selectLoggedInUser = (state) => state.auth.loggedInUser;
export const selectError = (state) => state?.auth.error;

export default authSlice.reducer;
