import { poppins } from "@/app/components/Font";
import React from "react";

const CompaignSettingLeft = () => {
  return (
    <div className="w-full">
      {/* compaign title container  */}
      <div className="border-b border-[#383839] w-full flex flex-col gap-[1vh]">
        <h1
          className={`${poppins.className} font-[600] text-[12px] md:text-[0.8vw] capitalize`}
        >
          comapign details
        </h1>
        {/* title  */}
        <h1
          className={`${poppins.className} font-[600] text-[1.4vw] uppercase`}
        >
          A
        </h1>
      </div>
      <div className="flex flex-col gap-4 py-4 border-b border-[#383839]">
        {/* type  */}
        <div className={`flex justify-between w-full capitalize`}>
          <h1 className={`text-sm md:text-[0.9vw]`}>type</h1>
          <h1
            className={`${poppins.className} font-[900] text-[1.2vw] uppercase`}
          >
            courts
          </h1>
        </div>
        {/* support type  */}
        <div className={`flex justify-between w-full capitalize`}>
          <h1 className={`text-sm md:text-[0.9vw]`}> sport type</h1>
          <h1
            className={`${poppins.className} font-[900] text-[1.2vw] uppercase`}
          >
            Paintball
          </h1>
        </div>
      </div>
      {/* total audience  */}
      <div className="border border-[#383839] h-[70px] w-full p-2 rounded-2xl mt-6">
        <h3 className={`text-sm md:text-[0.7vw] text-gray-300`}>
          Total Audience
        </h3>
        <h1
          className={`text-center flex items-center gap-2 justify-center ${poppins.className} italic font-[900]`}
        >
          <span>1</span> <span className={`border-b block w-3`}></span>
          <span>1</span>
        </h1>
      </div>
      {/* estimated reach  */}
      <div className="w-full flex flex-col gap-2 border  border-[#383839] p-2 mt-4 rounded-2xl min-h-[35vh]">
        <div className="flex flex-col gap-4  border-b border-[#383839]">
          <h1 className={`text-sm md:text-[0.8vw] text-gray-300`}>
            Estimated Reach
          </h1>
          <h1
            className={`text-center flex items-center gap-2 justify-center ${poppins.className} italic font-[900]`}
          >
            <span>1</span> <span className={`border-b block w-3`}></span>
            <span>1</span>
          </h1>
        </div>
        <div className="flex flex-col gap-4  border-b border-[#383839]">
          <h1 className={`text-sm md:text-[0.8vw] text-gray-300`}>
            Estimated Impressions
          </h1>
          <h1
            className={`text-center flex items-center gap-2 justify-center ${poppins.className} italic font-[900]`}
          >
            <span>1</span> <span className={`border-b block w-3`}></span>
            <span>1</span>
          </h1>
        </div>
        <div className="flex flex-col gap-4  border-b border-[#383839]">
          <h1 className={`text-sm md:text-[0.8vw] text-gray-300`}>
            Estimated Clicks
          </h1>
          <h1
            className={`text-center flex items-center gap-2 justify-center ${poppins.className} italic font-[900]`}
          >
            <span>1</span> <span className={`border-b block w-3`}></span>
            <span>1</span>
          </h1>
        </div>
        <div className="flex gap-2  ">
          <h1 className={`text-sm md:text-[0.8vw] text-gray-300`}>Frequency</h1>
          <div className='border border-[#383839] h-4 w-4 rounded-full'><h1 className={`text-center  justify-center ${poppins.className} italic font-[600] text-yellow-300 text-[10px]`}>i</h1></div>
        </div>
      </div>
    </div>
  );
};

export default CompaignSettingLeft;
