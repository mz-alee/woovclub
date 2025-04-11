import React from "react";
import AlHILALProfile from "../../../public/Alhilalprofile.png";
import SaudiProfile from "../../../public/SaudiProfile.png";
import Image from "next/image";
import { poppins } from "../../components/Font";
const UpcomingMatchCard = ({ color }) => {
  return (
  <div className='border-wrapper'>
    <div
      className={` rounded-lg border border-gray-600 hosted-match  w-full md:w-full h-[20vh] flex flex-col  justify-between sm:h-[20vh] md:h-[18vh] lg:h-[22vh] px-[1.5vw] py-[1vh] `}
      style={{ backgroundColor: `${color}` }}
    >
      <h1 className="text-[#e5c839]  text-[12px] md:text-[1vw]">
        Upcoming Match
      </h1>
      <div className="flex items-center justify-between border-b border-gray-500 ">
        <div className="profile-1 flex gap-[0.5vh] flex-col items-center">
          <div className="bg-white h-[50px] w-[50px]  lg:h-[7.5vh] lg:w-[3.5vw] flex justify-center items-center rounded-full">
            <Image
              src={SaudiProfile}
              className="w-fit h-fit md:w-[3vw] md:h-[6.5vh] object-center"
              alt='profile'
            />
          </div>
          <h1 className="text-[10px] md:text-[1vw] uppercase">Saff</h1>
        </div>
        <div className="vs-box w-[3vw] flex items-center justify-center  ">
          <h1
            className={`${poppins.className} font-[600] italic text-[#45b7db] text-center text-xl md:text-[4vw]`}
          >
            vs
          </h1>
        </div>
        <div className="profile-2 flex flex-col gap-[0.5vh] items-center">
          <div className="bg-white h-[50px] w-[50px]  lg:h-[7.5vh] lg:w-[3.5vw] flex justify-center items-center rounded-full">
            <Image
              src={AlHILALProfile}
              className="w-fit h-fit md:w-[3vw] md:h-[6.5vh] object-center"
              alt='profile'

            />
          </div>
          <h1 className="text-[10px] md:text-[1vw] uppercase">AL hilal</h1>
        </div>
      </div>
      <div className="footer flex w-full py-[1vh] items-center justify-between ">
        <h1 className="text-[10px] md:text-[1vw] capitalize">friendly match</h1>
        <div className="date flex items-center gap-[0.5vw] text-sm md:text-[1vw] capitalize">
          <h1 className='text-[10px] md:text-[1vw]'>20 May 2025</h1>
          <h1 className='text-yellow-300 text-[10px] md:text-[1vw] '>02:00pm</h1>
        </div>
      </div>
    </div>
    </div>
  );
};

export default UpcomingMatchCard;
