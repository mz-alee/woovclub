import React from "react";
import Image from "next/image";
import { poppins } from "../../components/Font";
import person1 from '../../../public/person1.png'
import person2 from '../../../public/person2.png'
import person3 from '../../../public/person3.png'
const MatchCard = ({ color }) => {
  return (
    <div
      className={`cutrow hosted-match  w-[50vw] md:w-full h-[25vh] flex flex-col justify-center  md:h-[23vh] px-[1.5vw] py-[1vh] `}
      style={{ backgroundColor: `${color}` }}
    >
      <div className="flex items-center justify-between border-b border-gray-500 ">
        <h1
          className={`${poppins.className} capitalize font-[600] italic w-[14vw]  text-sm md:text-[2vw]`}
        >
          basket ball match
        </h1>
        <div className="flex ">
          <div className="bg-white h-[50px] w-[50px] lg:h-[7.5vh] lg:w-[3.5vw] flex justify-center items-center rounded-full border-1 border-[#55299b] shadow-lg -ml-[1vw]  first:ml-0">
            <Image src={person1} alt="prfile image" />
          </div>
          <div className="bg-white h-[50px] w-[50px] lg:h-[7.5vh] lg:w-[3.5vw] flex justify-center items-center rounded-full border-1 border-[#55299b] shadow-lg -ml-[1vw] ">
            <Image src={person2} alt="prfile image" />
          </div>
          <div className="bg-white h-[50px] w-[50px] lg:h-[7.5vh] lg:w-[3.5vw] flex justify-center items-center rounded-full border-1 border-[#55299b] shadow-lg -ml-[1vw] ">
            <Image src={person3} alt="prfile image" />
          </div>
          <div className="bg-white h-[50px] w-[50px] lg:h-[7.5vh] lg:w-[3.5vw] flex justify-center items-center rounded-full border-1 border-[#55299b] shadow-lg -ml-[1vw] ">
            <Image src={person1} alt="prfile image" />
          </div>
          <div className="bg-gray-900 h-[50px] w-[50px] lg:h-[7.5vh] lg:w-[3.5vw] flex justify-center items-center rounded-full border-1 border-[#55299b] shadow-lg -ml-[1vw] ">
            <h1 className={`${poppins.className} italic font-[400]`}> +2</h1>
          </div>
        </div>
      </div>
      <div className="footer flex w-full py-[1vh] items-center  ">
        <div className="date flex w-full items-center justify-between gap-[0.5vw] text-sm md:text-[1vw] capitalize">
          <h1>20 May 2025</h1>
          <h1 className="text-yellow-300">02:00pm</h1>
        </div>
      </div>
    </div>
  );
};

export default MatchCard;
