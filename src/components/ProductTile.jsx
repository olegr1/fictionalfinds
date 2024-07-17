import { Link } from "react-router-dom";
import Icon from "./Icon";

function ProductTile({ product }) {
  const roundedRating = Math.ceil(product.rating * 2) / 2;

  return (
    <li className="product-tile">
      <Link
        to={"../products/" + product.id.toString()}
        className="product-tile-link"
      >
        <div className="product-tile-img-wrap">
          <img
            className="product-tile-img"
            src={product.images[0]}
            alt={product.title}
          />
        </div>
        <h3 className="product-tile-title">{product.title}</h3>
        <div className="product-tile-price">{product.price}</div>

        <div className="product-tile-rating">
          {[...Array(Math.floor(roundedRating))].map((star, index) => (
            <Icon key={index} name={"star"} />
          ))}
          {!Number.isInteger(roundedRating) && <Icon name={"star-half"} />}
          <span>{roundedRating}</span>
        </div>
      </Link>

      <button className="product-tile-cta" type="button">
        Add to cart
      </button>
    </li>
  );
}

export default ProductTile;
