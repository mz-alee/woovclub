import React from "react";

const TotalTickets = () => {
  return (
    <div className="rounded-[1vw] bg-white/10 px-[1.5vw] h-[17rem] w-[70vw] sm:w-[60vw]  md:w-[35vw] md:h-[25vh] lg:w-[25vw] lg:h-[35vh] ">
      <div className=" text-sm md:text-[1.2vw] w-full px-[0.5vw] pt-[1vh] font-bold capitalize ">
        <h1 className="">total tickets</h1>
        <h1 className=" opacity-45 font-light">total Available tickets</h1>
      </div>
      <div className="ticket-detail  w-full flex flex-col  h-[20vh]  py-4 justify-between items-center ">
        <h1 className="total-tickets text-[10vw] sm:text-[7vw] lg:text-[3.5vw] font-extrabold text-center ">124</h1>
        <div className='w-full'>
          <div className="avail-tickets text-sm md:text-[1.2vw] flex justify-between w-full py-[1vh] border-b border-gray-400 ">
            <h1 className='text-green-400 font-light'>Available</h1>
            <h1 className='text-green-400'>24</h1>
          </div>
          <div className='booked-tickets text-sm md:text-[1.2vw] flex justify-between text-red-500'>
            <h1>Booked</h1>
            <h1>100</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalTickets;
