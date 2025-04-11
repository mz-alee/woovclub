"use client";
import React from "react";
import { poppins } from "../components/Font";
import Ticketdemand from "../components/Ticketdemand";
import TotalRavenue from "../components/TotalRavenue";
import DynamicPricing from "../components/DynamicPricing";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { EventInformationTable } from "../components/Event-information-table";
import Hostedmatchcard from "../components/Hostedmatchcard";
import { RiArrowRightSLine } from "react-icons/ri";

import Link from "next/link";
import { useRouter } from "next/navigation";
import Pagecount from '../components/pagecount';
import Page3RightSide from '../createnewticket/components/Page3RightSide';
const Newticketpage3 = () => {
  const router = useRouter({});
  return (
    <div className="ticket-page w-full overflow-hidden h-[90vh]   text-white grid md:grid-cols-12">
      <div className="left-container    h-full md:col-span-4   ">
        <div className="leftside md:w-[25vw]  h-full   flex flex-col items-center py-[0.5vh] gap-[1vw] ">
        <div className="header flex  w-full items-center gap-[1vw] py-[1vh] justify-between  ">
                <Link
                  href="/newticketpage2"
                  className={`${poppins.className} font-[600] bg-[#45b7db] w-fit h-[5vh] px-[0.7vw] text-sm md:text-[0.7vw] flex items-center gap-[0.5vw] text-black rounded-2xl py-[1vh]`}
                >
                  <MdOutlineKeyboardArrowLeft className="text-[1.3vw] font-light" />
                  Tickets Management
                </Link>
                <h1
                  className={`${poppins.className} italic text-sm md:text-[1vw]`}
                >
                  Create New Ticket
                </h1>
                <h3
                  className={`${poppins.className} italic font-[600] text-[0.8vw] flex gap-[0.3vw]`}
                >
                  1 <span className="text-gray-400">of</span>
                  <span className="text-gray-400">3</span>
                </h3>
              </div>
          <div className="w-full  flex flex-col items-center gap-[1.5vw] border-r border-gray-600 pr-[2vw]">
            <div className="  border-b   w-full md:w-full border-gray-700 py-[2vh]">
              
              <Hostedmatchcard />
            </div>
            <EventInformationTable />
          </div>
        </div>
      </div>
      {/* right container  */}
      <div className="scrollbar-hide  w-full h-full flex flex-col overflow-y-scroll items-center  md:col-span-8 py-[4vh] md:pt-[12vh]">
        {/* header  */}
       <Page3RightSide/>
      </div>
    </div>
  );
};

export default Newticketpage3;
