import { useToast } from '@chakra-ui/react';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { getDataUser } from '../../../api/AuthContextAPI';
import { useUser } from './useUser';

export const useUserSignin = () => {
  const { updateUser } = useUser();
  const navigate = useNavigate();
  const toast = useToast();
  const { mutate } = useMutation(getDataUser, {
    onSuccess: (data: any) => {
      updateUser({
        email: String(data?.data?.email),
        idToken: String(data?.data?.idToken),
      });
      toast({ title: 'Đăng nhập thành công', status: 'success' });
      navigate('/');
    },
    onError: (error: AxiosError) => {
      toast({ title: String(error.message), status: 'error' });
    },
  });
  return mutate;
};
