import { configureStore } from '@reduxjs/toolkit';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { modalReducer } from './modal/modalSlice';

import { authReducer } from './auth/authSlice';
import { calendarReducer } from './calendar/calendarSlice';
import themeReducer from './redusers/themeReducer';

// import { userReducer } from './user/userSlice';

const modalExampleConfig = {
  key: 'modalExample',
  storage,
  whitelist: ['isOpenModal'],
};

const authConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    modal: persistReducer(modalExampleConfig, modalReducer),
    auth: persistReducer(authConfig, authReducer),
    calendar: calendarReducer,
    theme: themeReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
