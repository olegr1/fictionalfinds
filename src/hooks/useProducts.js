import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export function useProducts(itemsPerPage = 20, currentPage = 0) {
  const skip = currentPage * itemsPerPage;

  const { data, error, isLoading } = useQuery({
    queryKey: ["products", itemsPerPage, currentPage],
    queryFn: () =>
      axios
        .get(
          `https://dummyjson.com/products?limit=${itemsPerPage}&skip=${skip}`
        )
        .then((res) => res.data),
  });

  console.log(data);

  return { data, error, isLoading };
}
