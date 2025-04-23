import React from "react";
import AlHILALProfile from "../../public/Alhilalprofile.png";
import SaudiProfile from "../../public/SaudiProfile.png";
import Image from "next/image";
import { poppins } from "./Font";
const Hostedmatchcard = () => {
  return (
    <div
      className={`lr-cut-div hosted-match bg-[#55299b] -z-10 w-full md:w-full flex flex-col justify-between h-[24vh] sm:h-[30vh]  md:h-[26vh] px-[1.5vw] py-[1vh] `}
    >
      <h1 className="text-[#e5c839] italic font-[400] text-center text-sm md:text-[1.2vw]">
        Hosted Match
      </h1>
      <div className="flex items-center justify-between border-b-2 border-dotted pb-2  border-black ">
        <div className="profile-1 flex gap-[0.5vh] flex-col items-center">
          <div className="bg-white h-[50px] w-[50px]  md:h-[40px] md:w-[40px]  lg:h-[60px] lg:w-[60px] flex justify-center items-center rounded-full">
            <Image
              src={SaudiProfile}
              alt="profile"
              className="w-fit h-fit  md:h-[40px] md:w-[40px]  lg:h-[60px] lg:w-[60px] object-center"
            />
          </div>
          <h1 className="text-sm md:text-[1vw] uppercase">Saff</h1>
        </div>
        <div className="vs-box w-[3vw] flex items-center justify-center">
          <h1
            className={`${poppins.className} font-[600] italic text-[#e5c839] text-center text-xl md:text-[4vw] flex items-center`}
          >
            v<div className="border-l border-gray-500 h-[10vh] -z-1 "></div>s
          </h1>
        </div>

        <div className="profile-2 flex flex-col gap-[0.5vh] items-center">
          <div className="bg-white h-[50px] w-[50px]  md:h-[40px] md:w-[40px]  lg:h-[60px] lg:w-[60px] flex justify-center items-center rounded-full">
            <Image
              src={AlHILALProfile}
              alt="profile"
              className="w-fit h-fit   md:h-[40px] md:w-[40px]  lg:h-[60px] lg:w-[60px] object-center"
            />
          </div>
          <h1 className="text-sm md:text-[1vw] uppercase">AL hilal</h1>
        </div>
      </div>
      <div className="footer flex w-full items-center justify-between">
        <h1 className="text-sm md:text-[1vw] capitalize">friendly match</h1>
        <div className="">
          <h2 className="opacity-60 text-[10px] md:text-[0.8vw]">seats</h2>
          <h1 className="text-sm md:text-[0.9vw]">12 of 24</h1>
        </div>
      </div>
    </div>
  );
};

export default Hostedmatchcard;
