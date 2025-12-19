"use client";
import { ChevronLeft, ChevronRight } from 'lucide-react'
import React from 'react'

export default function Pagination({currentPage, pages,  setCurrentPage , totalPages }) {
    const handlePageClick = (page) => {
        setCurrentPage(page);
      };
    
      const handlePrevious = () => {
        if (currentPage > 1) {
          setCurrentPage(currentPage - 1);
        }
      };
    
      const handleNext = () => {
        if (currentPage < totalPages) {
          setCurrentPage(currentPage + 1);
        }
      };

    return (
    <div className="flex items-center justify-center px-2 sm:px-6 md:px-10 mt-6">
      <div className="flex items-center p-2 sm:p-3 rounded-lg">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className={`w-[18px] h-[18px] sm:w-9 sm:h-9 border-l text-[#4F617D] text-xs font-medium border-t border-b rounded-tl-md rounded-bl-md flex items-center justify-center transition-all duration-200 ${
            currentPage === 1
              ? 'border-[#EAEAEA]  cursor-not-allowed opacity-50'
              : 'border-[#EAEAEA]'
          }`}
        >
          <ChevronLeft size={18}/>
        </button>

        {/* Page Numbers */}
        {pages?.map((page) => (
          <button
            key={page}
            onClick={() => handlePageClick(page)}
            className={`w-8 h-8 sm:w-9 sm:h-9 border-l border-t border-b border flex items-center justify-center text-xs sm:text-sm font-medium transition-all duration-200 ${
              currentPage === page
                ? 'bg-[#FFDBB6] border-[#FFDBB6] text-[#0A0A1F]'
                : 'border-[#EAEAEA] text-[#0A0A1F]'
            }`}
          >
            {page}
          </button>
        ))}

        {/* Next Button */}
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`w-[18px] h-[18px] sm:w-9 sm:h-9 border-r border-t border-b rounded-tr-md rounded-br-md flex items-center justify-center transition-all duration-200 ${
            currentPage === totalPages
              ? 'border-[#EAEAEA] text-[#4F617D] cursor-not-allowed opacity-50'
              : 'border-[#EAEAEA] text-[#4F617D]'
          }`}
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  )
}
