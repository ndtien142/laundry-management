import {
  UseMutateFunction,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
import { postNewOrder } from '../../../api/OrderApi';
import { useCustomToast } from '../../../components/ui/FeedBack';
import { queryKeys } from '../../../react-query/constants';
import { Order } from '../../../types/OrderInterface';

export const useAddNewOrder = (): UseMutateFunction<
  void,
  unknown,
  Order,
  unknown
> => {
  const queryClient = useQueryClient();
  const toast = useCustomToast();
  const { mutate } = useMutation((order: Order) => postNewOrder(order), {
    onSuccess: (data) => {
      queryClient.invalidateQueries([queryKeys.order]);
      toast({ title: 'Thêm đơn hàng thành công', status: 'success' });
    },
  });
  return mutate;
};
