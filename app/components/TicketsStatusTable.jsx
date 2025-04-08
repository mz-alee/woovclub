import React from 'react'

const TicketsStatusTable = () => {
  return (
    <div className="cutrow  bg-gray-500/10 md:h-[44vh] w-full ">
    <div className="header  text-white flex flex-col sm:flex-row bg-re px-[1.4vw] py-[1vh] items-center gap-[1.5vw]">
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
    <div className="detail-container   text-white h-full w-full px-4 ">
      <div className="table  w-full">
        <table className="w-full border-collapse">
          <thead>
            <tr className="text-[10px] md:text-[12px] lg:text-[1vw] font-light flex  justify-between">
              <td className="text-left px-2 py-2 flex-1">Name</td>
              <div className="flex text-[10px] md:text-[12px] lg:text-[1vw] md:mr-4  gap-4">
                <td className="text-right py-2 px-2  md:w-15">Status</td>
                <td className="text-right py-2 px-2  md:w-15">Total</td>
                <td className="text-right py-2 px-2  md:w-15">Booked</td>
                <td className="text-right py-2 px-2  md:w-15">Date</td>
              </div>
            </tr>
          </thead>

          <tbody className="flex   h-[10rem] sm:h-[25vh]  flex-col gap-2 overflow-y-scroll scrollbar-hide ">
            {[...Array(15)].map((_, index) => (
              <tr
                key={index}
                className="bg-white/10  text-[8px] md:text-[12px] lg:text-[1vw]  flex justify-between rounded-[1vw] py-[0.5vh] px-[0.5vw] "
              >
                <td className="text-left   px-2 py-1 flex-1">
                  new football event
                </td>
                <div className="flex gap-5 ">
                  <td className="text-right py-1 pr-2 text-green-400 border-r border-gray-600 md:w-15  h-6">
                    Available
                  </td>
                  <td className="text-right py-1 pr-2  border-r border-gray-600 h-6 md:w-15">124</td>
                  <td className="text-right py-1  border-r border-gray-600 px-2 h-6  md:w-15 ">100</td>
                  <td className="text-right  px-2 py-1 md:w-15">28 Mar</td>
                </div>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* footer  */}
      <div className='w-full flex justify-end items-center py-1'>
    <h1 className='text-gray-400 text-[12px] font-light'>last update:1day ago</h1>
    </div>
    </div>
  </div>
  )
}

export default TicketsStatusTable