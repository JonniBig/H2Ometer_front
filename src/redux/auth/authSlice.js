import { createAsyncThunk, createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  requestLogin,
  requestLogout,
  requestPasswordReset,
  requestRefreshUser,
  requestRegister,
  requestUpdateAvatar,
  requestUpdateUserSettings,
  requestVerifyEmail,
  setToken,
} from 'services/api';

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (formData, thunkAPI) => {
    try {
      const response = await requestLogin(formData);

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const registerThunk = createAsyncThunk(
  'auth/register',
  async (formData, thunkAPI) => {
    try {
      const response = await requestRegister(formData);

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const verifyEmailThunk = createAsyncThunk(
  'auth/verifyEmail',
  async (token, thunkAPI) => {
    try {
      const response = await requestVerifyEmail(token);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      await requestLogout();

      return;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const forgotPasswordThunk = createAsyncThunk(
  'auth/forgotPassword',
  async (email, thunkAPI) => {
    try {
      const response = await requestPasswordReset(email);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshThunk = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;

    try {
      setToken(token);
      const authData = await requestRefreshUser();

      return authData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
  {
    condition: (_, thunkAPI) => {
      const state = thunkAPI.getState();
      const token = state.auth.token;

      if (!token) return false;
      return true;
    },
  }
);

export const uploadAvatarThunk = createAsyncThunk(
  'auth/uploadAvatarThunk',
  async (formData, thunkAPI) => {
    try {
      const response = await requestUpdateAvatar(formData);

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUserSettingsThunk = createAsyncThunk(
  'auth/updateUserSettingsThunk',
  async (formData, thunkAPI) => {
    try {
      const response = await requestUpdateUserSettings(formData);
      console.log('response: ', response);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const INITIAL_STATE = {
  isLoading: false,
  token: null,
  user: {
    email: null,
    name: null,
    avatar: null,
  },
  authenticated: false,
  verificationMessage: '',
  isEmailVerified: false,
  forgotPasswordStatus: 'idle',
  forgotPasswordError: null,
};

const authSlice = createSlice({
  name: 'auth',

  initialState: INITIAL_STATE,
  extraReducers: builder =>
    builder
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.authenticated = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })

      .addCase(verifyEmailThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.verificationMessage =
          'Your email has been successfully verified.';
        state.isEmailVerified = true;
      })

      .addCase(loginThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.authenticated = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })

      .addCase(refreshThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.authenticated = true;
        state.user = action.payload;
      })

      .addCase(uploadAvatarThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user.avatar = action.payload.avatarURL;
      })

      .addCase(updateUserSettingsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.data;
      })

      .addCase(logoutThunk.fulfilled, () => {
        return INITIAL_STATE;
      })

      .addCase(forgotPasswordThunk.pending, state => {
        state.forgotPasswordStatus = 'loading';
        state.forgotPasswordError = null;
      })
      .addCase(forgotPasswordThunk.fulfilled, state => {
        state.forgotPasswordStatus = 'succeeded';
        state.forgotPasswordError = null;
      })
      .addCase(forgotPasswordThunk.rejected, (state, action) => {
        state.forgotPasswordStatus = 'failed';
        state.forgotPasswordError = action.payload;
      })

      .addMatcher(
        isAnyOf(
          registerThunk.pending,
          loginThunk.pending,
          refreshThunk.pending,
          logoutThunk.pending,
          verifyEmailThunk.pending,
          uploadAvatarThunk.pending,
          updateUserSettingsThunk.pending
        ),
        state => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          registerThunk.rejected,
          loginThunk.rejected,
          logoutThunk.rejected,
          verifyEmailThunk.rejected,
          uploadAvatarThunk.rejected,
          updateUserSettingsThunk.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      ),
});

export const authReducer = authSlice.reducer;
