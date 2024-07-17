import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export function useProductDetails(productId) {
  const { data, error, isLoading } = useQuery({
    queryKey: ["product", productId],
    queryFn: () =>
      axios
        .get(`https://dummyjson.com/products/${productId}`)
        .then((res) => res.data),
  });

  console.log(data);

  return { data, error, isLoading };
}
