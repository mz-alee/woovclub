"use client"
import React, { useState } from 'react';

const Pagination = ({ totalPages }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const paginate = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const getPageNumbersToShow = () => {
    const range = 3;
    let startPage = Math.max(currentPage - Math.floor(range / 2), 1);
    let endPage = Math.min(currentPage + Math.floor(range / 2), totalPages);

    if (endPage - startPage < range - 1) {
      startPage = Math.max(endPage - range + 1, 1);
    }

    return pageNumbers.slice(startPage - 1, endPage);
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="flex justify-center mt-4">
      <button onClick={handlePrevClick} className="px-4 py-2 mx-1 rounded-full text-white bg-gray-300">
        Prev
      </button>
      {totalPages.map((number) => (
        <button
          key={number}
          onClick={() => paginate(number)}
          className={`${
            currentPage === number ? 'bg-blue-500' : 'bg-gray-300'
          } px-4 py-2 mx-1 rounded-full text-white`}
        >
          {number}
        </button>
      ))}
      <button onClick={handleNextClick} className="px-4 py-2 mx-1 rounded-full text-white bg-gray-300">
        Next
      </button>
    </div>
  );
};

export default Pagination;
