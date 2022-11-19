import { useQuery } from '@tanstack/react-query';
import { getAllOrder } from '../../../api/OrderApi';
import { queryKeys } from '../../../react-query/constants';

export const useGetAllOrder = () => {
  const order = useQuery([queryKeys.order], getAllOrder, {
    staleTime: 1000 * 60,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
  return order;
};
