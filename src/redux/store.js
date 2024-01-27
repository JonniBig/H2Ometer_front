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
import { userReducer } from './user/userSlice';

const modalExampleConfig = {
  key: 'modalExample',
  storage,
  whitelist: ['isOpenModal'],
};

const userConfig = {
  key: 'user',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(userConfig, userReducer),
    modal: persistReducer(modalExampleConfig, modalReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
