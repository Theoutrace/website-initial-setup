import { configureStore } from '@reduxjs/toolkit';
import pageReducer from './slices/pageSlice/pageSlice';
import authReducer from './slices/authSlice';

export const store = configureStore({
  reducer: {
    page: pageReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});