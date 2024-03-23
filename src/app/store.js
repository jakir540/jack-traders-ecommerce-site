import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/products-list/ProductsListSlice.js";
import authReducer from "../features/auth/authSlice";

export const store = configureStore({
  reducer: {
    product: productReducer,
    auth: authReducer,
  },
});
