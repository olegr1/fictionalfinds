import { useParams, useSearchParams } from "react-router-dom";
import { useProductListing } from "../hooks/useProductListing";
import PaginationFilters from "../components/PaginationFilters";
import ProductFilters from "../components/ProductFilters";
import ProductTile from "../components/ProductTile";

function ProductListingPage() {
  const { category } = useParams();

  const [searchParams, setSearchParams] = useSearchParams();

  const itemsPerPage = searchParams.get("itemsPerPage") || 20;
  const currentPage = searchParams.get("currentPage") || 1;

  const { data, error, isLoading } = useProductListing(
    itemsPerPage,
    currentPage,
    category
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="product-listing">
      <div className="container">
        <div className="product-listing-content">
          <PaginationFilters data={data} />

          <div className="product-panes">
            <ProductFilters />
            <ul className="product-grid">
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

export default ProductListingPage;
