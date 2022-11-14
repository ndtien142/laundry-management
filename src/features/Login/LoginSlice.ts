import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LoginState {
  email: string;
  idToken: string | null;
  isAuthentication: boolean;
}
interface UserLogin {
  email: string;
  idToken: string | null;
}

const initialState: LoginState = {
  email: '',
  idToken: null,
  isAuthentication: false,
};

const LoginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setInfoUserLogin: (state, action: PayloadAction<UserLogin>) => {
      state.email = action.payload.email;
      state.idToken = action.payload.idToken;
      state.isAuthentication = true;
    },
    resetInfoUserLogin: (state) => {
      state.email = '';
      state.idToken = null;
      state.isAuthentication = false;
    },
  },
});

export const { setInfoUserLogin, resetInfoUserLogin } = LoginSlice.actions;
export default LoginSlice.reducer;
