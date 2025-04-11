import React from "react";
import TicketRavenue from "./components/TicketRavenue";
import TotalTickets from "./components/TotalTickets";
import { poppins } from "./components/Font";
import { FaPlus } from "react-icons/fa";
import Link from "next/link";
import TicketsStatusTable from "./components/TicketsStatusTable";
const Landingpage = () => {
  return (
    <div className="  w-full  flex flex-col min-h-[90vh]  items-center justify-between   gap-[2.5vh]  py-[2vh] ">
      <div className="row1  text-white min-h-[40vh] w-full    flex flex-col gap-2 lg:flex-row items-center   ">
        <div className="details   flex flex-col justify-center items-center  lg:items-end w-full lg:w-[40%] h-full ">
          <h1
            className={`${poppins.className}  shadow-text text-2xl mb-4  italic mt-2 font-[900] md:text-[5vw] lg:text-[4vw] leading-tighter md:text-base/14 uppercase `}
          >
            manage your tickets
          </h1>
          <div className=" flex justify-end">
            <Link
              href="/createnewticket"
              className={`${poppins.className} text-[12px] md:text-[1.2vw]   flex gap-1 items-center capitalize italic font-[600] hover:bg-amber-400 bg-amber-300  text-black rounded-[2vw] px-[2vw] py-[0.9vh]`}
            >
              create new ticket
              <FaPlus className="text-sm md:text-[1vw]" />
            </Link>
          </div>
        </div>
        <div className="w-full  md:w-[70%]   flex flex-col sm:flex-row justify-end gap-4">
          <TicketRavenue />
          <TotalTickets />
        </div>
      </div>
      <div className="w-full  flex justify-center">
        <div className="w-full  md:w-[70%] lg:w-full ">
          <TicketsStatusTable />
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
