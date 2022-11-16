import { useQuery } from '@tanstack/react-query';
import { getDetailOrder } from '../api/OrderApi';

export const useGetDetailOrder = (orderId: string | undefined) => {
  const detailOrder = useQuery(['order', orderId], getDetailOrder, {
    staleTime: 1000 * 60,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
  return detailOrder;
};
