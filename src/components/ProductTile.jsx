import Icon from "./Icon";

function ProductTile({ product }) {
  const roundedRating = Math.ceil(product.rating * 2) / 2;

  return (
    <li className="prod-tile">
      <a href="/test" className="prod-tile-link">
        <div className="prod-img-wrap">
          <img
            className="prod-img"
            src={product.images[0]}
            alt={product.title}
          />
        </div>
        <h3 className="prod-title">{product.title}</h3>
        <div className="prod-price">{product.price}</div>

        <div className="prod-rating">
          {[...Array(Math.floor(roundedRating))].map((star, index) => (
            <Icon key={index} name={"star"} />
          ))}
          {!Number.isInteger(roundedRating) && <Icon name={"star-half"} />}
          <span>{roundedRating}</span>
        </div>
      </a>

      <button className="prod-tile-cta" type="button">
        Add to cart
      </button>
    </li>
  );
}

export default ProductTile;
