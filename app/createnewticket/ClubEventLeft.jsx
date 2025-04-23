import Link from "next/link";
import React from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { poppins } from "../components/Font";
import ExperLevelCard from "./components/ExperLevelCard";
import person1 from "../../public/person1.png";
import person2 from "../../public/person2.png";
import person3 from "../../public/person3.png";
import Image from "next/image";
import football from "../../public/Footbal.png";
import useImages from "@/useImages";
const ClubEventLeft = () => {
  const [data] = useImages();
  return (
    <div className="leftside md:w-[25vw]  h-full px-[20px]  flex flex-col items-center py-[0.5vh] gap-[1vw] ">
      <div className="  border-b   w-full relative md:w-full border-gray-700 py-[2vh]">
        <div className=" absolute right-2 ">
          <Image
            className=" w-[30vw] sm:w-[20vw] md:w-[10vw]"
            src={football}
            alt="football image"
          />
        </div>
        <ExperLevelCard />
        <p
          className={`${poppins.className} font-light text-[12px] md:text-[0.8vw] mt-[2vh] `}
        >
          But we all get bored from seeing the same thing over and over again.
          Besides, surprising the rest of your design team.
        </p>
      </div>
      <div className="players w-full h-full ">
        <h1 className="text-sm md:text-[1vw]">players</h1>
        <div className="h-[20vh] w-full mt-2 ">
          <div className="flex gap-[1vw] ">
            <div className="profile1">
              <div className=' flex gap-4 flex-wrap'>
                {data.map((items, inde) => {
                  return (
                    <>
                    <div className='flex flex-col'>
                      <div className="bg-white h-[50px] w-[50px] lg:h-[7.5vh] lg:w-[3.5vw] flex justify-center items-center rounded-full border-1 border-[#55299b] shadow-lg  first:ml-0">
                        <img src={items.src} alt="prfile image" loading='lazy'/>
                      </div>
                      <h1 className="text-[12px] md:text-[0.9vw] text-center">
                      {items.name}
                      </h1>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClubEventLeft;
