import React from "react";
import MyAreaChart from "../charts/Areachart";
import BlueAreaChart from "../charts/BlueAreaChart";

const TotalRavenue = () => {
  return (
    <div className="rounded-[1vw]  border border-gray-600 bg-[#1e1e1e] overflow-hidden text-sm md:text-[1vw] h-[30vh] md:h-full w-full relative flex flex-col justify-between">
      <div className="absolute flex justify-around items-center h-full  w-full">
        <div className="border-l border-gray-700 h-[18vh] "></div>

        <div className="border-l border-gray-700 h-[18vh] "></div>
        <div className="border-l border-gray-700 h-[18vh] "></div>
        <div className="border-l border-gray-700 h-[18vh] "></div>
        <div className="border-l border-gray-700 h-[18vh] "></div>
        <div className="border-l border-gray-700 h-[18vh] "></div>
        <div className="border-l border-gray-700 h-[18vh] "></div>
        <div className="border-l border-gray-700 h-[18vh] "></div>
        <div className="border-l border-gray-700 h-[18vh] "></div>
        <div className="border-l border-gray-700 h-[18vh] "></div>
        <div className="border-l border-gray-700 h-[18vh] "></div>
      </div>
      <div className="w-full px-[1vw] pt-[1vh] font-bold capitalize">
        <h1 className="">ravenue</h1>
        <h1 className="opacity-45 font-light">
          total ravenue: <span className="opacity-90">50,000</span>
        </h1>
      </div>

      <div className="w-full z-10  h-[80%]">
        <MyAreaChart />
        {/* <BlueAreaChart/> */}
      </div>

      <div className="w-full h-fit px-[1vw] flex absolute bottom-[1vh] items-center gap-[0.5vh] flex-col md:justify-between md:flex-row">
        <div className="text-[10px] md:text-[1vw] lg-text-[1.5vw] flex gap-1 h-[1vh] items-center">
          <h1 className="font-light">Currency:</h1>
          <h1 className="font-bold">USD$</h1>
        </div>
        <h1 className="text-[10px] md:text-[1vw] lg-text-[1.5vw] font-light opacity-50">
          last update: 1 day ago
        </h1>
      </div>
    </div>
  );
};

export default TotalRavenue;
