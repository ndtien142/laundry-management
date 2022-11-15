import { configureStore } from '@reduxjs/toolkit';
import LoginSlice from '../features/Login/LoginSlice';
import OrderSlice from '../features/Order/OrderSlice';

export const store = configureStore({
  reducer: {
    userLogin: LoginSlice,
    order: OrderSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
