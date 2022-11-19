import axios from 'axios';
import { useUser } from '../features/User/hooks/useUser';

interface UseAuth {
  signin: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string) => Promise<void>;
  signout: () => void;
}

export function useAuth(): UseAuth {
  const { clearUser, updateUser } = useUser();
  // const SERVER_ERROR = 'There was an error contacting the server.';
  async function authServerCall(
    email: string,
    password: string
  ): Promise<void> {
    try {
      const { data } = await axios({
        baseURL: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC6lFlEK-KyCgZA-3ZHgcFlpDD5x7bHkUg`,
        method: 'POST',
        data: { email, password },
        headers: { 'Content-Type': 'application/json' },
      });
      if (data?.idToken) {
        // update stored user data
        updateUser(data);
      }
    } catch (errorResponse) {
      console.log(errorResponse);
    }
  }

  async function signin(email: string, password: string): Promise<void> {
    authServerCall(email, password);
  }
  async function signup(email: string, password: string): Promise<void> {
    authServerCall(email, password);
  }

  function signout(): void {
    // clear user from stored user data
    clearUser();
  }

  // Return the user object and auth methods
  return {
    signin,
    signup,
    signout,
  };
}
