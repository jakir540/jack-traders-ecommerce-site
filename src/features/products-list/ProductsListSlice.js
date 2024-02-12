import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAllProducts } from "./ProductsListApi";

const initialState = {
  isLoading: false,
  products: [],
  error: null,
};

export const fetchAllProductsAsync = createAsyncThunk(
  "product/fetchAllProducts",
  async () => {
    const response = await fetchAllProducts();
    return response.data;
  }
);

export const ProductSlice = createSlice({
  name: "product",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProductsAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllProductsAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(fetchAllProductsAsync.rejected, (state, action) => {
        state.products = [];
        state.error = action.error.message;
      });
  },
});

export default ProductSlice.reducer;
