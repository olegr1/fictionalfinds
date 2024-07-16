import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Products from "../components/Products";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 600 * 1000,
    },
  },
});

function ProductsPage() {
  return (
    <QueryClientProvider client={queryClient}>
      <Products />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default ProductsPage;
