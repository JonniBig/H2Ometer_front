import { requestWaterData } from 'services/api';

import { createSlice, createAsyncThunk, isAnyOf } from '@reduxjs/toolkit';

const initialState = {
  data: null,
  isLoading: false,
  error: null,
};

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(getWaterDataThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })

      .addMatcher(isAnyOf(getWaterDataThunk.pending), state => {
        state.isLoading = true;
        state.error = null;
      })
      .addMatcher(isAnyOf(getWaterDataThunk.rejected), (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const getWaterDataThunk = createAsyncThunk(
  'calendar/getWaterData',
  async (formData, thunkAPI) => {
    try {
      const response = await requestWaterData(formData);

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const calendarReducer = calendarSlice.reducer;
