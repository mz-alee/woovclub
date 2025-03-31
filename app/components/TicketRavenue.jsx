import React from "react";
import MyAreaChart from "./Charts/Areachart";
import BlueAreaChart from './Charts/BlueAreaChart';
const TicketRavenue = () => {
  return (
    <div className="rounded-[1vw] bg-white/10 overflow-hidden h-[17rem] w-[70vw] sm:w-[60vw] md:w-[35vw] md:h-[25vh] lg:w-[25vw] lg:h-[35vh] relative flex  flex-col justify-between ">
      <div className=" w-full px-2 pt-2 font-bold capitalize ">
        <h1 className="text-sm md:text-[1.3vw]">tickets ravenue</h1>
        <h1 className=" opacity-45 font-light text-sm md:text-[1.3vw]">
          total ravenue: <span className=" opacity-90 text-sm md:text-[1vw] ">50,000</span>
        </h1>
      </div>
      <div className="h-[80%]">
        <MyAreaChart />
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

export default TicketRavenue;
