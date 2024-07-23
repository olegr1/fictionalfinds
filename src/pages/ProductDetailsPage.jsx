import { Link, useParams } from "react-router-dom";
import { useProductDetails } from "../hooks/useProductDetails";
import Loading from "../components/Loading";
import Error from "../components/Error";

function ProductDetailsPage() {
  const { id } = useParams();

  const { data, error, isLoading } = useProductDetails(id);

  if (isLoading) {
    return <Loading text={"Loading product details..."} />;
  }

  if (error) {
    return <Error text={error.message} />;
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
