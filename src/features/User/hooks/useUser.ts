import { useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { queryKeys } from '../../../react-query/constants';
import { useAppDispatch } from '../../../redux/hooks';
import { setInfoUserSignin } from '../SigninSlice';
import { NewUser, User, UserResponseRestAPI } from '../UserConstant';
import { clearStoredUser, getStoredUser, setStoredUser } from './userStorage';

interface UseUser {
  user: User | null;
  updateUser: (user: UserResponseRestAPI) => void;
  clearUser: () => void;
}

async function getAllDataUser(): Promise<NewUser[] | null> {
  const { data } = await axios({
    baseURL:
      'https://laundry-54ff8-default-rtdb.asia-southeast1.firebasedatabase.app/user.json',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return data;
}

export function useUser(): UseUser {
  const [user, setUser] = useState<User | null>(getStoredUser());
  const queryClient = useQueryClient();
  const dispatch = useAppDispatch();
  // Call useQuery to update user data from server
  const { data: allUser, status } = useQuery(
    [queryKeys.detailUser],
    getAllDataUser
  );
  useEffect(() => {
    if (status === 'success') {
      allUser?.forEach((userA) => {
        if (userA.email === user?.email) {
          dispatch(
            setInfoUserSignin({
              email: userA.email,
              idToken: userA.token,
              authority: userA.authority,
              userId: userA.id,
            })
          );
        }
      });
    }
  }, [allUser, dispatch, status, user?.email]);
  // meant to be called from useAuth
  function updateUser(newUser: UserResponseRestAPI): void {
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
    queryClient.removeQueries([queryKeys.detailUser]);
  }

  return { user, updateUser, clearUser };
}
