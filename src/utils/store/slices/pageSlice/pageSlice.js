import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pageLoading: false,
  pageLoaderText: 'Loading...',
  modalLoading: false,
  authLoading: false
};

export const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    updatePageState: (state, action) => {
      return { ...state, ...action.payload };
    }
  }
});

export const { updatePageState } = pageSlice.actions;
export default pageSlice.reducer;