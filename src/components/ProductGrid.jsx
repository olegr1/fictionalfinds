import ProductTile from "./ProductTile";

function ProductGrid({ products }) {
  return (
    <ul className="prod-grid">
      {products.map((product) => (
        <ProductTile product={product} key={product.id} />
      ))}
    </ul>
  );
}

export default ProductGrid;
