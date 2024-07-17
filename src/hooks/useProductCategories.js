import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import config from "../config.json";

export function useProductCategories() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: () =>
      axios
        .get(`${config.API_BASE_URL}/products/categories`)
        .then((res) => res.data),
  });

  return { data, error, isLoading };
}
