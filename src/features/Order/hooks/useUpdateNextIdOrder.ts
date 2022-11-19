import { useToast } from '@chakra-ui/react';
import {
  UseMutateFunction,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
import { postNewNextId } from '../../../api/OrderApi';
import { queryKeys } from '../../../react-query/constants';

export const useUpdateNextIdOrder = (): UseMutateFunction<
  void,
  unknown,
  number,
  unknown
> => {
  const toast = useToast();
  const queryClient = useQueryClient();
  const { mutate } = useMutation(postNewNextId, {
    onSuccess: () => {
      queryClient.invalidateQueries([queryKeys.nextId]);
      toast({ title: 'Đã cập nhật next id.', status: 'success' });
    },
  });
  return mutate;
};
