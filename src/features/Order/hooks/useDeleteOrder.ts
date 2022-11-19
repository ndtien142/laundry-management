import { useToast } from '@chakra-ui/react';
import {
  UseMutateFunction,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
import { deleteOrder } from '../../../api/OrderApi';
import { queryKeys } from '../../../react-query/constants';

export const useDeleteOrder = (): UseMutateFunction<
  void,
  unknown,
  number,
  unknown
> => {
  const toast = useToast();
  const queryClient = useQueryClient();
  const { mutate } = useMutation(deleteOrder, {
    onSuccess: () => {
      queryClient.invalidateQueries([queryKeys.order]);
      toast({ title: 'Bạn đã xoá thành công', status: 'warning' });
    },
  });
  return mutate;
};
