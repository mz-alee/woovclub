"use client";
import React from "react";
import leftCutImage from "../../../public/cardCutFromLeftTopImage.png";
import Image from "next/image";
import { poppins } from "@/app/components/Font";
import { FaHeart } from "react-icons/fa6";
import { FaComment } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";
const CompaignDataLeft = () => {
  return (
    <div>
      <div>
        <div
          className="h-[380px] p-2 w-[250px]  bg-cover  flex flex-col justify-between"
          style={{ backgroundImage: "url('/cardCutFromLeftTopImage.png')" }}
        >
          <div className=" ml-8  py-2">
            <h1
              className={`${poppins.className} text-gray-200 font-[600] text-[12px] md:text-[0.7vw] capitalize`}
            >
              Ford F150 Raptor Club{" "}
            </h1>
            <h3 className={`${poppins.className} text-[8px] text-gray-300`}>
              2 days ago
            </h3>
          </div>
          <div className="  bg-[#505050] rounded-lg w-full h-[35vh]"></div>
          <div className=" w-full flex justify-between ">
            <div className="flex gap-2">
              <div className='flex items-center gap-2'>
                <FaHeart />
                <p  className={`${poppins.className} text-[8px] text-gray-300`}>N/A</p>
              </div>
              <div className='flex items-center gap-2'>
                <FaComment />
                <p  className={`${poppins.className} text-[8px] text-gray-300`}>N/A</p>
              </div>
            </div>
            <div>
              <RiSendPlaneFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompaignDataLeft;
