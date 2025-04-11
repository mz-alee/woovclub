import React from 'react'
import Hostedmatchcard from './Hostedmatchcard';
import { EventInformationTable } from '@/app/components/Event-information-table';

const HostedLeftSide = () => {
  return (
    <div className='hosted-left-sdie w-full  flex flex-col gap-2'>
                <div className="  border-b   w-full relative md:w-full border-gray-700 py-[2vh]">
                    <div className=" absolute right-2 ">
                   
                  </div>
                  <Hostedmatchcard/> 
                   
                </div>
                <div className="players w-full  h-full ">
                  <EventInformationTable/>
                </div>
              </div>
  )
}

export default HostedLeftSide