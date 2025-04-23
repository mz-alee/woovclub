"use client";
import React, { useState, useEffect } from "react";
import { poppins } from "../components/Font";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import Dropdown from "../components/Dropdown";
import { useRouter } from "next/navigation";
import Footer from "./components/Footer";
import HostedLeftSide from "./components/HostedLeftSide";
import HostedRightSide from "./components/HostedRightSide";
import TicketSettingComponent from "./components/TicketSettingComponent";
import TicketSettingLeft from "./components/TicketSettingLeft";
import Page3RightSide from "./components/Page3RightSide";
import ClubEventRight from './components/ClubEventRight';
import ClubEventLeft from './ClubEventLeft';
const Page = ({togglebtn}) => {
  const [pageincrement, setpageincreament] = useState(1);
  const [isActive,setIsActive]=useState(true)
  const [number, setnumber] = useState(1);
  const router = useRouter();
  const handlepagenum = () => {
    setnumber((prevNumber) => prevNumber + 1);
    console.log(pageincrement);
  };
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [number]);

  const toggleFunction=()=>{
    setIsActive(!isActive)
    console.log(isActive);
    
  }
  return (
    <div className="ticket-page w-full   text-white grid md:grid-cols-12">
      <div className="left-container w-full h-full  md:col-span-4   ">
        {/* left side container  */}
        <div className="leftside w-full md:w-[25vw]  h-full  flex flex-col items-center py-[0.5vh] gap-[1vw] ">
          {/* header  */}
          <div className="header flex  w-full items-center  gap-[1vw] py-[1vh] justify-between  ">
            <button
              // disabled={number === 1}
              onClick={() => {
                if (number === 1) {
                  router.push("/");
                } else {
                  setnumber(number - 1);
                }
              }}
              className={`${poppins.className} font-[600] bg-[#45b7db] hover:text-white transition  hover:-translate-y-0.5 duration-200 group  w-fit h-[5vh] px-[0.7vw] text-sm md:text-[0.7vw] flex items-center gap-[0.5vw] text-black rounded-2xl py-[1vh]`}
            >
              <MdOutlineKeyboardArrowLeft className="text-[1.3vw] font-light group-hover:rotate-95 duration-200" />
              {number === 1 && "Tickets Management"}
              {number === 2 && "Hosted Page"}
              {number === 3 && "Ticket Setting Page"}
            </button>
            <h1 className={`${poppins.className} italic text-sm md:text-[1vw]`}>
              Create New Ticket
            </h1>
            <h3
              className={`${poppins.className} italic font-[600] text-sm flex gap-[0.3vw]`}
            >
              {number} <span className="text-gray-400">of</span>
              <span className="text-gray-400">3</span>
            </h3>
          </div>
          {/* left side content  */}
          <div className="w-full flex  h-[70vh] flex-col items-center gap-[1.5vw] border-r border-gray-600 pr-[2vw]">
            {number === 1 ? isActive? <HostedLeftSide /> : <ClubEventLeft />:''}
            {number === 2 || number === 3 ? <TicketSettingLeft/>:''}
            {/* {number === 3 && <TicketSettingLeft/>} */}
          </div>
        </div>
      </div>
      <div className="w-full h-full  flex flex-col  items-center  md:col-span-8 py-[4vh] md:pt-[6vh]">
        <div className="box1 flex flex-col w-full lg:flex-row gap-2 my-[2vh] ">
          {/* right side container  */}
          <div className="scrollbar-hide w-full md:h-[70vh] min-md:w-[70vw]   overflow-y-scroll  ">
            {/* header  */}
          
            {/* right side content  */}
            <div className=" w-full">
              {number === 1 ? isActive?<HostedRightSide isActive={isActive} toggleFunction={toggleFunction}/>:<ClubEventRight toggleFunction={toggleFunction}/>:""}
              {number === 2 && <TicketSettingComponent />}
              {number === 3 && <Page3RightSide />}
            </div>
            {/* footer  */}
            <Footer handlepagenum={handlepagenum} number={number} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;






