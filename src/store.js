// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import realEstateReducer from './features/realeEstateSlice';

export const store = configureStore({
  reducer: {
    realEstate: realEstateReducer,
  },
});
