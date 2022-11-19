import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Signin {
  email: string;
  idToken: string | null;
  isAuthentication: boolean;
}
interface UserLogin {
  email: string;
  idToken: string | null;
}

const initialState: Signin = {
  email: '',
  idToken: null,
  isAuthentication: false,
};

const SignInSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setInfoUserSignin: (state, action: PayloadAction<UserLogin>) => {
      state.email = action.payload.email;
      state.idToken = action.payload.idToken;
      state.isAuthentication = true;
    },
    resetInfoUserSignin: (state) => {
      state.email = '';
      state.idToken = null;
      state.isAuthentication = false;
    },
  },
});

export const { setInfoUserSignin, resetInfoUserSignin } = SignInSlice.actions;
export default SignInSlice.reducer;
