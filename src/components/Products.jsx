import { useState } from "react";
import { useProducts } from "../hooks/useProducts";
import PaginationFilters from "./PaginationFilters";
import ProductGrid from "./ProductGrid";
import ProductFilters from "./ProductFilters";

function Products() {
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(0);

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
          <PaginationFilters
            totalItemCount={data.total}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            setItemsPerPage={setItemsPerPage}
            setCurrentPage={setCurrentPage}
          />

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
