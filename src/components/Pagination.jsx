const Pagination = ({ pagination, changePage }) => {
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
          <a
            href="/"
            aria-label="Previous"
            className={`page-link${pagination.has_pre ? "" : "disabled"}`}
            onClick={(e) => {
              e.preventDefault();
              changePage(pagination.current_page - 1);
            }}
          >
            <span
              aria-hidden="true"
              className={pagination.has_pre ? "" : "d-none"}
            >
              &laquo;
            </span>
          </a>
        </li>
        {[...new Array(pagination.total_pages)].map((_, i) => (
          <li className="page-item" key={`${i}_page`}>
            <a
              className={`page-link ${
                i + 1 === pagination.current_page && "active"
              }`}
              href="/"
              onClick={(e) => {
                e.preventDefault();
                changePage(i + 1);
              }}
            >
              {i + 1}
            </a>
          </li>
        ))}
        <li className="page-item">
          <a
            className={`page-link${pagination.has_next ? "" : "disabled"}`}
            onClick={(e) => {
              e.preventDefault();
              changePage(pagination.current_page + 1);
            }}
            href="/"
            aria-label="Next"
          >
            <span
              aria-hidden="true"
              className={pagination.has_next ? "" : "d-none"}
            >
              &raquo;
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
