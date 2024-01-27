import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userData: null,
  token: null,
  isLoading: false,
  error: null,
  isSignedIn: true,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export const userReducer = userSlice.reducer;
