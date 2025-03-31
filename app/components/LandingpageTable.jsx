import React from "react";

const LandingpageTable = () => {
  return (
    <div className="rounded-[1vw] bg-white/10 md:h-[40vh] w-[90vw] ">
      <div className="header text-white flex flex-col sm:flex-row  px-[1.4vw] py-[1vh] items-center gap-[1.5vw]">
        <div className="flex sm:block text-sm md:text-lg lg:text-[1vw] gap-[1vh] justify-between">
          <h1>Available Tickets</h1>
          <p className="capitalize font-light ">sort by updated date</p>
        </div>
        <div className="btns items-center flex gap-[1vw]">
          <button className="border text-[10px] h-[4vh]  md:h-[5vh] md:text-[1vw] border-white rounded-[1.5vw] text-white px-[1.5vw] ">
            Hosted
          </button>
          <button className="bg-blue-400 text-[10px]  h-[4vh] md:h-[5vh] md:text-[1vw] text-black rounded-[1.5vw] px-2 py-1">
            Club events
          </button>
        </div>
      </div>
      <div className="detail-container  text-white h-full w-full p-[1vw] ">
        <div className="table  w-full">
          <table className="w-full border-collapse">
            <thead>
              <tr className="text-sm md:text-lg lg:text-[1vw] font-light flex  justify-between">
                <td className="text-left px-2 py-2 flex-1">Name</td>
                <div className="flex text-sm md:text-lg lg:text-[1vw]  gap-4">
                  <td className="text-center py-2 px-[1vw]">Status</td>
                  <td className="text-center py-2 px-[1vw]">Total</td>
                  <td className="text-center py-2 px-[1vw]">Booked</td>
                  <td className="text-center py-2 px-[1vw]  ">
                    Date
                  </td>
                </div>
              </tr>
            </thead>

            <tbody className="flex  h-[10rem] sm:h-[20vh]  flex-col gap-[1vh] overflow-y-scroll scrollbar-hide ">
              {[...Array(15)].map((_, index) => (
                <tr
                  key={index}
                  className=" text-[10px] md:text-lg lg:text-[1vw]  bg-white/10   flex justify-between rounded-[1vw] px-[0.5vw] py-[1vh] "
                >
                  <td className="text-left   px-2 py-1 flex-1">
                    new football event
                  </td>
                  <div className="flex gap-4 items-center">
                    <td className="text-right px-[1vw] text-green-400 border-r border-gray-500 h-[3vh]">
                      Available
                    </td>
                    <td className="text-right px-[1vw] border-r border-gray-500 h-[3vh]">
                      124
                    </td>
                    <td className="text-right px-[1vw] border-r border-gray-500 h-[3vh] ">
                      100
                    </td>
                    <td className="text-right px-2 py-1">28 Mar</td>
                  </div>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LandingpageTable;
