"use client";
import React, { useState } from "react";
import { poppins } from "../components/Font";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { EventInformationTable } from "../components/Event-information-table";
import Hostedmatchcard from "../components/Hostedmatchcard";
import { useRouter } from "next/navigation";
import { RiArrowRightSLine } from "react-icons/ri";

import Dropdown from "../components/Dropdown";
import Link from "next/link";
import Ticketlist from "./components/Ticketlist";
import Pagecount from '../components/pagecount';
const newticketpage3 = () => {
  const [ticketprice, setticketprice] = useState(30);
  const router = useRouter();
  return (
    <div className=" md:overflow-y-hidden h-[90vh] ticket-page w-full min-h-[90vh]  text-white grid md:grid-cols-12">
      <div className="left-container h-full md:col-span-4   ">
        <div className="leftside md:w-[25vw]  h-full   flex flex-col items-center py-[0.5vh] gap-[1vw] ">
        <div className="header flex  w-full items-center gap-[1vw] py-[1vh] justify-between  ">
                <Link
                  href="/createnewticket"
                  className={`${poppins.className} font-[600] bg-[#45b7db] w-fit h-[5vh] px-[0.7vw] text-sm md:text-[0.7vw] flex items-center gap-[0.5vw] text-black rounded-2xl py-[1vh]`}
                >
                  <MdOutlineKeyboardArrowLeft className="text-[1.3vw] font-light" />
                  Tickets Management
                </Link>
                <h1
                  className={`${poppins.className} italic text-sm md:text-[1vw]`}
                >
                  Create New Ticket
                </h1>
                <h3
                  className={`${poppins.className} italic font-[600] text-[0.8vw] flex gap-[0.3vw]`}
                >
                  1 <span className="text-gray-400">of</span>
                  <span className="text-gray-400">3</span>
                </h3>
              </div>
          <div className="w-full flex flex-col items-center gap-[1.5vw] border-r border-gray-600 pr-[2vw]">
            <div className="  border-b   w-full  md:w-full border-gray-700 py-[2vh]">
              <Hostedmatchcard />
            </div>
            <EventInformationTable />
          </div>
        </div>
      </div>
      {/* right section  */}
      <div className="scrollbar-hide w-full  h-full md:overflow-y-scroll flex flex-col    md:col-span-8 py-[4vh] md:pt-[12vh]">
        {/* ticket setting  */}
        <div className="setting flex flex-col gap-2 ">
          <h1 className="capitalize ">ticket settings</h1>
          {/* setting container  */}
          <div className="setting-container px-[1vw] py-[1vh] text-black bg-[#ededed] w-full min:h-[80vh] rounded-[1.5vw]  ">
            {/* row1  */}
            <div className="border-b border-gray-400 w-full h-[12vh]  flex justify-between items-center">
              <div>
                <h1 className={`${poppins.className} text-lg font-[500]`}>
                  Capacity
                </h1>
                <p className="text-gray-600 text-[12px]">
                  Choose the number of seats available
                </p>
              </div>
              {/* dropdownlist  */}
              <div className="dropdownlist relative bg-[#45b7db] rounded-[1.5vw] h-[7vh] min:w-[15vw]  md:h-[7vh] md:w-[8vw] py-2 flex justify-between items-center px-2">
                <h1 className={`${poppins.className} font-[600] italic`}>
                  124
                </h1>
                <p className="text-gray-500  text-[12px]">Seat</p>
                <Dropdown name={"Seat"} top={"20px"} />
              </div>
            </div>
            {/* row2  */}
            <div className="border-b border-gray-400 w-full h-[12vh]  flex justify-between items-center">
              <div>
                <h1 className={`${poppins.className} text-lg font-[500]`}>
                  Court
                </h1>
                <p className="text-gray-600 text-[12px]">
                  Select the court the game will be played in
                </p>
              </div>
              {/* dropdownlist  */}
              <div className="dropdownlist relative bg-[#45b7db] rounded-[1.5vw] h-[7vh] min:w-[15vw]  md:h-[7vh] md:min-w-[8vw] py-2 flex justify-between items-center px-2">
                <h1 className={`  text-sm`}>North coast football court</h1>
                <Dropdown />
              </div>
            </div>
            {/* tickect type row  */}
            <div className="border-b border-gray-400 w-full min:h-[22vh] py-3  flex flex-col gap-[2vh] ">
              <div>
                <h1 className={`${poppins.className} text-lg font-[500]`}>
                  Ticket Type
                </h1>
                <p className="text-gray-600 text-[12px]">
                  Add one or more ticket type
                </p>
              </div>
              {/* ticket category list btns  */}

              <Ticketlist
                name={"vip"}
                ticketnumber={"Ticket 1"}
                ticketprice={ticketprice}
                poppins={poppins}
                setticketprice={setticketprice}
              />
              <Ticketlist
                name={"Platinum"}
                ticketnumber={"Ticket 2"}
                ticketprice={ticketprice}
                poppins={poppins}
                setticketprice={setticketprice}
              />
              <Ticketlist
                name={"Gold"}
                ticketnumber={"Ticket 3"}
                ticketprice={ticketprice}
                poppins={poppins}
                setticketprice={setticketprice}
              />
              <Ticketlist
                name={"Silver"}
                ticketnumber={"Ticket 4"}
                ticketprice={ticketprice}
                poppins={poppins}
                setticketprice={setticketprice}
              />

              {/* add new ticket type  */}
              <div
                className={`${poppins.className} font-[600] border-dashed border-1 flex justify-between px-4 items-center  border-gray-800 w-full h-[8vh] rounded-4xl`}
              >
                <h1 className={`${poppins.className} font-[600]`}>
                  Add new ticket type
                </h1>
                <span>+</span>
              </div>
            </div>
            {/* ticket map  */}
            <div className="ticket-map">
              <h1>Available Ticket</h1>
            </div>
          </div>
          {/* footer  */}
          <div className="footer mt-[1vw]">
            <div className="flex justify-between items-center">
              <a href="/" className="font-light text-sm md:text-[1.1vw]">
                Reset
              </a>
              <Link
                href="/newticketpage3"
                className={`${poppins.className} italic font-[600] bg-[#e5c839] text-[1.3vw] text-black rounded-[2vw] w-[6.5vw] px-[1vw] py-[1vh] flex items-center  gap-[0.3vw]`}
              >
                Next
                <span>
                  <RiArrowRightSLine />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default newticketpage3;
