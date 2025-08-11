import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchDataAndProceedWithToolkit } from '../../../functions/client-api-helper';
import { METHOD_TYPES } from '@/utils/data/constants';
import { AUTH_API_URLS } from './api';
import { initialState } from './initialState';


export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateUserState: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.user = null;
        state.token = null;
        state.error = action.payload;
      });
  },
});

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (data = {}, thunkAPI) => {
    return await fetchDataAndProceedWithToolkit({
      url: AUTH_API_URLS.LOGIN,
      method: METHOD_TYPES.POST,
      data,
      authLoader: true,
    }, thunkAPI);
  }
);

export const { updateUserState } = authSlice.actions;
export default authSlice.reducer;