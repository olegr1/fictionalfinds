import { useState } from "react";
import { useProducts } from "../hooks/useProducts";
import PaginationFilters from "./PaginationFilters";
import ProductTile from "./ProductTile";

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
            <div className="prod-filters">Filters</div>
            <ul className="prod-grid">
              {data.products.map((product) => (
                <ProductTile product={product} key={product.id} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
