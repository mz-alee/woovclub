import React from "react";
import Image from "next/image";
import { poppins } from "../../components/Font";
import person1 from '../../../public/person1.png'
import person2 from '../../../public/person2.png'
import person3 from '../../../public/person3.png'
const ExperLevelCard = () => {
  return (
    <div
      className={`expert-match bg-[#55299b] rounded-2xl w-[50vw] md:w-full min-h-[25vh] flex flex-col gap-[1vh]  md:min-h-[26vh] px-[1.5vw] py-[1vh] `}
    >
      <h1 className={`${poppins.className} italic text-[#e5c839] font-[600]  text-sm md:text-[1vw]`}>Expert Level</h1>
      <div className="flex items-center  border-b border-gray-500 pb-[1vh] ">
        <div className="profiles flex flex-col ">
          <div className='flex  items-center '>
          <div className="bg-white h-[35px] w-[35px] md:h-[50px] md:w-[50px] lg:h-[4.5vh] lg:w-[3.5vw] flex justify-center items-center rounded-full border-1 border-[#55299b] shadow-lg -ml-[1vw]  first:ml-0">
            <Image src={person1} alt='prfile image'/>
          </div>
          <div className="bg-white h-[35px] w-[35px] md:h-[50px] md:w-[50px] lg:h-[4.5vh] lg:w-[3.5vw] flex justify-center items-center rounded-full border-1 border-[#55299b] shadow-lg -ml-[1vw] ">
          <Image src={person2} alt='prfile image'/>

          </div>
          <div className="bg-white h-[35px] w-[35px] md:h-[50px] md:w-[50px] lg:h-[4.5vh] lg:w-[3.5vw] flex justify-center items-center rounded-full border-1 border-[#55299b] shadow-lg -ml-[1vw] ">
          <Image src={person3} alt='prfile image'/>

          </div>
          <div className="bg-white h-[35px] w-[35px] md:h-[50px] md:w-[50px] lg:h-[4.5vh] lg:w-[3.5vw] flex justify-center items-center rounded-full border-1 border-[#55299b] shadow-lg -ml-[1vw] ">
          <Image src={person1} alt='prfile image'/>

          </div>
          <div className="bg-gray-900 h-[35px] w-[35px] md:h-[50px] md:w-[50px]  lg:w-[4.5vw] lg:h-[7.5vh] xl:w-[3.5vw] xl:h-[7.6vh] flex justify-center items-center rounded-full border-1 border-[#55299b] shadow-lg -ml-[1vw] ">

              <h1 className={`${poppins.className} italic font-[400]`}> +2</h1>
          </div>
          </div>
          <div className='flex justify-between w-[20vw]  items-end'>
        <h1 className={`${poppins.className} font-[900] italic text-[1.5vw] w-[10vw]`}>basket ball match</h1>
        <p>24</p>
        </div>
        </div>
      </div>
      <div className="footer flex w-full py-[1vh] items-center justify-between ">
        <div className='date-and-time flex gap-[1vw] items-center'>
        <h1 className="text-sm md:text-[1vw] capitalize">20 may 2025</h1>
        <h1 className='text-yellow-400'>02:00pm</h1>
        </div>
        <p>2km</p>
      </div>
    </div>
  );
};

export default ExperLevelCard;
