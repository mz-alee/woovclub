import React, { useEffect } from "react";
import Image from "next/image";
import { poppins } from "../../components/Font";
import person1 from "../../../public/person1.png";
import person2 from "../../../public/person2.png";
import person3 from "../../../public/person3.png";
import useImages from "@/useImages";
const MatchCard = ({ color }) => {
  const [data] = useImages();

  console.log("data from custom hook in match card", data);

  return (
    <div
      className={` rounded-xl  w-full  h-[20vh] flex flex-col  justify-between sm:h-[20vh] md:h-[120px] lg:h-[22vh] px-[1.5vw] py-[1vh]  `}
      style={{ backgroundColor: `${color}` }}
    >
      <div className="flex items-center justify-between  py-2 h-[13vh] border-b border-gray-500 ">
        <h1
          className={`${poppins.className} capitalize font-[600] italic w-[14vw]  text-sm md:text-[2vw]`}
        >
          basket ball match
        </h1>
        <div className="flex">
          {data.slice(0, 4).map((items, index) => (
            <div
              key={index}
              className="bg-white h-[40px] w-[40px] lg:h-[55px] lg:w-[55px] flex justify-center items-center rounded-full border-1 border-[#55299b] shadow-lg -ml-[1vw] first:ml-0"
            >
              <img src={items.src} alt="person images" />
            </div>
          ))}

          {data.length > 4 && (
            <div className="bg-gray-900 h-[40px] w-[40px] lg:h-[55px] lg:w-[55px] flex justify-center items-center rounded-full border-1 border-[#55299b] shadow-lg -ml-[1vw]">
              <h1 className={`${poppins.className} italic font-[400]`}>
                +{data.length - 4}
              </h1>
            </div>
          )}
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
