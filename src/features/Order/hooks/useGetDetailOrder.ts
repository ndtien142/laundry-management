import { useQuery } from '@tanstack/react-query';
import { getDetailOrder } from '../../../api/OrderApi';
import { queryKeys } from '../../../react-query/constants';

export const useGetDetailOrder = (orderId: string | undefined) => {
  const detailOrder = useQuery([queryKeys.order, orderId], getDetailOrder, {
    staleTime: 1000 * 60,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
  return detailOrder;
};
