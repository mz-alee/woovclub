import React from "react";
import { FaPlus } from "react-icons/fa";
import Link from "next/link";
import TicketRavenue from '../components/TicketRavenue';
import TotalTickets from '../components/TotalTickets';
import TicketsStatusTable from '../components/TicketsStatusTable';
import { poppins } from '../components/Font';                             
import Impression from '../components/Impression';
const Compaign = () => {
  return (   
    <div className="  w-full  flex flex-col   items-center justify-between   gap-[2.5vh]  py-[2vh] ">
      <div className="row1  text-white min-h-[40vh] w-full flex flex-col gap-5 lg:flex-row items-center   ">
        <div className="details  px-4 flex flex-col gap-2   items-center lg:items-start  w-full lg:w-[50%] lg:h-[40vh] ">
          <h1
            className={`${poppins.className}    shadow-text text-2xl mb-4  w-[300px] md:w-[350px] 2xl:w-[30vw] italic mt-2 font-[900] md:text-[5vw] lg:text-[4.3vw]  lg:text-base/16  uppercase `}
          >
            manage your ads
          </h1>
          <p className={`${poppins.className} text-[10px]`}>Easily create, track and optimize your ads to reach a wider audience.</p>
          <div className=" flex justify-center lg:justify-end w-full">
            <Link
              href="/ads/create"
              className={`${poppins.className} text-[12px] md:text-[1vw]   flex gap-1 items-center capitalize italic font-[600]  duration-200 hover:-translate-y-2 hover:bg-amber-400 bg-amber-300 transition group text-black rounded-[2vw] px-[1vw] py-[1.2vh]`}
            >
              new compaign
              <FaPlus className="text-sm md:text-[1vw] group-hover:rotate-360 duration-400" />
            </Link>
          </div>
        </div>
        <div className="w-full  md:w-[50%]    flex flex-col sm:flex-row justify-end gap-4">
          <Impression />
          <TotalTickets />
        </div>
      </div>
      <div className="w-full  flex justify-center">
        <div className="w-full text-white  md:w-[70%] lg:w-full ">
          <TicketsStatusTable />
        </div>
      </div>
    </div>
  );
};

export default Compaign;
