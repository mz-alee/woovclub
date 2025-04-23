import React from "react";
import UpcomingMatchCard from "./UpcomingMatchCard";
import { poppins } from "@/app/components/Font";
import Dropdown from "@/app/components/Dropdown";
const HostedRightSide = ({ toggleFunction, isActive }) => {
  return (
    <div className="  w-full  upcoming-match-container flex flex-col gap-[1vh]  ">
      <div className="header text-white  flex flex-col sm:flex-row   py-[1vh] items-center gap-[1.5vw]">
        <div className="flex  relative  items-center text-sm md:text-lg  lg:text-[1vw] gap-[0.5vh] justify-between">
          {/* <h1 className={`${poppins.className}`}>Available Events</h1> */}
          {/* drop down  */}
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
            disabled={isActive === true}
            onClick={toggleFunction}
            className=" text-[10px] h-[4vh]   md:h-[5vh] md:text-[1vw] px-[1.5vw]  bg-blue-400 text-black rounded-[1.5vw] "
          >
            Hosted
          </button>
          <button
            onClick={toggleFunction}
            className=" text-[10px] border border-white  text-white    rounded-[1.5vw]  h-[4vh] md:h-[5vh] md:text-[1vw] px-2 py-1"
          >
            Club events
          </button>
        </div>
      </div>
      <h3 className={`${poppins.className} font-[300] lg:text-[13px] `}>
        Games
      </h3>
      <UpcomingMatchCard color={"#55299b"} />
      <UpcomingMatchCard color={"rgba(84, 83, 83, 0.434)"} />
      <h3 className={`${poppins.className} font-[300] lg:text-[13px]`}>
        Competition
      </h3>
      <UpcomingMatchCard color={"#55299b"} />
      <UpcomingMatchCard color={"rgba(84, 83, 83, 0.434)"} />
    </div>
  );
};

export default HostedRightSide;
