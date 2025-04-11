import React from 'react'
import Hostedmatchcard from '../../components/Hostedmatchcard'
import { EventInformationTable } from '@/app/components/Event-information-table'

const TicketSettingLeft = () => {
  return (
    <div className='w-full'> 
            <div className="  border-b   w-full  md:w-full border-gray-700 py-[2vh]">
              <Hostedmatchcard />
            </div>
            <EventInformationTable />
            </div>
  )
}

export default TicketSettingLeft