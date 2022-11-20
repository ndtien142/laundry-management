import axios from 'axios';
import { UserResponseRestAPI } from '../features/User/UserConstant';

const baseUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=
    AIzaSyC6lFlEK-KyCgZA-3ZHgcFlpDD5x7bHkUg`;

interface userData {
  email: string;
  password: string;
}

export const getDataUser = (userData: userData) =>
  axios({
    method: 'POST',
    url: baseUrl,
    data: {
      email: userData.email,
      password: userData.password,
      returnSecureToken: true,
    },
  });
