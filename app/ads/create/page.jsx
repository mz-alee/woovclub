"use client";
import React, { useState, useEffect } from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useRouter } from "next/navigation";
import { poppins } from "@/app/components/Font";
import CreateNewCompaign1 from "../components/NewCompaign1";
import CompaignSettingRight from "../components/CampaignSettingRight";
import CompaignSettingLeft from "../components/CampaignSettingLeft";
import CompaignDataRight from "../components/CampaignDataRight";
import CompaignDataLeft from "../components/CampaignDataLeft";
import PaymentRight from '../components/PaymentRight';
import PaymentLeft from '../components/PaymentLeft';

const Page = () => {
  const [pageincrement, setpageincreament] = useState(1);
  const [isActive, setIsActive] = useState(true);
  const [number, setnumber] = useState(1);
  const [totalpage, settotalpage] = useState(4);

  const router = useRouter();
  const handlepagenum = () => {
    setnumber((prevNumber) => prevNumber + 1);
    console.log(pageincrement);
  };
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [number]);

  const toggleFunction = () => {
    setIsActive(!isActive);
    console.log(isActive);
  };
  return (
    <div
      className={`ticket-page w-full min:h-[100vh]   text-white ${
        number > 1 && "grid md:grid-cols-12 "
      } `}
    >
      <div
        className={`left-container w-full   flex ${number===4?"md:col-span-9":"md:col-span-3"}  ${number===4 && "h-[100vh] "} ${
          number > 1 && "sm:justify-center"
        } md:justify-start`}
      >
        {/* left side container  */}
        <div
          className={`leftside w-full sm:w-[60vw]  sm:justify-center ${
            number === 3 ? "md:w-[270px]" : "md:w-[20vw]"

          } ${number===4 ? 'md:w-[70vw] items-start':"items-center"}  h-full  flex flex-col   py-[0.5vh] gap-[1vw]`}
        >
          {/* header  */}
          <div className={`header flex  w-full  ${number===4 &&"md:w-[15vw]"} items-center  gap-[1vw] py-[1vh] justify-between  `}>
            <button
              // disabled={number === 1}
              onClick={() => {
                if (number === 1) {
                  router.push("/ads");
                } else {
                  setnumber(number - 1);
                }
              }}
              className={`${poppins.className} font-[600] bg-[#45b7db] hover:text-white transition  hover:-translate-y-0.5 duration-200 group  w-fit h-[5vh] px-[0.7vw] text-[10px] md:text-[0.7vw] flex items-center gap-[0.5vw] text-black rounded-2xl py-[1vh]`}
            >
              <MdOutlineKeyboardArrowLeft className="text-sm md:text-[1.3vw] font-light group-hover:rotate-95 duration-200" />
              {number === 1 && "Campaign Management"}
              {number === 2 && "Ad detail"}
              {number === 3 && "Ad detail"}
            </button>
            <h1
              className={`${poppins.className} italic text-sm md:text-[0.8vw]`}
            >
              Create New Ticket
            </h1>
            <h3
              className={`${poppins.className} italic font-[600] text-sm md:text-[0.8vw] flex gap-[0.3vw]`}
            >
              {number} <span className="text-gray-400">of</span>
              <span className="text-gray-400">{totalpage}</span>
            </h3>
          </div>
          {/* left side content  */}
          {number > 1 && (
            <div className="w-full flex  min-h-[70vh]  flex-col items-center gap-[1.5vw] border-r border-[#383839] pr-[2vw]">
              {number === 2 && <CompaignSettingLeft />}
              {number === 3 && <CompaignDataLeft />}
              {number === 4 && <PaymentLeft />}
            </div>
          )}
        </div>
      </div>
      <div className={`w-full  h-[85vh]  flex flex-col   items-center    ${number===4?"md:col-span-3":"md:col-span-9"} py-[4vh] md:pt-[6vh]`}>
        <div className="box1 flex flex-col w-full lg:flex-row  gap-2 my-[2vh] ">
          {/* right side container  */}
          <div
            className={`scrollbar-hide w-full     overflow-y-scroll ${
              number > 1 && "md:h-[75vh]  w-full "
            }  `}
          >
            {/* header  */}

            {/* right side content  */}
            <div className=" w-full mt-6">
              {number === 1 && (
                <CreateNewCompaign1
                  totalpage={totalpage}
                  handlepagenum={handlepagenum}
                  number={number}
                />
              )}
              {number === 2 && (
                <CompaignSettingRight
                  totalpage={totalpage}
                  handlepagenum={handlepagenum}
                  number={number}
                />
              )}
              {number === 3 && (
                <CompaignDataRight
                  totalpage={totalpage}
                  handlepagenum={handlepagenum}
                  number={number}
                />
              )}
              {number===4&& <PaymentRight/>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
