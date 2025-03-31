import React from "react";
import AlHILALProfile from "../../../public/Alhilalprofile.png";
import SaudiProfile from "../../../public/SaudiProfile.png";
import Image from 'next/image';
import { poppins } from '../../components/Font';
const Hostedmatchcard = () => {
  return (
    <div
      className={`lr-cut-div hosted-match bg-white/10 w-[50vw] md:w-full h-[25vh]  md:h-[23vh] px-[1.5vw] py-[1vh] `}
    >
      <h1 className="text-[#e5c839] text-center text-sm md:text-[1.2vw]">
        Hosted Match
      </h1>
      <div className="flex items-center justify-between border-b border-gray-500 ">
        <div className="profile-1 flex gap-[0.5vh] flex-col items-center">
          <div className="bg-white h-[50px] w-[50px]  lg:h-[7.5vh] lg:w-[3.5vw] flex justify-center items-center rounded-full">
            <Image
              src={SaudiProfile}
              alt='profile'
              className="w-fit h-fit md:w-[3vw] md:h-[6.5vh] object-center"
            />
          </div>
          <h1 className="text-sm md:text-[1vw] uppercase">Saff</h1>
        </div>
        <div className="vs-box w-[3vw] flex items-center justify-center  ">
          <h1
            className={`${poppins.className} font-[600] italic text-[#e5c839] text-center text-xl md:text-[4vw]`}
          >
            vs
          </h1>
        </div>
        <div className="profile-2 flex flex-col gap-[0.5vh] items-center">
          <div className="bg-white h-[50px] w-[50px]  lg:h-[7.5vh] lg:w-[3.5vw] flex justify-center items-center rounded-full">
            <Image
              src={AlHILALProfile}
              alt='profile'
              className="w-fit h-fit md:w-[3vw] md:h-[6.5vh] object-center"
            />
          </div>
          <h1 className="text-sm md:text-[1vw] uppercase">AL hilal</h1>
        </div>
      </div>
      <div className="footer flex w-full py-[1vh] items-center justify-center ">
        <h1 className="text-sm md:text-[1vw] capitalize">friendly match</h1>
        
      </div>
    </div>
  );
};

export default Hostedmatchcard;
