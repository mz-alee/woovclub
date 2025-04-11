import React from "react";
import UpcomingMatchCard from './UpcomingMatchCard';
import { poppins } from '@/app/components/Font';
const HostedRightSide = () => {
  return (
    <div className="  w-full  upcoming-match-container flex flex-col gap-[1vh]  ">
      <h3 className={`${poppins.className} font-[300] lg:text-[13px] `}>
        Games
      </h3>
      <UpcomingMatchCard color={"#55299b"} />
      <UpcomingMatchCard color={"rgba(84, 83, 83, 0.434)"} />
      <h3 className={`${poppins.className} font-[300] lg:text-[13px]`}>
        Competition
      </h3>
      <UpcomingMatchCard color={"#55299b"} />
      <UpcomingMatchCard color={"rgba(84, 83, 83, 0.434)"} />
    </div>
  );
};

export default HostedRightSide;
