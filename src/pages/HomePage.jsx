import { Link } from "react-router-dom";
import { useProductCategories } from "../hooks/useProductCategories";

function HomePage() {
  const { data, error, isLoading } = useProductCategories();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  console.log(data);

  return (
    <div className="">
      <div className="container">
        <div className="">Shop by category:</div>

        <ul>
          {data.map((category) => (
            <li key={category.slug}>
              <Link to={"/products/category/" + category.slug}>
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HomePage;
