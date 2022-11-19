import { configureStore } from '@reduxjs/toolkit';
import OrderSlice from '../features/Order/OrderSlice';
import SigninSlice from '../features/User/SigninSlice';

export const store = configureStore({
  reducer: {
    userLogin: SigninSlice,
    order: OrderSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
