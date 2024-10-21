import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

export default function Pagination({
  setPage,
  currentPage,
  totalPages,
}: {
  setPage: (page: number) => void;
  currentPage: number;
  totalPages: number;
}) {
  return (
    <div className="mt-8 flex justify-center items-center space-x-4">
      <button
        onClick={() => setPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-gray-700 text-white rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-600 transition-colors duration-300"
      >
        <FaChevronLeft className="w-5 h-5" />
      </button>

      <div className="flex space-x-2">
        {Array.from({ length: 10 }, (_, i) => {
          const pageNumber = currentPage + i - 5;
          const isValidPage = pageNumber >= 1 && pageNumber <= totalPages;
          return (
            isValidPage && (
              <button
                key={pageNumber}
                onClick={() => setPage(pageNumber)}
                className={`px-4 py-2 rounded-md transition-colors duration-300 ${
                  currentPage === pageNumber
                    ? "bg-white text-gray-900 font-bold"
                    : "bg-gray-700 text-white hover:bg-gray-600"
                }`}
              >
                {pageNumber}
              </button>
            )
          );
        })}
      </div>

      <button
        onClick={() => setPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 bg-gray-700 text-white rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-600 transition-colors duration-300"
      >
        <FaChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}
