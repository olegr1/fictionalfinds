import { useState } from "react";
import { useProducts } from "./useProducts";

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

  const pagesCount = Math.ceil(data.total / itemsPerPage);

  return (
    <>
      Per page:
      <select
        value={itemsPerPage} // ..
        onChange={(e) => {
          setItemsPerPage(e.target.value);
        }}
      >
        <option value="10">10</option>
        <option value="20">20</option>
      </select>
      Page #:
      <select
        value={currentPage} // ..
        onChange={(e) => {
          setCurrentPage(e.target.value);
        }}
      >
        {[...Array(pagesCount)].map((_, i) => (
          <option key={i} value={i}>
            {i + 1}
          </option>
        ))}
      </select>
      <ul>
        {data.products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </>
  );
}

export default Products;
