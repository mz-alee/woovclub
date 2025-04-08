import React from "react";
import { poppins } from './Font';

const TotalTickets = () => {
  return (
    <div className="rounded-[1vw] bg-white/10 px-[1.5vw] flex flex-col py-2 justify-between  h-[36vh] sm:h-[33vh] md:h-[25vh] lg:h-[33vh] w-full md:w-[30vw] lg:w-[25vw] ">
      <div className=" text-sm md:text-[1.2vw] w-full px-[0.5vw] pt-[1vh] font-bold capitalize ">
        <h1 className="">total tickets</h1>
        <h1 className=" opacity-45 font-light">total Available tickets</h1>
      </div>
      <div className="ticket-detail   h-full w-full flex flex-col     justify-between items-center ">
        <h1 className={`${poppins.className}total-tickets italic text-[10vw] sm:text-[7vw] md:text-[4.5vw] lg:text-[4vw] font-extrabold text-center `}>124</h1>
        <div className='w-full'>
          <div className="avail-tickets text-sm md:text-[1vw] flex justify-between w-full py-[1vh] border-b border-gray-400 ">
            <h1 className='text-green-400 font-light'>Available</h1>
            <h1 className='text-green-400'>24</h1>
          </div>
          <div className='booked-tickets text-sm md:text-[1vw] flex justify-between text-red-500'>
            <h1>Booked</h1>
            <h1>100</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalTickets;
