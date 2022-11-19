import { QueryClient } from '@tanstack/react-query';

export function queryErrorHandler(error: unknown): void {
  console.log(error);
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      onError: queryErrorHandler,
      staleTime: 600000, // 10 minutes
      cacheTime: 900000, // 15 minutes
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    },
  },
});
