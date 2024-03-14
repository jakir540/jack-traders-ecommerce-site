import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAllProducts, fetchAllProductsByFilter,fetchBrandsProducts, fetchCategoriesProducts, fetchSelectedProducts } from "./ProductsListApi";

const initialState = {
  isLoading: false,
  products: [],
  brand: [],
  category: [],
  error: null,
  selectedProduct: null
};


//for all products 
export const fetchAllProductsAsync = createAsyncThunk(
  "product/fetchAllProducts",
  async () => {
    const response = await fetchAllProducts();
    return response.data;
  }
);
//for selected products 
export const selectedProductsAsync = createAsyncThunk(
  "product/fetchSelectedProducts",
  async (id) => {
    const response = await fetchSelectedProducts(id);
    console.log(response.data)
    return response.data;
  }
);

//for all brands

export const fetchBrandsProductsAsync = createAsyncThunk(
  "product/fetchBrandsProducts",
  async () => {
    const response = await fetchBrandsProducts();
    return response.data;
  }
);
//for all category

export const fetchCategoriesProductsAsync = createAsyncThunk(
  "product/fetchCategoriesProducts",
  async () => {
    const response = await fetchCategoriesProducts();
    return response.data;
  }
);


export const fetchAllProductsByFilterAsync = createAsyncThunk(
  "product/fetchAllProductsByFilter",
  async (filter) => {
    const response = await fetchAllProductsByFilter(filter);
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
      })
      .addCase(fetchAllProductsByFilterAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllProductsByFilterAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(fetchAllProductsByFilterAsync.rejected, (state, action) => {
        state.products = [];
        state.error = action.error.message;
      })
      .addCase(fetchBrandsProductsAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.brand = action.payload;
      })
      .addCase(fetchBrandsProductsAsync.rejected, (state, action) => {
        state.products = [];
        state.error = action.error.message;
      })
      .addCase(fetchCategoriesProductsAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.category = action.payload;
      })
      .addCase(fetchCategoriesProductsAsync.rejected, (state, action) => {
        state.products = [];
        state.error = action.error.message;
      })
      .addCase(selectedProductsAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.selectedProduct = action.payload;
      })
      .addCase(selectedProductsAsync.rejected, (state, action) => {
        state.products = [];
        state.error = action.error.message;
      });
  },
});

export const selectAllProducts = (state) => state.product.products;
export const selectBrands =  (state)=> state.product.brand;
export const selectCategory =  (state)=> state.product.category;
export const selectedProductById = (state) => state.product.selectedProduct;


export default ProductSlice.reducer;
