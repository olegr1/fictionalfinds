import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import config from "../config.json";

export function useProductListing(
  itemsPerPage = 20,
  currentPage = 1,
  category
) {
  const skip = (currentPage - 1) * itemsPerPage;

  const { data, error, isLoading } = useQuery({
    queryKey: ["products", itemsPerPage, currentPage, category],
    queryFn: () =>
      axios
        .get(
          `${config.API_BASE_URL}/products/category/${category}?limit=${itemsPerPage}&skip=${skip}`
        )
        .then((res) => res.data),
  });

  return { data, error, isLoading };
}
