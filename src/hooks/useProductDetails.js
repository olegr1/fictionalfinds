import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import config from "../config.json";

export function useProductDetails(productId) {
  const { data, error, isLoading } = useQuery({
    queryKey: ["product", productId],
    queryFn: () =>
      axios
        .get(`${config.API_BASE_URL}/products/${productId}`)
        .then((res) => res.data),
  });

  return { data, error, isLoading };
}
