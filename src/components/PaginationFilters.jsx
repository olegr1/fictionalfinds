function PaginationFilters({
  itemsPerPage,
  setItemsPerPage,
  currentPage,
  setCurrentPage,
  totalItemCount,
}) {
  const pagesCount = Math.ceil(totalItemCount / itemsPerPage);

  return (
    <div className="prod-pagination-filters">
      Per page:
      <select
        value={itemsPerPage} // ..
        onChange={(e) => {
          setItemsPerPage(e.target.value);
        }}
      >
        <option value="10">10</option>
        <option value="20">20</option>
      </select>
      Page #:
      <select
        value={currentPage} // ..
        onChange={(e) => {
          setCurrentPage(e.target.value);
        }}
      >
        {" "}
        {[...Array(pagesCount)].map((_, i) => (
          <option key={i} value={i}>
            {i + 1}
          </option>
        ))}
      </select>
    </div>
  );
}

export default PaginationFilters;
