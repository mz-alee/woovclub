import React from "react";
import { poppins } from './Font';

const TotalTickets = () => {
  return (
    <div className="rounded-[1vw]   border border-[#333135]   px-[1vw] flex flex-col py-2 justify-between  h-[36vh] sm:h-[33vh] md:h-[30vh] lg:h-[35vh] w-full md:w-[30vw] lg:w-[22vw] ">
      <div className=" text-sm md:text-[1.2vw] w-full   font-bold capitalize ">
        <h1 className={`text-sm md:text-[0.8vw] ${poppins.className} font-[400]`}>total tickets</h1>
        <h1 className={`text-sm md:text-[0.7vw] ${poppins.className} font-[400] opacity-70`}>total Available tickets</h1>
      </div>
      <div className="ticket-detail   w-full flex flex-col     justify-between items-center ">
        <h1 className={`${poppins.className} shadow-text total-tickets italic text-[10vw] sm:text-[7vw] md:text-[4.5vw] lg:text-[4vw] font-extrabold text-center `}>124</h1>
        <div className='w-full flex flex-col justify-between  gap-4'>
          <div className="avail-tickets text-sm md:text-[1vw] flex justify-between items-center w-full   ">
            <h1 className='text-green-400 text-[12px] lg:text-[0.8vw] font-semibold'>Available</h1>
            <h1 className=' text-green-400 text-[12px] lg:text-[0.8vw] font-semibold'>24</h1>
          </div>
          <div className='border-b border-[#333135] w-full'></div>
          <div className='booked-tickets flex justify-between w-full text-red-400 text-[12px] lg:text-[0.8vw] font-semibold'>
            <h1>Booked</h1>
            <h1>100</h1>
          </div>
        </div>
      </div>
      {/* time  */}
      <div className='w-full flex justify-end'>
      <h2 className='text-gray-400 font-light text-[12px] lg:text-[0.7vw] capitalize'>last update 1:day ago</h2>
      </div>
    </div>
  );
};

export default TotalTickets;
