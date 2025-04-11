"use client";
import React, { useState } from "react";
import { poppins } from "../components/Font";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { EventInformationTable } from "../components/Event-information-table";
import Hostedmatchcard from "../components/Hostedmatchcard";
import { useRouter } from "next/navigation";
import { RiArrowRightSLine } from "react-icons/ri";

import Dropdown from "../components/Dropdown";
import Link from "next/link";
import Ticketlist from "./components/Ticketlist";
import Pagecount from '../components/pagecount';
import TicketSettingComponent from '../createnewticket/components/TicketSettingComponent';
const newticketpage3 = () => {
  return (
    <div className=" md:overflow-y-hidden h-[90vh] ticket-page w-full min-h-[90vh]  text-white grid md:grid-cols-12">
      <div className="left-container h-full md:col-span-4   ">
        <div className="leftside md:w-[25vw]  h-full   flex flex-col items-center py-[0.5vh] gap-[1vw] ">
        <div className="header flex  w-full items-center gap-[1vw] py-[1vh] justify-between  ">
                <Link
                  href="/createnewticket"
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
          <div className="w-full flex flex-col items-center gap-[1.5vw] border-r border-gray-600 pr-[2vw]">
           <div className='w-full'> 
            <div className="  border-b   w-full  md:w-full border-gray-700 py-[2vh]">
              <Hostedmatchcard />
            </div>
            <EventInformationTable />
            </div>
          </div>
        </div>
      </div>
      {/* right section  */}
      <div className="scrollbar-hide w-full  h-full md:overflow-y-scroll flex flex-col    md:col-span-8 py-[4vh] md:pt-[12vh]">
        {/* ticket setting  */}
        <TicketSettingComponent/>
      </div>
    </div>
  );
};

export default newticketpage3;
