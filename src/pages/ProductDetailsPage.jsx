import { Link, useParams } from "react-router-dom";
import { useProductDetails } from "../hooks/useProductDetails";

function ProductDetailsPage() {
  const { id } = useParams();

  const { data, error, isLoading } = useProductDetails(id);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="product-details">
      <div className="container">
        <div className="product-details-content">
          <div className="product-details-img-wrap">
            <Link to={`/products/category/${data.category}`}>{"<< Back"}</Link>
            <img
              className="product-details-img"
              src={data.images[0]}
              alt={data.title}
            />
          </div>
          <div className="product-details-title">{data.title}</div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
