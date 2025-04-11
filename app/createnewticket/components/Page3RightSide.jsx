import DynamicPricing from '@/app/components/DynamicPricing'
import Ticketdemand from '@/app/components/Ticketdemand'
import React from 'react'

const Page3RightSide = () => {
  return (
    <div className=' w-full'>
    <div className="w-full  flex flex-col justify-center gap-2">
      <h1>Adaptive pricing</h1>
      <table className="w-full border-collapse">
        <thead>
          <tr className="text-sm md:text-lg lg:text-[1vw] font-light flex justify-between px-[0.5vw]">
            <td className="text-left px-2 py-2 flex-1">Name</td>
            <td className="text-center py-2 px-2 w-[10%]">Gold</td>
            <td className="text-center py-2 px-2 w-[10%] text-yellow-500 ">
              vip
            </td>
          </tr>
        </thead>
        <tr className="bg-white/10 border border-gray-600 text-[10px] md:text-lg lg:text-[1vw] flex justify-between items-center rounded-[0.6vw] px-[0.5vw] py-[1vh]">
          <td className="text-left px-2 py-1 flex-1">new football event</td>

          <td className="text-center px-2 w-[10%] h-fit border-r border-gray-500 border-opacity-50">
            100
          </td>
          <td className=" text-center px-2  h-fit w-[10%]  text-yellow-500">
            28
          </td>
        </tr>
      </table>
    </div>
    <div className=' w-full'>
    <div className="box1 h-[30vh]  flex w-full flex-col lg:flex-row gap-2 my-[2vh] ">
      <Ticketdemand />
    </div>
    <div className="w-full rounded-[1vw] bg-white/10">
      <DynamicPricing />
    </div>
    </div>
    </div>
  )
}

export default Page3RightSide