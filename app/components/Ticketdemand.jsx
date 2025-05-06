import React from "react";
import BlueAreaChart from "../charts/BlueAreaChart";
import MyAreaChart from "../charts/Areachart";
const Ticketdemand = () => {
  return (
    <div className=" rounded-[0.7vw] border border-[#454446]  text-sm h-[30vh] md:h-full w-full flex relative flex-col justify-between overflow-hidden ">
      <div className=" w-full px-[1vw] pt-[2vh] font-bold capitalize ">
        <h1 className="text-sm md:text-[1vw]">tickets demand</h1>
        <h1 className=" opacity-45 font-light text-sm md:text-[1vw]">
          based on user acitivity
        </h1>
      </div>
      <div className="h-[80%]">
        <BlueAreaChart />
        {/* <MyAreaChart/> */}
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

export default Ticketdemand;
