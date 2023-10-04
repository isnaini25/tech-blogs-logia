'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';

// const queryClient = new QueryClient();
const queryClientOptions = {
  defaultOptions: {
    queries: {
      refetchOnWindowFoucs: false,
    },
  },
};
export default function ReactQueryProvider({ children }) {
  const [queryClient] = useState(() => new QueryClient(queryClientOptions));
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
