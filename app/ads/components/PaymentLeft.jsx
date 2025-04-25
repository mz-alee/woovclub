import { poppins } from "@/app/components/Font";
import React from "react";

const PaymentLeft = () => {
  return (
    <div className="w-full min:h-full bg-white/5 p-2 flex flex-col gap-2  backdrop:backdrop-blur-2xl  rounded-xl">
      {/* ad detail */}
      <div className="border-b border-[#424242] w-full pb-2 min-h-[14vh] flex flex-col justify-between gap-2">
        <div>
          <h1
            className={`${poppins.className} text-[11px]  md:text-[0.8vw] font-[600]`}
          >
            Ad Details
          </h1>
          <p className="text-gray-400 text-[10px] md:text-[0.7vw]">
            based on users activity
          </p>
        </div>
        <div className="flex justify-between  w-full ">
          <h3
            className={`${poppins.className} text-[11px] text-gray-300 md:text-[0.7vw] font-[400]`}
          >
            Daily Budget
          </h3>
          <h1
            className={`italic md:text-sm lg:text-[1.2vw]  text-gray-300 font-[900]  ${poppins.className}`}
          >
            3 SAR
          </h1>
        </div>
      </div>
      {/* duration  */}
      <div className="border-b border-[#424242] w-full py-2 min-h-[17vh] gap-1 flex flex-col justify-between ">
        <div className="flex justify-between w-full">
          <h1
            className={`${poppins.className} text-[11px]  md:text-[0.8vw] text-gray-300 font-[400]`}
          >
            Duration
          </h1>
          <h1
            className={`italic md:text-sm lg:text-[1.2vw]  text-gray-300 font-[900]  ${poppins.className}`}
          >
            3 Days
          </h1>
        </div>
        <div className="flex justify-between items-center  gap-2 w-full ">
          {/* start date  */}
          <div className="start-date flex flex-col gap-1">
            <h1 className="text-gray-300 text-[10px] md:text-[0.8vw]  ">
              Start
            </h1>
            <h1
              className={`${poppins.className} text-[11px] italic md:text-[0.8vw] text-green-400 font-[500]`}
            >
              26 April 2025
            </h1>
          </div>
          {/* border  */}
          <div className="border-b border-[#666667] w-full"></div>
          {/* end date  */}
          <div className="end-date flex flex-col gap-1">
            <h1 className="text-gray-300 text-[10px] md:text-[0.8vw]">End</h1>
            <h1
              className={`${poppins.className} text-[11px]  md:text-[0.8vw] italic text-red-400 font-[500]`}
            >
              26 April 2025
            </h1>
          </div>
        </div>
      </div>
      {/* gender  */}
      <div className="flex justify-between border-b border-[#4f5054] py-3 w-full ">
        <h1
          className={`${poppins.className} text-[12px] capitalize md:text-[0.8vw] text-gray-300 font-[400]`}
        >
          gender
        </h1>
        <h1
          className={`italic md:text-sm lg:text-[1.2vw]  text-gray-300 font-[900]  ${poppins.className}`}
        >
          All
        </h1>
      </div>
      {/* age group  */}
      <div className="flex justify-between border-b border-[#4f5054] py-3 w-full ">
        <h1
          className={`${poppins.className} text-[12px] capitalize md:text-[0.8vw] text-gray-300 font-[400]`}
        >
          age group
        </h1>
        <h1
          className={`italic md:text-sm lg:text-[1.2vw]  text-gray-300 font-[900] flex  items-center gap-1  ${poppins.className}`}
        >
          <span className="text-gray-400 text-[10px] md:text-[0.7vw]">
            From
          </span>
          13
          <span className="text-gray-400 text-[10px] md:text-[0.7vw]">To</span>
          95
        </h1>
      </div>
      {/* Locations  */}
      <div className="flex justify-between flex-col border-b border-[#4f5054] py-3 w-full ">
        <div className="flex justify-between w-full items-center">
          <h1
            className={`${poppins.className} text-[11px] capitalize md:text-[0.8vw] text-gray-300 font-[400]`}
          >
            area1
          </h1>
          <h1
            className={`italic text-[12px] md:text-sm lg:text-[1.2vw]  text-gray-300 font-[900]  ${poppins.className}`}
          >
            Cairo, Egypt
          </h1>
        </div>
        <div className="flex justify-between w-full items-center ">
          <h1
            className={`${poppins.className} text-[11px] capitalize md:text-[0.8vw] text-gray-300 font-[400]`}
          >
            area2
          </h1>
          <h1
            className={`italic text-[12px] md:text-sm lg:text-[1.2vw]  text-gray-300 font-[900]  ${poppins.className}`}
          >
            Alexandria, Egypt
          </h1>
        </div>
        <div className="flex justify-between w-full items-center">
          <h1
            className={`${poppins.className} text-[11px] capitalize md:text-[0.8vw] text-gray-300 font-[400]`}
          >
            area3
          </h1>
          <h1
            className={`italic text-[12px] md:text-sm lg:text-[1.2vw]  text-gray-300 font-[900]  ${poppins.className}`}
          >
            Sultanah, Medina Region, Saudi Arabia
          </h1>
        </div>
        <div className="flex justify-between w-full items-center">
          <h1
            className={`${poppins.className} text-[11px] capitalize md:text-[0.8vw] text-gray-300 font-[400]`}
          >
            area4
          </h1>
          <h1
            className={`italic text-[12px] md:text-sm lg:text-[1.2vw]  text-gray-300 font-[900]  ${poppins.className}`}
          >
            Cairo, Egypt
          </h1>
        </div>
      </div>
      {/* impressions  */}
      <div className="flex  flex-col gap-3">
        <h1
          className={`${poppins.className} text-[12px]  md:text-[0.8vw] font-[600]`}
        >
          Expected Results
        </h1>
        <div className="flex justify-between gap-4    ">
          <div className='border-r flex flex-col justify-center items-center border-[#4f5054] w-[20%] h-fit'>
            <h1
              className={`${poppins.className} text-[10px]  italic capitalize md:text-[0.8vw] text-gray-300 font-[400]`}
            >
              Reach
            </h1>
            <h1
              className={`${poppins.className} text-[#e5c839]  total-tickets italic text-[25px] sm:text-[5vw] md:text-[1.3vw]  font-extrabold text-center `}
            >
              1
            </h1>
          </div>
          <div className='border-r flex flex-col justify-center items-center border-[#4f5054] w-[60%] h-fit'>
            <h1
              className={`${poppins.className} text-[10px]  italic capitalize md:text-[0.8vw] text-gray-300 font-[400]`}
            >
              Impressions
            </h1>
            <h1
              className={`${poppins.className} text-[#e5c839]  total-tickets italic text-[25px] sm:text-[5vw] md:text-[1.3vw]  font-extrabold text-center `}
            >
              1
            </h1>
          </div>
          <div className=' w-[20%] flex flex-col justify-center items-center h-fit'>
            <h1
              className={`${poppins.className} text-[10px] italic  capitalize md:text-[0.8vw] text-gray-300 font-[400]`}
            >
              Clicks
            </h1>
            <h1
              className={`${poppins.className} text-[#e5c839]  total-tickets italic text-[25px] sm:text-[5vw] md:text-[1.3vw]  font-extrabold text-center `}
            >
              1
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentLeft;
