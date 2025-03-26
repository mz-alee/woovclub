import React from "react";
import MyAreaChart from "./Charts/Areachart";

const TotalRavenue = () => {
  return (
    <div className="ticket-revenue text-sm md:text-[1vw] h-[30vh] w-[40vw] sm:w-[60vw] md:w-[35vw] md:h-[27vh] lg:w-[35vw] lg:h-[30vh] relative flex flex-col justify-between">
      <div className="w-full px-[1vw] pt-[1vh] font-bold capitalize">
        <h1 className="">ravenue</h1>
        <h1 className="opacity-45 font-light">
          total ravenue: <span className="opacity-90">50,000</span>
        </h1>
      </div>

      <div className="w-full h-[80%]">
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

export default TotalRavenue;
