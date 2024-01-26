import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "./ProductsListApi";

const initialState = {
  value: 0,
  status: "idle",
};

export const incrementAsync = createAsyncThunk(
  "counter/fetchProducts",
  async (amount) => {
    const response = await fetchProducts(amount);
    return response.data;
  }
);

export const ProductsListSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.value += action.payload;
      });
  },
});

export const { increment } = ProductsListSlice.actions;

export const selectCount = (state) => state.counter.value;

export default ProductsListSlice.reducer;
