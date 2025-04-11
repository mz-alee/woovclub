"use client";
import React, { useState } from "react";
import { poppins } from "../components/Font";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import ExperLevelCard from "../createnewticket/components/ExperLevelCard";
import MatchCard from "../createnewticket/components/MatchCard";
import Link from "next/link";
import { RiArrowRightSLine } from "react-icons/ri";
import person1 from "../../public/person1.png";
import person2 from "../../public/person2.png";
import person3 from "../../public/person3.png";
import Image from "next/image";
import football from "../../public/Footbal.png";
import Dropdown from "../components/Dropdown";
import { useRouter } from 'next/navigation';
import Hostedmatchcard from '../createnewticket/components/Hostedmatchcard';
import { EventInformationTable } from '../components/Event-information-table';
import UpcomingMatchCard from '../createnewticket/components/UpcomingMatchCard';
const ClubEventPage = ({togglebtn}) => {
  const router = useRouter()
  return (
   
        <div className="ticket-page w-full h-full  text-white grid md:grid-cols-12">
          <div className="left-container h-full md:col-span-4   ">
            {/* left side container  */}
            <div className="leftside md:w-[25vw]  h-full   flex flex-col items-center py-[0.5vh] gap-[1vw] ">
              {/* header  */}
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
              <div className="w-full flex  flex-col items-center gap-[1.5vw] border-r border-gray-600 pr-[2vw]">
                <div className="  border-b   w-full relative md:w-full border-gray-700 py-[2vh]">
                  <div className=" absolute right-2 ">
                   
                  </div>
                  <Hostedmatchcard/>
                  
                </div>
                <div className="players w-full h-full ">
                  <EventInformationTable/>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-full  flex flex-col  items-center  md:col-span-8 py-[4vh] md:pt-[6vh]">
            <div className="box1 flex flex-col w-full lg:flex-row gap-2 my-[2vh] ">
              {/* right side container  */}
              <div className="scrollbar-hide w-full md:h-[70vh] min-md:w-[60vw]  overflow-y-scroll  ">
                {/* header  */}
                <div className="header text-white  flex flex-col sm:flex-row   py-[1vh] items-center gap-[1.5vw]">
                  <div className="flex    items-center text-sm md:text-lg  lg:text-[1vw] gap-[0.5vh] justify-between">
                    <h1 className={`${poppins.className}`}>Available Events</h1>
                    {/* drop down  */}
                    <div>
                      <Dropdown />
                    </div>
                  </div>
                  <div className="b-t-n items-center flex gap-[1vw]">
                    <button onClick={togglebtn} className=" text-[10px] h-[4vh] border border-white  text-white  md:h-[5vh] md:text-[1vw] px-[1.5vw]   rounded-[1.5vw] ">
                      Hosted
                    </button>
                    <button className=" text-[10px]    bg-blue-400 rounded-[1.5vw] text-black h-[4vh] md:h-[5vh] md:text-[1vw] px-2 py-1">
                      Club events
                    </button>
                  </div>
                </div>
                {/* upcoming match container */}
                <div className="  w-full  upcoming-match-container flex flex-col gap-[1vh]  ">
                  <h3 className={`${poppins.className}`}>Games</h3>
                  <UpcomingMatchCard color={"#55299b"} />
                  <UpcomingMatchCard color={"rgba(84, 83, 83, 0.434)"} />
                  <h3 className={`${poppins.className}`}>Competition</h3>
                  <UpcomingMatchCard color={"#55299b"} />
                  <UpcomingMatchCard color={"rgba(84, 83, 83, 0.434)"} />
                </div>
                {/* footer  */}
                <div className="footer h-[20vh] w-full  mt-[1vw]">
                  <div className="flex gap-[0.5vw]  items-center">
                    <input type="checkbox" className="check-box" />

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
                    <a
                      href="/"
                      className={`${poppins.className} font-light text-sm md:text-[1vw]`}
                    >
                      Reset
                    </a>
                    <button
                    onClick={()=>{router.push('/newticketpage2')}}
                      className={`${poppins.className} italic font-[600] bg-[#e5c839] text-[1.3vw] text-black rounded-[2vw] w-[6.5vw] px-[1vw] py-[1vh] flex items-center  gap-[0.3vw]`}
                    >
                      Next
                      <span>
                        <RiArrowRightSLine />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
     
  );
};

export default ClubEventPage;
