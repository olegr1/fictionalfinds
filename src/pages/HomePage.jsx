import { Link } from "react-router-dom";
import { useProductCategories } from "../hooks/useProductCategories";
import config from "../config.json";
import Loading from "../components/Loading";
import Icon from "../components/Icon";
import Error from "../components/Error";

function HomePage() {
  const { data, error, isLoading } = useProductCategories();

  if (isLoading) {
    return <Loading text={"Loading product categories..."} />;
  }

  if (error) {
    return <Error text={error.message} />;
  }

  const filteredCategories = data.filter((category) =>
    config.PRODUCT_CATEGORIES.includes(category.slug)
  );

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
                <Link
                  to={`/products/category/${category.slug}?itemsPerPage=${config.PRODUCTS_PER_PAGE}&currentPage=1`}
                >
                  <div className="category-img-wrap">
                    <Icon name={"logo-mark"} />
                  </div>
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
