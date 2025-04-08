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
const Newticketpage3 = () => {
  const router = useRouter({});
  return (
    <div className="ticket-page w-full h-full  text-white grid md:grid-cols-12">
      <div className="left-container    h-full md:col-span-4   ">
        <div className="leftside md:w-[25vw]  h-full   flex flex-col items-center py-[0.5vh] gap-[1vw] ">
          <div className="flex  items-center gap-[1.5vw] py-[1.5vw] ">
            <button
              onClick={() => {
                router.push("/newticketpage2");
              }}
              className={`${poppins.className} font-[600] bg-[#45b7db] w-fit h-[5vh] text-sm md:text-[1vw] flex items-center gap-[0.5vw] text-black rounded-2xl px-[1vw] py-[1vh]`}
            >
              <MdOutlineKeyboardArrowLeft className="text-[2vw] font-light" />
              Tickets Management
            </button>
            <h1
              className={`${poppins.className} italic text-sm md:text-[1.1vw]`}
            >
              Tickets Details
            </h1>
            <Pagecount/>
          </div>
          <div className="w-full flex flex-col items-center gap-[1.5vw] border-r border-gray-600 pr-[2vw]">
            <div className="  border-b   w-full md:w-full border-gray-700 py-[2vh]">
              <Hostedmatchcard />
            </div>
            <EventInformationTable />
          </div>
        </div>
      </div>
      {/* right container  */}
      <div className="w-full h-full  flex flex-col  items-center  md:col-span-8 py-[4vh] md:pt-[12vh]">
        {/* header  */}
        <div className="w-full flex flex-col justify-center gap-2">
          <h1>Adaptive pricing</h1>
          <table className="w-full border-collapse">
            <thead>
              <tr className="text-sm md:text-lg lg:text-[1vw] font-light flex justify-between px-[0.5vw]">
                <td className="text-left px-2 py-2 flex-1">Name</td>
                <td className="text-center py-2 px-2 w-[10%]">Gold</td>
                <td className="text-center py-2 px-2 w-[10%] text-yellow-500 ">
                  vip
                </td>
              </tr>
            </thead>
            <tr className="bg-white/10  text-[10px] md:text-lg lg:text-[1vw] flex justify-between items-center rounded-[1vw] px-[0.5vw] py-[1vh]">
              <td className="text-left px-2 py-1 flex-1">new football event</td>

              <td className="text-center px-2 w-[10%] h-fit border-r border-gray-500 border-opacity-50">
                100
              </td>
              <td className=" text-center px-2  h-fit w-[10%]  text-yellow-500">
                28{" "}
              </td>
            </tr>
          </table>
        </div>
        <div className="box1 flex w-full flex-col lg:flex-row gap-2 my-[2vh] ">
          <Ticketdemand />
        </div>
        <div className="w-full rounded-[1vw] bg-white/10">
          <DynamicPricing />
        </div>
        {/* footer  */}
        <div className="footer mt-[1vw] w-full ">
          <div className="flex w-full justify-between items-center">
            <a href="/" className="font-light text-sm md:text-[1.1vw]">
              Reset
            </a>
            <Link
              href="/newticketpage1"
              className={`${poppins.className} italic font-[600] bg-[#e5c839] text-[1.3vw] text-black rounded-[2vw] min:w-[6.5vw] px-[1vw] py-[1vh] flex items-center  gap-[0.3vw]`}
            >
              Save & Apply
              <span>
                <RiArrowRightSLine />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newticketpage3;
