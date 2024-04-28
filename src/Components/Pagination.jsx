/* eslint-disable react/prop-types */
import React from "react";

const Pagination = ({
  result,
  previousPage,
  currentPage,
  filteredJobs,
  itemsPerPage,
  nextPage,
}) => {
  return (
    <>
      {result.length > 0 ? (
        <div className="flex justify-center items-center space-x-8">
          <button
            onClick={previousPage}
            className="border-2 border-red bg-red/10 text-red hover:bg-red hover:text-white py-1 px-2 rounded disabled:bg-gray-200 disabled:border-none disabled:text-gray-600 disabled:cursor-not-allowed"
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="mx-2">
            Page {currentPage} of{"  "}
            {Math.ceil(filteredJobs.length / itemsPerPage)}
          </span>
          <button
            onClick={nextPage}
            disabled={
              currentPage === Math.ceil(filteredJobs.length / itemsPerPage)
            }
            className="border-2 border-red bg-red/10 text-red hover:bg-red hover:text-white py-1 px-2 rounded disabled:bg-gray-200 disabled:border-none disabled:text-gray-600 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Pagination;
