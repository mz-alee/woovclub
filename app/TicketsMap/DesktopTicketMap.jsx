"use client";
import React, { useState, useEffect } from "react";
import { poppins } from "../components/Font";
import Pagination from "../components/Pegination"; // Assuming you have a pagination component already
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
const DesktopTicketMap = ({ data, categoryColors }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [TicketLimit] = useState(16);
  const [totalpage, setTotalPage] = useState();
  const [TicketsData, setTicketsData] = useState({
    top: [],
    left: [],
    right: [],
    bottom: [],
  });

  const itemsPerPage = TicketLimit;

  useEffect(() => {
    const leftTickets = data.filter((tickets) => tickets.type === "left");
    const rightTickets = data.filter((tickets) => tickets.type === "right");
    const bottomTickets = data.filter((tickets) => tickets.type === "bottom");
    const topTickets = data.filter((tickets) => tickets.type === "top");

    setTicketsData({
      top: topTickets,
      bottom: bottomTickets,
      left: leftTickets,
      right: rightTickets,
    });
  }, [data]);

  const totalItems =
    TicketsData.top.length +
    TicketsData.left.length +
    TicketsData.right.length +
    TicketsData.bottom.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage / 4);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const topItems = TicketsData.top.slice(indexOfFirstItem, indexOfLastItem);
  const bottomItems = TicketsData.bottom.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const leftItems = TicketsData.left.slice(indexOfFirstItem, indexOfLastItem);
  const rightItems = TicketsData.right.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const generatePageNumbers = () => {
    const pages = [];
    const visiblePages = 3;

    if (totalPages <= visiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
      return pages;
    }

    if (currentPage <= 3) {
      for (let i = 1; i <= 3; i++) {
        pages.push(i);
      }
      pages.push("...");
      pages.push(totalPages);
    } else if (currentPage >= totalPages - 2) {
      pages.push(1);
      pages.push("...");
      for (let i = totalPages - 2; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      // pages.push("...");
      for (let i = currentPage - 1; i <= currentPage + 1; i++) {
        pages.push(i);
      }
      pages.push("...");
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className="hidden md:flex justify-center w-full items-center min-h-screen text-white">
      <div className="relative w-[60vw] h-[95vh] border flex flex-col border-gray-500 rounded-2xl p-4 bg-gray-600/20">
        <h1 className="text-xl font-bold mb-4">Court Ticket Map</h1>

        {/* Stadium Layout */}
        <div className="md:relative w-full h-full flex justify-center flex-col">
          {/* Top Section */}
          <div className="flex flex-col items-center gap-1 w-full h-[15vh] md:absolute md:top-0">
            <div className="flex gap-2">
              {topItems &&
                topItems.map((seat, index) => (
                  <button
                    key={index}
                    className={`${
                      categoryColors[seat.category]
                    } h-fit rounded-[2vw]  px-1 md:px-[0.3vw] lg:px-[0.5vw] font-light text-[1.2vw] sm:text-[1.2vw] md:text-[1vw] lg:text-[0.8vw] text-black`}
                  >
                    {seat.seatNumber}
                  </button>
                ))}
            </div>
            <div className="flex gap-2">
              {topItems &&
                topItems.slice(1, 15).map((seat, index) => (
                  <button
                    key={index}
                    className={`${
                      categoryColors[seat.category]
                    } h-fit rounded-[2vw]  px-1 md:px-[0.3vw] lg:px-[0.5vw] font-light text-[1.2vw] sm:text-[1.2vw] md:text-[1vw] lg:text-[0.8vw] text-black`}
                  >
                    {seat.seatNumber}
                  </button>
                ))}
            </div>
            <div className="flex gap-2">
              {topItems &&
                topItems.slice(1, 14).map((seat, index) => (
                  <button
                    key={index}
                    className={`${
                      categoryColors[seat.category]
                    } h-fit rounded-[2vw]  px-1 md:px-[0.3vw] lg:px-[0.5vw] font-light text-[1.2vw] sm:text-[1.2vw] md:text-[1vw] lg:text-[0.8vw] text-black`}
                  >
                    {seat.seatNumber}
                  </button>
                ))}
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex items-center justify-center gap-1 flex-col w-full h-[15vh] md:absolute md:bottom-0">
            {/* row1  */}
            <div className=" h-fit flex gap-2 ">
              {bottomItems &&
                bottomItems.slice(1, 14).map((seat, index) => (
                  <button
                    key={index}
                    className={`${
                      categoryColors[seat.category]
                    } h-fit rounded-[2vw]  px-1 md:px-[0.3vw] lg:px-[0.5vw] font-light text-[1.2vw] sm:text-[1.2vw] md:text-[1vw] lg:text-[0.8vw] text-black`}
                  >
                    {seat.seatNumber}
                  </button>
                ))}
            </div>
            {/* row2  */}
            <div className=" h-fit flex gap-2 ">
              {bottomItems &&
                bottomItems.slice(1, 15).map((seat, index) => (
                  <button
                    key={index}
                    className={`${
                      categoryColors[seat.category]
                    } h-fit rounded-[2vw]  px-1 md:px-[0.3vw] lg:px-[0.5vw] font-light text-[1.2vw] sm:text-[1.2vw] md:text-[1vw] lg:text-[0.8vw] text-black`}
                  >
                    {seat.seatNumber}
                  </button>
                ))}
            </div>
            {/* row 3 */}
            <div className=" h-fit flex gap-2 ">
              {bottomItems &&
                bottomItems.map((seat, index) => (
                  <button
                    key={index}
                    className={`${
                      categoryColors[seat.category]
                    } h-fit rounded-[2vw]  px-1 md:px-[0.3vw] lg:px-[0.5vw] font-light text-[1.2vw] sm:text-[1.2vw] md:text-[1vw] lg:text-[0.8vw] text-black`}
                  >
                    {seat.seatNumber}
                  </button>
                ))}
            </div>
          </div>

          {/* Left Section */}
          <div className="left-section flex gap-[1vw] items-center justify-center  h-full w-[10vw] md:absolute md:left-0">
            <div className=" flex flex-col w-[2vw] gap-2 h-fit">
              {/* row 1 */}
              {leftItems &&
                leftItems.map((seat, index) => (
                  <button
                    key={index}
                    className={`${
                      categoryColors[seat.category]
                    } h-fit w-fit rounded-[2vw]  px-1 md:px-[0.3vw] lg:px-[0.5vw] font-light text-[1.2vw] sm:text-[1.2vw] md:text-[1vw] lg:text-[0.8vw] text-black`}
                  >
                    {seat.seatNumber}
                  </button>
                ))}
            </div>
            {/* row 2 */}
            <div className=" w-[2vw] h-fit flex flex-col gap-2">
              {leftItems &&
                leftItems.slice(1, 15).map((seat, index) => (
                  <button
                    key={index}
                    className={`${
                      categoryColors[seat.category]
                    } h-fit w-fit rounded-[2vw]  px-1 md:px-[0.3vw] lg:px-[0.5vw] font-light text-[1.2vw] sm:text-[1.2vw] md:text-[1vw] lg:text-[0.8vw] text-black`}
                  >
                    {seat.seatNumber}
                  </button>
                ))}
            </div>
            {/* row3 */}
            <div className=" h-fit w-[2vw] flex flex-col gap-2">
              {leftItems &&
                leftItems.slice(1, 14).map((seat, index) => (
                  <button
                    key={index}
                    className={`${
                      categoryColors[seat.category]
                    } h-fit w-fit rounded-[2vw]  px-1 md:px-[0.3vw] lg:px-[0.5vw] font-light text-[1.2vw] sm:text-[1.2vw] md:text-[1vw] lg:text-[0.8vw] text-black`}
                  >
                    {seat.seatNumber}
                  </button>
                ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="left-section flex gap-[1vw] items-center justify-center  flex-row-reverse h-full w-[10vw] md:absolute md:right-0">
            <div className=" flex flex-col w-[2vw] h-fit gap-2">
              {/* row 1 */}
              {rightItems &&
                rightItems.map((seat, index) => (
                  <button
                    key={index}
                    className={`${
                      categoryColors[seat.category]
                    } h-fit w-fit rounded-[2vw]  px-1 md:px-[0.3vw] lg:px-[0.5vw] font-light text-[1.2vw] sm:text-[1.2vw] md:text-[1vw] lg:text-[0.8vw] text-black`}
                  >
                    {seat.seatNumber}
                  </button>
                ))}
            </div>
            {/* row2 */}
            <div className=" w-[2vw] h-fit flex flex-col gap-2">
              {rightItems &&
                rightItems.slice(1, 15).map((seat, index) => (
                  <button
                    key={index}
                    className={`${
                      categoryColors[seat.category]
                    } h-fit w-fit rounded-[2vw]  px-1 md:px-[0.3vw] lg:px-[0.5vw] font-light text-[1.2vw] sm:text-[1.2vw] md:text-[1vw] lg:text-[0.8vw] text-black`}
                  >
                    {seat.seatNumber}
                  </button>
                ))}
            </div>
            {/* row 3 */}
            <div className=" h-fit w-[2vw] flex flex-col gap-2">
              {rightItems &&
                rightItems.slice(1, 14).map((seat, index) => (
                  <button
                    key={index}
                    className={`${
                      categoryColors[seat.category]
                    } h-fit w-fit rounded-[2vw]  px-1 md:px-[0.3vw] lg:px-[0.5vw] font-light text-[1.2vw] sm:text-[1.2vw] md:text-[1vw] lg:text-[0.8vw] text-black`}
                  >
                    {seat.seatNumber}
                  </button>
                ))}
            </div>
          </div>
        </div>
        {/* Pagination Section */}
        <div className="flex justify-center mt-4">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            {" "}
            <SlArrowLeft />{" "}
          </button>

          {generatePageNumbers().map((number, index) => (
            <button
              key={index}
              onClick={() => paginate(number)}
              className={`${
                currentPage === number ? "bg-blue-500" : "bg-gray-600"
              } px-4 py-2 mx-1 rounded-full text-white`}
              disabled={number === "..."}
            >
              {number}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            {" "}
            <SlArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DesktopTicketMap;
