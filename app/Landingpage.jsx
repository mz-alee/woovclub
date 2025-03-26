import React from "react";
import TicketRavenue from "./components/TicketRavenue";
import TotalTickets from "./components/TotalTickets";
import { poppins } from "./components/Font";
import { FaPlus } from "react-icons/fa";
const Landingpage = () => {
  return (
    <div className=" main-page  flex flex-col min-h-[90vh] w-fit px-[1vw] gap-[2.5vh]  items-center justify-between py-[2vh] ">
      <div className="row1 text-white h-fit  flex flex-col lg:flex-row  items-center  px-[1.5vw] gap-2">
        <div className="details h-fit  flex flex-col sm:items-end ">
          <h1
            className={`${poppins.className} text-2xl mb-4 italic mt-2 font-[900]  md:text-[5vw] capitalize `}
          >
            manage your ticket
          </h1>
          <button
            className={`${poppins.className} text-[12px] md:text-[1.2vw]  w-fit flex gap-1 items-center capitalize italic font-[600]  bg-amber-300  text-black rounded-[2vw] px-[2vw] py-[0.9vh]`}
          >
            create new ticket
            <FaPlus className="text-sm md:text-[1vw]" />
          </button>
        </div>
        <div className="card-containe  mt-[2vh] flex  gap-[2vw] flex-col md:flex-row">
          <TicketRavenue />
          <TotalTickets />
        </div>
      </div>
      <div className="cutrow md:h-[40vh] w-[90vw] ">
        <div className="header text-white flex flex-col sm:flex-row  px-[1.4vw] py-[1vh] items-center gap-[1.5vw]">
          <div className="flex sm:block text-sm md:text-lg lg:text-[1vw] gap-[1vh] justify-between">
            <h1>Available Tickets</h1>
            <p className="capitalize font-light ">sort by updated date</p>
          </div>
          <div className="btns items-center flex gap-[1vw]">
            <button className="border text-[10px] h-[4vh]  md:h-[5vh] md:text-[1vw] border-white rounded-[1.5vw] text-white px-[1.5vw] ">
              Hosted
            </button>
            <button className="bg-blue-400 text-[10px]  h-[4vh] md:h-[5vh] md:text-[1vw] text-black rounded-[1.5vw] px-2 py-1">
              Club events
            </button>
          </div>
        </div>
        <div className="detail-container  text-white h-full w-full p-4 ">
          <div className="table  w-full">
            <table className="w-full border-collapse">
              <thead>
                <tr className="text-sm md:text-lg lg:text-[1vw] font-light flex  justify-between">
                  <td className="text-left px-2 py-2 flex-1">Name</td>
                  <div className="flex text-sm md:text-lg lg:text-[1vw]  gap-4">
                    <td className="text-right py-2 px-2">Status</td>
                    <td className="text-right py-2 px-2">Total</td>
                    <td className="text-right py-2 px-2">Booked</td>
                    <td className="text-right py-2 px-2">Date</td>
                  </div>
                </tr>
              </thead>

              <tbody className="flex  h-[10rem] sm:h-[20vh]  flex-col gap-2 overflow-y-scroll scrollbar-hide ">
                {[...Array(15)].map((_, index) => (
                  <tr
                    key={index}
                    className="bg-white/10 text-[10px] md:text-lg lg:text-[1vw]  flex justify-between rounded-[2vw] px-[0.5vw] "
                  >
                    <td className="text-left   px-2 py-1 flex-1">
                      new football event
                    </td>
                    <div className="flex gap-4">
                      <td className="text-right py-1 pr-2 text-green-400">
                        Available
                      </td>
                      <td className="text-right py-1 pr-2">124</td>
                      <td className="text-right py-1 ">100</td>
                      <td className="text-right px-2 py-1">28 Mar</td>
                    </div>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
