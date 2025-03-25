import React from "react";

const TotalTickets = () => {
  return (
    <div className="total-ticket h-[17rem] px-4 w-[50vw] sm:w-[60vw] md:w-[35vw] lg:w-[25vw]">
      <div className=" w-full px-2 pt-2 font-bold capitalize ">
        <h1 className="">total tickets</h1>
        <h1 className=" opacity-45 font-light">total Available tickets</h1>
      </div>
      <div className="ticket-detail w-fullflex flex-col justify-between  items-center ">
        <h1 className="total-tickets text-[10vw] sm:text-[7vw] lg:text-[5vw] font-extrabold text-center ">124</h1>
        <div className='w-full  '>
          <div className="avail-tickets flex justify-between w-full py-2 border-b border-gray-400 ">
            <h1 className='text-green-400 font-light'>Available</h1>
            <h1 className='text-green-400'>24</h1>
          </div>
          <div className='booked-tickets flex justify-between text-red-500'>
            <h1>Booked</h1>
            <h1>100</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalTickets;
