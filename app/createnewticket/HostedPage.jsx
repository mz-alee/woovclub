"use client";
import React, { useState } from "react";
import { poppins } from "../components/Font";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import Link from "next/link";
import Dropdown from "../components/Dropdown";
import { useRouter } from 'next/navigation';
import Footer from './components/Footer';
import HostedLeftSide from './components/HostedLeftSide';
import HostedRightSide from './components/HostedRightSide';
const   ClubEventPage = ({togglebtn}) => {
  const [pageincrement,setpageincreament]=useState(1)
  const [number,setnumber]=useState(1)
  const router = useRouter()
  const handlepagenum = ()=>{
    setnumber(prevNumber => prevNumber + 1);
    console.log(pageincrement);
    
  }
  return (
   
        <div className="ticket-page w-full   text-white grid md:grid-cols-12">
          <div className="left-container h-full md:col-span-4   ">
            {/* left side container  */}
            <div className="leftside md:w-[25vw]  h-full   flex flex-col items-center py-[0.5vh] gap-[1vw] ">
              {/* header  */}
              <div className="header flex  w-full items-center gap-[1vw] py-[1vh] justify-between  ">
                <Link
                  href="/"
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
                  {number} <span className="text-gray-400">of</span>
                  <span className="text-gray-400">3</span>
                </h3>
              </div>
              {/* left side content  */}
              <div className="w-full flex  h-[70vh] flex-col items-center gap-[1.5vw] border-r border-gray-600 pr-[2vw]">
                <HostedLeftSide/>
              </div>
            </div>
            
          </div>
          <div className="w-full h-full  flex flex-col  items-center  md:col-span-8 py-[4vh] md:pt-[6vh]">
            <div className="box1 flex flex-col w-full lg:flex-row gap-2 my-[2vh] ">
              {/* right side container  */}
              <div className="scrollbar-hide w-full md:h-[70vh] min-md:w-[60vw]  overflow-y-scroll  ">
                {/* header  */}
                <div className="header text-white  flex flex-col sm:flex-row   py-[1vh] items-center gap-[1.5vw]">
                  <div className="flex  relative  items-center text-sm md:text-lg  lg:text-[1vw] gap-[0.5vh] justify-between">
                    <h1 className={`${poppins.className}`}>Available Events</h1>
                    {/* drop down  */}
                    <div>
                      <Dropdown />
                    </div>
                  </div>
                  <div className="b-t-n items-center flex gap-[1vw]">
                    <button  className=" text-[10px] h-[4vh]   md:h-[5vh] md:text-[1vw] px-[1.5vw]  bg-blue-400 text-black rounded-[1.5vw] ">
                      Hosted
                    </button>
                    <button onClick={togglebtn} className=" text-[10px] border border-white  text-white    rounded-[1.5vw]  h-[4vh] md:h-[5vh] md:text-[1vw] px-2 py-1">
                      Club events
                    </button>
                  </div>
                </div>
                {/* right side content  */}
                <div>
                  <HostedRightSide/>  
                </div>
                {/* footer  */}
                <Footer handlepagenum={handlepagenum}  number={number}/>
              </div>
            </div>
          </div>
        </div>
     
  );
};

export default ClubEventPage;
