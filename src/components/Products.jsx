import { useProducts } from "../hooks/useProducts";
import PaginationFilters from "./PaginationFilters";
import ProductGrid from "./ProductGrid";
import ProductFilters from "./ProductFilters";
import { useSearchParams } from "react-router-dom";

function Products() {
  const [searchParams, setSearchParams] = useSearchParams();

  const itemsPerPage = searchParams.get("itemsPerPage") || 20;
  const currentPage = searchParams.get("currentPage") || 1;

  const { data, error, isLoading } = useProducts(itemsPerPage, currentPage);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="prod">
      <div className="container">
        <div className="prod-content">
          <PaginationFilters data={data} />

          <div className="prod-panes">
            <ProductFilters />
            <ProductGrid products={data.products} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
