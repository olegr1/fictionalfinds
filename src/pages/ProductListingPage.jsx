import { useParams, useSearchParams } from "react-router-dom";
import { useProductListing } from "../hooks/useProductListing";
import PaginationFilters from "../components/PaginationFilters";
import ProductFilters from "../components/ProductFilters";
import ProductTile from "../components/ProductTile";
import config from "../config.json";
import Loading from "../components/Loading";
import Error from "../components/Error";

function ProductListingPage() {
  const { category } = useParams();

  const [searchParams, setSearchParams] = useSearchParams();

  const itemsPerPage =
    searchParams.get("itemsPerPage") || config.PRODUCTS_PER_PAGE;
  const currentPage = searchParams.get("currentPage") || 1;

  const { data, error, isLoading } = useProductListing(
    itemsPerPage,
    currentPage,
    category
  );

  if (isLoading) {
    return <Loading text={"Loading products..."} />;
  }

  if (error) {
    return <Error text={error.message} />;
  }

  return (
    <div className="product-listing">
      <div className="container">
        <div className="product-listing-content">
          <PaginationFilters data={data} category={category} />

          <div className="product-panes">
            {/* <ProductFilters /> */}
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
