import { Link, useParams } from "react-router-dom";
import { useProductDetails } from "../hooks/useProductDetails";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Icon from "../components/Icon";

function ProductDetailsPage() {
  const { id } = useParams();
  const { data, error, isLoading } = useProductDetails(id);

  if (isLoading) {
    return <Loading text={"Loading product details..."} />;
  }

  if (error) {
    return <Error text={error.message} />;
  }

  const roundedRating = Math.ceil(data.rating * 2) / 2;

  return (
    <div className="product-details">
      <div className="container">
        <div className="product-details-content">
          <Link
            className="product-details-back-btn"
            to={`/products/category/${data.category}`}
          >
            {"<< Back"}
          </Link>
          <div className="product-details-wrap">
            <div className="product-details-img-wrap">
              <img
                className="product-details-img"
                src={data.images[0]}
                alt={data.title}
              />
            </div>
            <div className="product-details-text-wrap">
              <h1 className="product-details-title">{data.title}</h1>
              <div className="product-details-rating">
                {[...Array(Math.floor(roundedRating))].map((star, index) => (
                  <Icon key={index} name={"star"} />
                ))}
                {!Number.isInteger(roundedRating) && (
                  <Icon name={"star-half"} />
                )}
              </div>

              <div className="product-details-price">${data.price}</div>
              <div className="product-details-description">
                {data.description}
              </div>

              <button className="product-details-cta" type="button">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
