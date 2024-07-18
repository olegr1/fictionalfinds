import { Link, useSearchParams } from "react-router-dom";
import config from "../config.json";

function PaginationFilters({ data, category }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const itemsPerPage =
    searchParams.get("itemsPerPage") || config.PRODUCTS_PER_PAGE;
  const currentPage = searchParams.get("currentPage") || 1;

  const pagesCount = Math.ceil(data.total / itemsPerPage);

  //const paginationLink =

  return (
    <div className="product-pagination-filters">
      <div className="product-pagination-items">
        <label htmlFor="itemsPerPageSelect">Per page:</label>
        <select
          id="itemsPerPageSelect"
          value={itemsPerPage}
          onChange={(e) => {
            searchParams.set("itemsPerPage", e.target.value);
            searchParams.set("currentPage", 1);
            setSearchParams(searchParams);
          }}
        >
          {config.PRODUCTS_PER_PAGE_OPTIONS.map((option) => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="product-pagination-pages">
        <nav aria-label="pagination" className="product-pagination">
          <ul>
            {[...Array(pagesCount)].map((_, i) => {
              console.log(i + 1, Number);

              return (
                <li key={i}>
                  <Link
                    className={
                      Number(currentPage) === i + 1
                        ? "product-pagination-link active"
                        : "product-pagination-link"
                    }
                    to={`/products/category/${category}?itemsPerPage=${itemsPerPage}&currentPage=${i + 1}`}
                  >
                    {i + 1}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default PaginationFilters;
