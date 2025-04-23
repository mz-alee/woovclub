"use client";
import React, { useState, useEffect } from "react";
import MatchCard from "./MatchCard";
import Dropdown from "@/app/components/Dropdown";
import { poppins } from "@/app/components/Font";
import { RiArrowRightSLine } from "react-icons/ri";
import Link from "next/link";
import useImages from "@/useImages";
const ClubEventRight = ({ toggleFunction }) => {
  
  return (
    <div className="scrollbar-hide w-full md:h-[70vh] min-md:w-[60vw] px-4  overflow-y-scroll  ">
      {/* header  */}
      <div className="header text-white  flex flex-col sm:flex-row   py-[1vh] items-center gap-[1.5vw]">
        <div className="flex relative items-center   text-sm md:text-lg lg:text-[1vw] gap-[0.5vh] justify-between">
          {/* <h1 className={`${poppins.className}`}>Available Events</h1> */}
          <div>
            {/* <Dropdown item={["item 1", "item 2" , "item 3"]}/> */}
            <select
              className={`${poppins.className} italic font-light`}
              name=""
              id=""
            >
              <option className="text-black" value="">
                Available Events
              </option>
              <option className="text-black" value="value2">
                value 1
              </option>
              <option className="text-black" value="value1">
                value 2
              </option>
            </select>
          </div>
        </div>
        <div className="b-t-n items-center flex gap-[1vw]">
          <button
            onClick={toggleFunction}
            className=" text-[10px] h-[4vh] border border-white  text-white  md:h-[5vh] md:text-[1vw] px-[1.5vw]   rounded-[1.5vw] "
          >
            Hosted
          </button>
          <button className=" text-[10px]    bg-blue-400 rounded-[1.5vw] text-black h-[4vh] md:h-[5vh] md:text-[1vw] px-2 py-1">
            Club events
          </button>
        </div>
      </div>
      {/* upcoming match container */}
      <div className="  w-full   flex flex-col gap-[1vh]  ">
        <h3 className={`${poppins.className}`}>Games</h3>
        <MatchCard  color={"#55299b"} />
        <MatchCard color={"rgba(84, 83, 83, 0.434)"} />
        <h3 className={`${poppins.className}`}>Competition</h3>
        <MatchCard color={"#55299b"} />
        <MatchCard color={"rgba(84, 83, 83, 0.434)"} />
      </div>
      {/* footer  */}
      {/* <div className="footer h-[20vh] w-full  mt-[1vw]">
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
        // onClick={()=>{router.push('/newticketpage2')}}
          className={`${poppins.className} italic font-[600] bg-[#e5c839] text-[1.3vw] text-black rounded-[2vw] w-[6.5vw] px-[1vw] py-[1vh] flex items-center  gap-[0.3vw]`}
        >
          Next
          <span>
            <RiArrowRightSLine />
          </span>
        </button>
      </div>
    </div> */}
    </div>
  );
};

export default ClubEventRight;
