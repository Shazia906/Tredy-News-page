import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [];
  for (let i = 1; i <= Math.ceil(totalPages); i++) {
    pages.push(i);
  }

  return (
    <div className=" flex flex-wrap justify-center gap-2 py-8 pab ">
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-5 py-3 text-2xl text-white border rounded-full ${currentPage === page ? "bg-sky-800 text-white" : "bg-orange-500 text-black"}`}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
