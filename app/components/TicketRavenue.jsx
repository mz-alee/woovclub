import React from 'react'
import MyAreaChart from './Areachart'
const TicketRavenue = () => {
  return (
        <div className="ticket-revenue h-[17rem] w-[50vw] sm:w-[60vw] md:w-[35vw] lg:w-[25vw] relative flex  flex-col justify-between ">
            <div className=' w-full px-2 pt-2 font-bold capitalize '>
              <h1 className=''>tickets ravenue</h1>
              <h1 className=' opacity-45 font-light'>total ravenue: <span className=' opacity-90 '>50,000</span></h1>
            </div>
            <div className=''>
            <MyAreaChart />
            </div>
            <div className='absolute bottom-2 left-2 flex gap-1 h-[1rem]  items-center '>
            <h1 className=' font-light'>Currency:</h1>
            <h1 className='font-bold'>USD$</h1>
            </div>
            <h1 className=' absolute right-1 bottom-2 font-light text-sm opacity-50'>last update:1 day ago</h1>
          </div>
  )
}

export default TicketRavenue