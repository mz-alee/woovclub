import React, { useState, useEffect } from "react";
import { poppins } from "../components/Font";

const MobileTicketMap = ({ data, categoryColors }) => {
  console.log(data);
  
  const [currentPage, setCurrentPage] = useState(1);
  const [TicketLimit] = useState(25);

  const [groupedData, setGroupedData] = useState({
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

    setGroupedData({
      top: topTickets,
      bottom: bottomTickets,
      left: leftTickets,
      right: rightTickets,
    });
  }, [data]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  
  const topItems = groupedData.top.slice(indexOfFirstItem, indexOfLastItem);
  const bottomItems = groupedData.bottom.slice(indexOfFirstItem, indexOfLastItem);
  const leftItems = groupedData.left.slice(indexOfFirstItem, indexOfLastItem);
  const rightItems = groupedData.right.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage/4); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="md:hidden w-full ">
      <div className="flex justify-center w-full items-center min-h-screen text-white">
        <div className="relative w-[100%] min-h-[80vh] border flex flex-col  border-gray-500 rounded-2xl p-4 bg-gray-600/20">
          <h1 className="text-xl font-bold mb-4">Court Ticket Map</h1>

          {/* Stadium Layout */}
          <div className="md:relative w-full h-full flex flex-col gap-2">
            {/* Top Section */}
            <h1 className={`${poppins.className} italic font-light text-gray-300 text-sm`}>
              Top Tickets
            </h1>
            <div className="cutrow bg-gray-500/30 w-full flex items-center h-[12vh] py-4 md:h-[15vh] px-4 ">
              <div className="w-full flex justify-center  flex-wrap gap-1">
                {topItems.length > 0 &&
                  topItems.map((seat, index) => (
                    <button
                      key={index}
                      className={`${
                        categoryColors[seat.category]
                      } h-fit rounded-[2vw] px-1 md:px-[0.3vw] lg:px-[0.5vw] font-light text-[2vw] sm:text-[1.5vw] text-black`}
                    >
                      {seat.seatNumber}
                    </button>
                  ))}
              </div>
            </div>
            {/* bottom  tickets  */}
            <h1 className={`${poppins.className} italic font-light text-gray-300 text-sm`}>
              bottom Tickets
            </h1>
            <div className="cutrow bg-[#55299b]/60 w-full flex items-center h-[12vh] py-4 md:h-[15vh] px-4 ">
              <div className="w-full flex justify-center flex-wrap gap-1">
                {bottomItems.length > 0 &&
                  bottomItems.map((seat, index) => (
                    <button
                      key={index}
                      className={`${
                        categoryColors[seat.category]
                      } h-fit rounded-[2vw] px-1 md:px-[0.3vw] lg:px-[0.5vw] font-light text-[2vw] sm:text-[1.5vw] text-black`}
                    >
                      {seat.seatNumber}
                    </button>
                  ))}
              </div>
            </div>
            {/* left section  */}
            <h1 className={`${poppins.className} italic font-light text-gray-300 text-sm`}>
              left Tickets
            </h1>
            <div className="cutrow bg-gray-500/30 w-full flex items-center h-[12vh] py-4 md:h-[15vh] px-4 ">
              <div className="w-full flex justify-center flex-wrap gap-1">
                {leftItems.length > 0 &&
                  leftItems.map((seat, index) => (
                    <button
                      key={index}
                      className={`${
                        categoryColors[seat.category]
                      } h-fit rounded-[2vw] px-1 md:px-[0.3vw] lg:px-[0.5vw] font-light text-[2vw] sm:text-[1.5vw] text-black`}
                    >
                      {seat.seatNumber}
                    </button>
                  ))}
              </div>
            </div>
            {/* right section  */}
            <h1 className={`${poppins.className} italic font-light text-gray-300 text-sm`}>
              right Tickets
            </h1>
            <div className="cutrow bg-[#55299b]/60 w-full flex items-center h-[12vh] py-4 md:h-[15vh] px-4 ">
              <div className="w-full flex justify-center flex-wrap gap-1">
                {rightItems.length > 0 &&
                 rightItems.map((seat, index) => (
                    <button
                      key={index}
                      className={`${
                        categoryColors[seat.category]
                      } h-fit rounded-[2vw] px-1 md:px-[0.3vw] lg:px-[0.5vw] font-light text-[2vw] sm:text-[1.5vw] text-black`}
                    >
                      {seat.seatNumber}
                    </button>
                  ))}
              </div>
            </div>

            {/* Other sections (bottom, left, right) */}
            {/* Render bottom, left, right sections here similarly */}

            {/* Pagination Controls */}
            <div className="flex justify-center mt-4">
              {pageNumbers.map((number) => (
                <button
                  key={number}
                  onClick={() => paginate(number)}
                  className={`${
                    currentPage === number ? "bg-blue-500" : "bg-gray-300"
                  } px-4 py-2 mx-1 rounded-full text-white`}
                >
                  {number}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileTicketMap;
