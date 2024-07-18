import { Link } from "react-router-dom";
import { useProductCategories } from "../hooks/useProductCategories";
import config from "../config.json";

function HomePage() {
  const { data, error, isLoading } = useProductCategories();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const filteredCategories = data.filter((category) =>
    config.PRODUCT_CATEGORIES.includes(category.slug)
  );

  console.log(filteredCategories);

  return (
    <div className="container">
      <div className="main-content">
        <h1 className="heading-main">
          Wecome to <span className="no-wrap">Fictional Finds!</span>
        </h1>
        <h2 className="heading-large">Shop our offers by category:</h2>
        <ul className="product-categories">
          {filteredCategories.map((category) => {
            return (
              <li key={category.slug} className="product-category">
                <Link to={"/products/category/" + category.slug}>
                  <div className="category-name">{category.name}</div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default HomePage;
