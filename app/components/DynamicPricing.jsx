import React from "react";

const DynamicPricing = () => {
  return (
    <div className=" border border-gray-600 rounded-xl h-[40vh] w-full overflow-hidden">
      <div className="px-[1vw] py-[1vh]">
        <h1 className="text-[10px] sm:text-[1vw] lg:text-[1.2vw]">
          Dynamic Pricing
        </h1>
      </div>

      <div className="px-[1vw] text-white h-full w-full">
        <div className="w-full">
          <table className="w-full border-collapse">
            <thead>
              <tr className="text-[10px] lg:text-[1vw]  font-light flex gap-2 justify-between px-[0.5vw]">
                <td className="text-left px-2 py-2 flex-1 ">Name</td>
                <td className="text-center py-2 px-2 w-[10%]">Silver</td>
                <td className="text-center py-2 px-2 w-[10%]">Gold</td>
                <td className="text-center py-2 px-2 w-[10%]">Platinum</td>
                <td className="text-center py-2 px-2 w-[10%] text-yellow-500 ">vip</td>
              </tr>
            </thead>

            <tbody className="flex flex-col gap-2 h-[10rem] sm:h-[25vh] overflow-y-scroll scrollbar-hide">
              {[...Array(15)].map((_, index) => (
                <tr
                  key={index}
                  className="bg-white/10  text-[10px]  lg:text-[1vw] flex justify-between items-center gap-2 rounded-[1vw] px-[0.5vw] py-[1vh]"
                >
                  <td className="text-left px-2 py-1 flex-1">new football event</td>
                  <td className="text-center px-2 h-fit w-[10%] border-r border-gray-500 border-opacity-50 ">
                    20
                  </td>
                  <td className="text-center px-2 h-fit w-[10%] border-r border-gray-500 border-opacity-50">
                    124
                  </td>
                  <td className="text-center px-2 w-[10%] h-fit border-r border-gray-500 border-opacity-50">
                    100
                  </td>
                  <td className=" text-center px-2  h-fit w-[10%]  text-yellow-500">28 </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DynamicPricing;
