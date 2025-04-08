import React from "react";
import TicketRavenue from "./components/TicketRavenue";
import TotalTickets from "./components/TotalTickets";
import { poppins } from "./components/Font";
import { FaPlus } from "react-icons/fa";
import Link from 'next/link';
import TicketsStatusTable from './components/TicketsStatusTable';
const Landingpage = () => {
  return (
    <div className="  w-full  flex flex-col min-h-[90vh]  items-center justify-between  px-[1vw] gap-[2.5vh]  py-[2vh] ">
      <div className="row1 text-white h-fit w-full  flex flex-col lg:flex-row items-center  px-[1.5vw] gap-2">
        <div className="details h-fit  flex flex-col sm:items-end ">
          <h1
            className={`${poppins.className}  text-2xl mb-4 italic mt-2 font-[900]  md:text-[5vw] capitalize `}
          >
            manage your ticket
          </h1>
          <Link
          href='/createnewticket'
            className={`${poppins.className} text-[12px] md:text-[1.2vw]   w-fit flex gap-1 items-center capitalize italic font-[600]  bg-amber-300  text-black rounded-[2vw] px-[2vw] py-[0.9vh]`}
          >
            create new ticket
            <FaPlus className="text-sm md:text-[1vw]" />
          </Link>
        </div>
        <div className="card-containe w-full sm:w-[60vw]  mt-[2vh] flex  gap-[2vw] flex-col md:flex-row">
          <TicketRavenue />
          <TotalTickets />
        </div>
      </div>
     <div className='w-full sm:w-[60vw]  lg:w-full '>
      <TicketsStatusTable/>
     </div>
    </div>
  );
};

export default Landingpage;
