import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { poppins } from "../components/Font";
import Ticketdemand from "../components/Ticketdemand";
import TotalRavenue from "../components/TotalRavenue";
import MyAreaChart from "../components/Charts/Areachart";
const Ticketspage = () => {
  return (
    <div className="main-page overflow-hidden flex  min-h-screen  px-[1vw]  ">
      <div className="fixed h-screen flex items-center">
        <Sidebar />
      </div>
      <div className="w-full  md:ml-[5vw] px-[2vw]  ">
        <Navbar />
        <div className="ticket-page w-full h-full  text-white grid md:grid-cols-12">
          <div className="left-container h-full md:col-span-4   ">
            <div className="leftside md:w-[25vw]  h-full   flex flex-col items-center py-2 gap-2 ">
              <div className="flex  items-center gap-4 py-4 ">
                <button
                  className={`${poppins.className} bg-blue-400 w-fit h-[5vh] text-sm md:text-[1vw] text-black rounded-2xl px-[2vw] py-[1vh]`}
                >
                  Tickets Management
                </button>
                <h1
                  className={`${poppins.className} italic text-sm md:text-[1.1vw]`}
                >
                  Tickets Details
                </h1>
              </div>
              <div className="w-full flex flex-col items-center gap-4 border-r border-gray-600 pr-[2vw]">
                <div className="  border-b   w-[50vw] md:w-full border-gray-700 py-[2vh]">
                  <div
                    className={`lr-cut-div bg-purple-700 w-[50vw] md:w-full h-[25vh]  md:h-[23vh] `}
                  ></div>
                </div>
                <div className="border md:text-[2vh] px-[1vw] py-[1vh] bg-[#1E1E1E] border-gray-600 h-[40vh] w-[50vw]  md:w-full rounded-[2vw] flex flex-col ">
                  
                    <h1>Event Information</h1>
                    <div className=" w-full  h-full flex flex-col justify-center gap-[2.1vh] ">
                      {[...Array(4)].map((_, index) => {
                        return (
                          <tr className={`flex justify-between ${index !== 3 ? 'border-b border-gray-700 pb-[1vh]' : ''}`}>
                            <td>Type</td>
                            <td>Frindly Match</td>
                          </tr>
                        );
                      })}
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-full md:col-span-8 py-[4vh] md:pt-[12vh]">
            <div className="box1 flex gap-2 my-[2vh] ">
              <Ticketdemand />
              <TotalRavenue />
            </div>
            <div className="cutrow h-[30vh] w-[60vw] "></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticketspage;
