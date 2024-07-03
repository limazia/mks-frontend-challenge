import { useQuery } from "@tanstack/react-query";

import { api } from "../lib/axios";
import { GetProductsResponse } from "../interfaces/Product";

export const useProduct = () => {
  async function getProducts() {
    const { data } = await api.get<GetProductsResponse>(
      "/products?page=1&rows=10&sortBy=id&orderBy=DESC"
    );

    return data;
  }

  const { data: result, isLoading: isLoadingProducts } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
    refetchOnWindowFocus: false,
  });

  return {
    result,
    isLoadingProducts,
  };
};
