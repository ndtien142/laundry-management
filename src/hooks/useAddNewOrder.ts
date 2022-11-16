import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postNewOrder } from '../api/OrderApi';

export const useAddNewOrder = () => {
  const queryClient = useQueryClient();
  return useMutation(['addNewOrder'], postNewOrder, {
    onSuccess: (data) => {
      console.log(data);
    },
  });
};
