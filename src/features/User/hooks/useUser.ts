import { useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';
import { queryKeys } from '../../../react-query/constants';
import { User } from '../../../types/User';
import { clearStoredUser, getStoredUser, setStoredUser } from './userStorage';

interface UseUser {
  user: User | null;
  updateUser: (user: User) => void;
  clearUser: () => void;
}

async function getUser(user: User | null): Promise<User | null> {
  if (!user?.token) return null;
  const { data } = await axios({
    baseURL: `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyC6lFlEK-KyCgZA-3ZHgcFlpDD5x7bHkUg`,
    method: 'POST',
    data: { idToken: user?.token },
    headers: { 'Content-Type': 'application/json' },
  });
  console.log('From use user: ', data);
  return data.users;
}

export function useUser(): UseUser {
  const [user, setUser] = useState<User | null>(getStoredUser());
  const queryClient = useQueryClient();
  // Call useQuery to update user data from server
  useQuery([queryKeys.user], () => getUser(user), {
    // enabled: !!user,
    onSuccess: (data: any) => {
      console.log('Front use query', data);
      setUser({ email: data[0]?.email, token: '' });
    },
  });
  // meant to be called from useAuth
  function updateUser(newUser: any): void {
    setUser({ email: newUser.email, token: newUser.idToken });
    setStoredUser({ email: newUser.email, token: newUser.idToken });
    queryClient.setQueriesData([queryKeys.user], newUser);
  }

  // meant to be called from useAuth
  function clearUser() {
    // update state
    setUser(null);

    // remove from local storage
    clearStoredUser();

    // reset user to null in query client
    queryClient.removeQueries([queryKeys.user]);
    queryClient.removeQueries([queryKeys.order]);
  }

  return { user, updateUser, clearUser };
}
