"use client";
import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { poppins } from "../components/Font";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { EventInformationTable } from "../components/Event-information-table";
import Hostedmatchcard from "./components/Hostedmatchcard";
import UpcomingMatchCard from "./components/UpcomingMatchCard";
import Link from "next/link";
import { RiArrowRightSLine } from "react-icons/ri";
import Dropdown from "../components/Dropdown";

const Ticketspage = () => {
  
  return (
    
        <div className="ticket-page w-full h-full  text-white grid md:grid-cols-12">
          <div className="left-container h-full md:col-span-4   ">
            <div className="leftside md:w-[25vw]  h-full   flex flex-col items-center py-[0.5vh] gap-[1vw] ">
              <div className="header flex  w-full items-center gap-[1vw] py-[1vh] justify-between  ">
                <Link
                  href="/Ticketspage"
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
                <div className="  border-b   w-[50vw] md:w-full border-gray-700 py-[2vh]">
                  <Hostedmatchcard />
                </div>
                <EventInformationTable />
              </div>
            </div>
          </div>
          <div className="w-full h-full  flex flex-col  items-center  md:col-span-8 py-[4vh] md:pt-[7vh]">
            <div className="box1 flex flex-col lg:flex-row gap-2 my-[2vh] ">
              {/* right side container  */}
              <div className="scrollbar-hide md:h-[70vh] md:w-[60vw] overflow-y-scroll  ">
                {/* header  */}
                <div className="header text-white flex flex-col sm:flex-row  py-[1vh] items-center gap-[1.5vw]">
                  <div className="flex sm:block text-sm md:text-lg lg:text-[1vw] gap-[1vh] justify-between">
                    <h1>Available Events</h1>
                    {/* drop down  */}
                    <Dropdown/>
                  </div>
                  <div className="b-t-n items-center flex gap-[1vw]">
                    <button className="text-black text-[10px] h-[4vh] bg-blue-400  md:h-[5vh] md:text-[1vw] px-[1.5vw]   rounded-[1.5vw] ">
                      Hosted
                    </button>
                    <button className=" text-[10px] border  border-white rounded-[1.5vw] text-white  h-[4vh] md:h-[5vh] md:text-[1vw] px-2 py-1">
                      Club events
                    </button>
                  </div>
                </div>
                {/* upcoming match container */}
                <div className=" upcoming-match-container flex flex-col gap-[1vh]">
                  <UpcomingMatchCard color={"#55299b"} />
                  <UpcomingMatchCard color={"rgba(84, 83, 83, 0.434)"} />
                  <UpcomingMatchCard color={"#55299b"} />
                  <UpcomingMatchCard color={"rgba(84, 83, 83, 0.434)"} />
                </div>
                {/* footer  */}
                <div className="footer mt-[1vw]">
                  <div className="flex gap-[0.5vw]  items-center">
                    <h1 className="text-sm md:text-[1.1vw]">
                      i agree with Woov Club's
                    </h1>
                    <Link
                      href="/"
                      className="text-[#45B7DB] underline capitalize text-sm md:text-[1.1vw]"
                    >
                      terms and condition
                    </Link>
                  </div>
                  <div className="flex justify-between items-center">
                    <a href="/" className="font-light text-sm md:text-[1.1vw]">
                      Reset
                    </a>
                    <Link
                      href="/newticketpage2"
                      className={`${poppins.className} italic font-[600] bg-[#e5c839] text-[1.3vw] text-black rounded-[2vw] w-[6.5vw] px-[1vw] py-[1vh] flex items-center  gap-[0.3vw]`}
                    >
                      Next
                      <span>
                        <RiArrowRightSLine />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  );
};

export default Ticketspage;
