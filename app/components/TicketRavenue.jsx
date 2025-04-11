import React from "react";
import MyAreaChart from "../charts/Areachart";
import BlueAreaChart from "../charts/BlueAreaChart";
const TicketRavenue = () => {
  return (
    <div className=" rounded-[1vw]  border border-[#484546] bg-gray-600/10 overflow-hidden h-[36vh] sm:h-[33vh] md:h-[30vh] lg:h-[35vh] w-full md:w-[30vw] lg:w-[22vw] relative flex  flex-col justify-between ">
      <div className=" w-full px-2 pt-2 font-bold capitalize ">
        <h1 className="text-sm md:text-[1.3vw]">tickets ravenue</h1>
        <h1 className=" opacity-45 font-light text-sm md:text-[1.3vw]">
          total ravenue:{" "}
          <span className=" opacity-90 text-sm md:text-[1vw] ">50,000</span>
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
