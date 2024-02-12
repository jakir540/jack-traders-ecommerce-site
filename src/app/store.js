import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/products-list/ProductsListSlice.js';

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});

