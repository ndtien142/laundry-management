import {
  UseMutateFunction,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
import { postNewOrder } from '../../../api/OrderApi';
import { useCustomToast } from '../../../components/ui/FeedBack';
import { queryKeys } from '../../../react-query/constants';
import { Order } from '../../../types/OrderInterface';
import { useUpdateNextIdOrder } from './useUpdateNextIdOrder';

export const useAddNewOrder = (): UseMutateFunction<
  void,
  unknown,
  Order,
  unknown
> => {
  const queryClient = useQueryClient();
  const toast = useCustomToast();
  const updateNextId = useUpdateNextIdOrder();
  const { mutate } = useMutation((order: Order) => postNewOrder(order), {
    onMutate: async (newOrder: Order) => {
      // Cancel any outgoing refetches
      // (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries([queryKeys.order]);

      // Snapshot the previous value
      const previousOrder = queryClient.getQueryData<Order>([queryKeys.order]);

      // Optimistically update to the new value
      queryClient.setQueriesData([queryKeys.order], {
        ...previousOrder,
        [newOrder.id]: {
          name: newOrder.name,
          dayOfReceive: newOrder.dayOfReceive,
          dayOfAppointment: newOrder.dayOfAppointment,
          status: newOrder.status,
          note: newOrder.note,
          idReceive: newOrder.idReceive,
        },
      });

      // Return a context object with the snapshotted value
      return { previousOrder };
    },
    onError: (error, newData, previousOrderContext) => {
      // roll back cache to saved value
      if (previousOrderContext?.previousOrder) {
        queryClient.setQueriesData([queryKeys.order], {
          ...previousOrderContext.previousOrder,
        });
        toast({
          title: 'Add failed; restoring previous value',
          status: 'error',
        });
      }
    },
    onSuccess: (data, newData) => {
      updateNextId(newData.id + 1);
      toast({ title: 'Thêm đơn hàng thành công', status: 'success' });
    },
    onSettled: () => {
      queryClient.invalidateQueries([queryKeys.order]);
    },
  });
  return mutate;
};
