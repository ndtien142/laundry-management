import { configureStore } from '@reduxjs/toolkit';
import LoginSlice from '../features/Login/LoginSlice';

export const store = configureStore({
  reducer: {
    userLogin: LoginSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
