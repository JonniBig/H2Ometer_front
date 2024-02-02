import { requestAddWaterIntake, requestWaterData } from 'services/api';

import { createSlice, createAsyncThunk, isAnyOf } from '@reduxjs/toolkit';
import { format } from 'date-fns';

export const getWaterDataThunk = createAsyncThunk(
  'calendar/getWaterData',
  async ({ day, month }, thunkAPI) => {
    try {
      const response = await requestWaterData(day, month);

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getWaterProgressThunk = createAsyncThunk(
  'calendar/getWaterProgressThunk',
  async (_, thunkAPI) => {
    try {
      const response = await requestWaterData(
        format(new Date(), 'dd'),
        format(new Date(), 'LL')
      );

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addWaterIntakeThunk = createAsyncThunk(
  'calendar/addWaterIntakeThunk',
  async (formData, thunkAPI) => {
    try {
      const response = await requestAddWaterIntake(formData);
      thunkAPI.dispatch(getWaterProgressThunk());

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  data: null,
  progressData: null,
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
      .addCase(addWaterIntakeThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log(action.payload);

        const doesRecordExist = state.data.drunkedWater.some(
          record => record.day === action.payload.day
        );

        if (doesRecordExist) {
          state.data.drunkedWater = state.data.drunkedWater.map(record =>
            record.day === action.payload.day
              ? { ...record, ...action.payload }
              : record
          );
        } else {
          state.data.drunkedWater.push(action.payload);
        }

        // state.data = action.payload;
      })
      .addCase(getWaterProgressThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.progressData = action.payload;
      })

      .addMatcher(
        isAnyOf(getWaterDataThunk.pending, addWaterIntakeThunk.pending),
        state => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(getWaterDataThunk.rejected, addWaterIntakeThunk.rejected),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      ),
});

export const calendarReducer = calendarSlice.reducer;
