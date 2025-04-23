import React from "react";
import { poppins } from "./Font";

const Impression = () => {
  return (
    <div className="rounded-[1vw]   border border-[#333135]   px-[1vw] flex flex-col py-2 justify-between  h-[36vh] sm:h-[33vh] md:h-[30vh] lg:h-[35vh] w-full md:w-[30vw] lg:w-[22vw] ">
      <div className=" text-sm md:text-[1.2vw] w-full  font-bold capitalize ">
        <h1
          className={`text-sm md:text-[0.9vw] ${poppins.className} font-[400]`}
        >
          ads reach
        </h1>
        <h1
          className={`text-sm md:text-[0.8vw] ${poppins.className} font-light opacity-50`}
        >
          based on user activity
        </h1>
      </div>
      <div className="ticket-detail   w-full flex flex-col     justify-between items-center ">
        <div className="flex justify-between items-center w-full capitalize ">
          <h1
            className={`text-gray-300 font-[500] text-[12px] ${poppins.className}`}
          >
            total impressions
          </h1>
          <h1
            className={`${poppins.className} text-[#e5c839] yellow-shadow total-tickets italic text-[10vw] sm:text-[7vw] md:text-[4.5vw] lg:text-[2.8vw] font-extrabold text-center `}
          >
            24
          </h1>
        </div>
        <div className="w-full">
          <div className="avail-tickets text-sm md:text-[1vw] flex justify-between w-full py-[1vh] border-b border-[#333135] "></div>
            <div className="flex justify-between items-center w-full capitalize ">
              <h1
                className={`text-gray-300 font-[500] text-[12px] ${poppins.className}`}
              >
                total reach
              </h1>
              <h1
                className={`${poppins.className} shadow-text total-tickets italic text-[10vw] sm:text-[7vw] md:text-[4.5vw] lg:text-[2.8vw] font-extrabold text-center `}
              >
                24
              </h1>
          </div>
        </div>
      </div>
      {/* time  */}
      <div className="w-full flex justify-end">
        <h2 className="text-gray-400 font-light text-[12px]">
          last update 1day ago
        </h2>
      </div>
    </div>
  );
};

export default Impression;
