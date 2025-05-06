"use client";
import React from "react";
import { poppins } from "../components/Font";
import Ticketdemand from "../components/Ticketdemand";
import TotalRavenue from "../components/TotalRavenue";
import DynamicPricing from "../components/DynamicPricing";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { EventInformationTable } from "../components/Event-information-table";
import Hostedmatchcard from "../components/Hostedmatchcard";
import { useRouter } from "next/navigation";
import TicketRavenue from "../components/TicketRavenue";
import Ticketsdata from "../TicketsMap/Ticketsdata";
const Ticketspage = () => {
  const router = useRouter({});
  return (
    <div className="ticket-page md:overflow-hidden md:h-[90vh]  w-full    text-white grid md:grid-cols-12">
      <div className="left-container h-full md:col-span-4  ">
        <div className="leftside md:w-[27vw]  h-full   flex flex-col items-center py-[0.5vh] gap-[1vw] ">
          <div className="flex  items-center gap-[1.5vw] py-[1.5vw] ">
            <button
              onClick={() => {
                router.push("/");
              }}
              className={`${poppins.className} font-[600] bg-[#45b7db] w-fit h-[5vh] text-sm md:text-[0.8vw] flex items-center gap-[0.5vw] text-black rounded-2xl px-[1vw] py-[1vh]`}
            >
              <MdOutlineKeyboardArrowLeft className="text-[2vw] font-light" />
              Tickets Management
            </button>
            <h1
              className={`${poppins.className} italic text-sm md:text-[1.1vw]`}
            >
              Tickets Details
            </h1>
          </div>
          <div className="w-full flex  flex-col items-center gap-[1.5vw] md:border-r border-[#454446] pr-[2vw]">
            <div className="  border-b  w-full sm:w-[50vw] md:w-full border-gray-700 py-[2vh]">
              <Hostedmatchcard />
            </div>
            <div className=' w-full sm:w-[50vw] md:w-full'>
            <EventInformationTable />
            </div>
          </div>
        </div>
      </div>
      <div className="scrollbar-hide w-full h-full  flex flex-col overflow-y-scroll items-center  md:col-span-8 py-[4vh] md:pt-[12vh]">
        <div className="box1   flex w-full flex-col sm:flex-row justify-between gap-2 my-[2vh] ">
        <div className="w-full md:h-[30vh] lg:w-[25vw] lg:h-[35vh]">
          <Ticketdemand/>
          </div>
          <div className='w-full md:h-[30vh] lg:w-[35vw] lg:h-[35vh] '>
          <TotalRavenue />
          </div>
          
        </div>
        <div className=" w-full rounded-[1vw] ">
          <DynamicPricing />
        </div>
        <div className="w-full mt-4">
          {/* <TicketResponsiveMap/> */}
          <Ticketsdata />
        </div>
      </div>
    </div>
  );
};

export default Ticketspage;
