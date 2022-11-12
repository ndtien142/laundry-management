import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LoginState {
  email: string;
  password: string;
}

const initialState: LoginState = {
  email: '',
  password: '',
};

const LoginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setEmailChange: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPasswordChange: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
});

export const { setEmailChange, setPasswordChange } = LoginSlice.actions;
export default LoginSlice.reducer;
