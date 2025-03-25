import React from "react";
import TicketRavenue from './components/TicketRavenue';
import TotalTickets from './components/TotalTickets';
import { poppins } from './components/Font';
import Navbar from './components/Navbar';
const Landingpage = () => {
  return (
    <div className=" flex flex-col gap-6 w-full h-screen  ">
      <Navbar/>
      {/* <MyAreaChart/> */}
      <div className="row1 text-white h-fit  flex flex-col lg:flex-row  items-center  px-4 ">
        <div className="details h-[10rem]  relative ">
          <h1 className={`${poppins.className} text-2xl mb-4 italic mt-2 font-[900]  md:text-[5vw] capitalize `}>
            manage your ticket
          </h1>
          <button className={`${poppins.className} capitalize italic font-[600]  bg-amber-300 md:absolute bottom-4 right-15 text-black rounded-4xl px-10 py-2`}>
            create new ticket
          </button>
        </div>
        <div className="card-containe  mt-4 flex  gap-6 flex-col md:flex-row">
        <TicketRavenue/>  
            <TotalTickets/>
          
        </div>
      </div>
      <div className="row2 p-2 ">
        <div className="header text-white flex items-center gap-4">
          <div>
            <h1 className="text-sm md:text-xl">Available Tickets</h1>
            <p className="capitalize font-light text-sm">
              sort by updated date
            </p>
          </div>
          <div className="btns items-center flex gap-2">
            <button className="border text-[10px] h-8 md:h-8 md:text-[1rem] border-white rounded-2xl text-white px-4 ">
              Hosted
            </button>
            <button className="bg-blue-400 h-8 text-[12px] text-center w-[5rem] md:h-8 md:text-[1rem] md:w-[7rem] text-black rounded-2xl px-2 py-1">
              Club events
            </button>
          </div>
        </div>
        <div className="detail-container text-white h-full w-full p-4">
          <div className="table  w-full">
            <table className="w-full border-collapse">
              <thead>
                <tr className="text-sm font-light flex  justify-between">
                  <td className="text-left px-2 py-2 flex-1">Name</td>
                  <div className="flex gap-4">
                    <td className="text-right py-2 px-2">Status</td>
                    <td className="text-right py-2 px-2">Total</td>
                    <td className="text-right py-2 px-2">Booked</td>
                    <td className="text-right py-2 px-2">Date</td>
                  </div>
                </tr>
              </thead>

              <tbody className="flex  h-[10rem]  flex-col gap-2 overflow-y-scroll scrollbar-hide ">
                {[...Array(15)].map((_, index) => (
                  <tr
                    key={index}
                    className="bg-white/10 text-[10px] sm:text-sm  flex justify-between rounded-lg px-2 "
                  >
                    <td className="text-left   px-2 py-1 flex-1">new football event</td>
                    <div className="flex gap-4">
                      <td className="text-right py-1 pr-2 text-green-400">Available</td>
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
