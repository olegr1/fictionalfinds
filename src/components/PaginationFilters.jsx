import { useSearchParams } from "react-router-dom";

function PaginationFilters({ data }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const itemsPerPage = searchParams.get("itemsPerPage") || 20;
  const currentPage = searchParams.get("currentPage") || 1;

  const pagesCount = Math.ceil(data.total / itemsPerPage);

  return (
    <div className="prod-pagination-filters">
      Per page:
      <select
        value={itemsPerPage}
        onChange={(e) => {
          searchParams.set("itemsPerPage", e.target.value);
          searchParams.set("currentPage", 1);
          setSearchParams(searchParams);
        }}
      >
        <option value="10">10</option>
        <option value="20">20</option>
      </select>
      Page #:
      <select
        value={currentPage}
        onChange={(e) => {
          searchParams.set("currentPage", e.target.value);
          setSearchParams(searchParams);
        }}
      >
        {[...Array(pagesCount)].map((_, i) => (
          <option key={i} value={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>
    </div>
  );
}

export default PaginationFilters;
