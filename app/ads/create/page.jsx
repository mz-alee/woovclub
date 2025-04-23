"use client";
import React, { useState, useEffect } from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useRouter } from "next/navigation";
import { poppins } from '@/app/components/Font';
import HostedRightSide from '@/app/createnewticket/components/HostedRightSide';
import ClubEventRight from '@/app/createnewticket/components/ClubEventRight';
import Page3RightSide from '@/app/createnewticket/components/Page3RightSide';
import Footer from '@/app/createnewticket/components/Footer';
import HostedLeftSide from '@/app/createnewticket/components/HostedLeftSide';
import ClubEventLeft from '@/app/createnewticket/ClubEventLeft';
import TicketSettingLeft from '@/app/createnewticket/components/TicketSettingLeft';
import CreateNewCompaign1 from '../components/NewCompaign1';
import TicketSettingComponent from '@/app/createnewticket/components/TicketSettingComponent';

const Page = () => {
  const [pageincrement, setpageincreament] = useState(1);
  const[totalpage,settotalpage]=useState(4)
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
    <div className="ticket-page w-full   text-white grid ">
      <div className="left-container w-full h-full     ">
        {/* left side container  */}
        <div className="leftside w-full md:w-[25vw]  h-full  flex flex-col items-center py-[0.5vh] gap-[1vw] ">
          {/* header  */}
          <div className="header flex  w-full items-center  gap-[1vw] py-[1vh] justify-between  ">
            <button
              // disabled={number === 1}
              onClick={() => {
                if (number === 1) {
                  router.push("/ads");
                } else {
                  setnumber(number - 1);
                }
              }}
              className={`${poppins.className} font-[600] capitalize bg-[#45b7db] hover:text-white transition  hover:-translate-y-0.5 duration-200 group  w-fit h-[5vh] px-[0.7vw] text-[10px] md:text-[0.7vw] flex items-center gap-[0.5vw] text-black rounded-2xl py-[1vh]`}
            >
              <MdOutlineKeyboardArrowLeft className="text-sm md:text-[1.3vw] font-light group-hover:rotate-95 duration-200" />
              {number === 1 && "compaign details"}
              {number === 2 && "compaign details"}
              {number === 3 && "compaign details"}
            </button>
            <h1 className={`${poppins.className} italic text-sm md:text-[1vw]`}>
              Create New Ticket
            </h1>
            <h3
              className={`${poppins.className} italic font-[600] text-sm flex gap-[0.3vw]`}
            >
              {number} <span className="text-gray-400">of</span>
              <span className="text-gray-400">4</span>
            </h3>
          </div>
          {/* left side content  */}
        
        </div>
      </div>
      <div className="w-full h-full  flex flex-col  items-center  md:col-span-8 py-[4vh] md:pt-[6vh]">
        <div className="box1 flex flex-col w-full lg:flex-row gap-2 my-[2vh] ">
          {/* right side container  */}
          <div className="scrollbar-hide w-full    overflow-y-scroll  ">
            {/* header  */}
          
            {/* right side content  */}
            <div className=" w-full">
              {number === 1 && <CreateNewCompaign1/>}
              
            </div>
            {/* footer  */}
            <Footer totalpage={totalpage} handlepagenum={handlepagenum} number={number} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;






