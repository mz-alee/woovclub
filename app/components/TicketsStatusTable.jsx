"use client";
import React from "react";import { poppins } from './Font';
;
const TicketsStatusTable = () => {

  return (
    <div className="border border-[#333135] bg-transparent rounded-2xl h-[40vh] sm:h-[40vh] w-full overflow-hidden">
    <div className="header text-white flex flex-col sm:flex-row bg-re px-[1.4vw] py-[1vh] items-center gap-[1.5vw]">
      <div className="flex sm:block text-sm md:text-md lg:text-[1vw] gap-[1vh] justify-between">
        <h1 className={`${poppins.className} font-[600] text-[12px] `}>Available Tickets</h1>
        <div className="flex relative justify-between items-center gap-2">
          <select className="outline-none border-none -ml-1 flex items-center  capitalize font-[600] text-[9px]  lg:text-[10px]">
            <option className="text-black" value="">sort by updated date</option>
            <option className="text-black" value="option1">options</option>
            <option className="text-black" value="option2">filter</option>
            <option className="text-black" value="option3">data</option>
          </select>
        </div>
      </div>
      <div className="btns items-center flex gap-[1vw]">
        <button className="border text-[10px] h-[4vh] md:h-[5vh] hover:bg-blue-400 md:text-[1vw] border-white rounded-2xl text-white px-[10px]">Hosted</button>
        <button className="bg-blue-400 text-[10px] h-[4vh] md:h-[5vh] md:text-[1vw] text-black rounded-2xl px-2 py-1">Club events</button>
      </div>
    </div>
  
    <div className="px-[1vw] py-[1vh]"></div>
  
    <div className="px-[1vw] text-white h-full w-full">
      <div className="w-full overflow-x-auto   px-4">
        <table className="w-full border-collapse  min-w-[600px]">
          <thead>
            <tr className="text-[10px] lg:text-[0.8vw] font-semibold  flex gap-2 justify-between px-[10px]">
              <td className="text-left px-2 py-2 flex-1">Name</td>
              <td className="text-center py-2 px-2 w-[50px] md:w-[6vw]">Total</td>
              <td className="text-center py-2 px-2 w-[50px] md:w-[6vw]">Status</td>
              <td className="text-center py-2 px-2 w-[50px] md:w-[6vw]">Booked</td>
              <td className="text-center py-2 px-2 w-[50px] md:w-[6vw]">Date</td>
            </tr>
          </thead>
  
          <tbody className="flex flex-col gap-2 lg:gap-[1vh] h-[10rem]  pt-2 pb-8 sm:min-h-[25vh] overflow-y-scroll scrollbar-hide">
            {[...Array(15)].map((_, index) => (
              <tr
                key={index}
                className="bg-white/10 w-full hover:bg-[#652ebd] text-[10px] lg:text-[0.8vw] flex justify-between items-center gap-2 rounded-[0.8vw] px-[10px] sm:py-[1vh]"
              >
                <td className="text-left font-bold px-2 py-1 flex-1">new football event</td>
                <td className="text-center font-bold px-2 h-fit w-[60px] md:w-[6vw] border-r text-green-500 border-gray-500 border-opacity-50">Available</td>
                <td className="text-center font-bold px-2 h-fit w-[60px] md:w-[6vw] border-r border-gray-500 border-opacity-50">124</td>
                <td className="text-center font-bold px-2 w-[60px] md:w-[6vw] h-fit border-r border-gray-500 border-opacity-50">29</td>
                <td className="text-center font-bold px-2 w-[60px] h-fit md:w-[6vw]">25 May 2025</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
  


   
  

  );
};

export default TicketsStatusTable;
