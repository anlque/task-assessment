interface PaginationProps {
  className?: string;
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const Pagination = (props: PaginationProps) => {
  const { className, totalPages, currentPage, onPageChange } = props;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const preparedCurrentPage = Number(currentPage);

  const handlePageChange = () => {
    preparedCurrentPage > 1 && onPageChange(preparedCurrentPage - 1);
  };

  const symbols = {
    left: "<",
    right: ">",
  };

  return (
    <div className={`flex items-center ${className}`}>
      <button
        className={`px-3 py-1 border rounded-l ${
          preparedCurrentPage === 1
            ? "cursor-not-allowed opacity-50"
            : "hover:bg-gray-200"
        }`}
        onClick={handlePageChange}
        disabled={preparedCurrentPage === 1}
      >
        {symbols.left}
      </button>
      {pages.map((page) => (
        <button
          key={page}
          className={`px-3 py-1 border-t border-b ${
            page === preparedCurrentPage ? "bg-gray-100" : "hover:bg-gray-200"
          }`}
          onClick={() => onPageChange(page)}
          disabled={page === preparedCurrentPage}
        >
          {page}
        </button>
      ))}
      <button
        className={`px-3 py-1 border rounded-r ${
          preparedCurrentPage === totalPages
            ? "cursor-not-allowed opacity-50"
            : "hover:bg-gray-200"
        }`}
        onClick={() =>
          preparedCurrentPage < totalPages &&
          onPageChange(preparedCurrentPage + 1)
        }
        disabled={preparedCurrentPage === totalPages}
      >
        {symbols.right}
      </button>
    </div>
  );
};
