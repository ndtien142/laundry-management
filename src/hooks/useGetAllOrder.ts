import { useQuery } from '@tanstack/react-query';
import { getAllOrder } from '../api/OrderApi';

export const useGetAllOrder = () => {
  const order = useQuery(['order'], getAllOrder, {
    staleTime: 1000 * 60,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
  return order;
};
