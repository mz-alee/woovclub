"use client"
import React,{useState} from 'react'
import Dropdown from '@/app/components/Dropdown'
import { poppins } from '@/app/components/Font'
import Ticketlist from '@/app/newticketpage2/components/Ticketlist'
import { RiArrowRightSLine } from 'react-icons/ri'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
const TicketSettingComponent = () => {
    const [ticketprice, setticketprice] = useState(30);
    const router = useRouter();

  return (
    <div className="setting flex flex-col gap-2 ">
          <h1 className="capitalize ">ticket settings</h1>
          {/* setting container  */}
          <div className="setting-container px-[1vw] py-[1vh] text-black bg-[#ededed] w-full min:h-[80vh] rounded-[1.5vw]  ">
            {/* row1  */}
            <div className="border-b border-gray-400 w-full h-[12vh]  flex justify-between items-center">
              <div>
                <h1 className={`${poppins.className} text-lg font-[500]`}>
                  Capacity
                </h1>
                <p className="text-gray-600 text-[12px]">
                  Choose the number of seats available
                </p>
              </div>
              {/* dropdownlist  */}
              <div className="dropdownlist relative bg-[#45b7db] rounded-[1.5vw] h-[7vh] min:w-[15vw]  md:h-[7vh] md:w-[8vw] py-2 flex justify-between items-center px-2">
                <h1 className={`${poppins.className} font-[600] italic`}>
                  124
                </h1>
                <p className="text-gray-500  text-[12px]">Seat</p>
                <Dropdown name={"Seat"} top={"20px"} />
              </div>
            </div>
            {/* row2  */}
            <div className="border-b border-gray-400 w-full h-[12vh]  flex justify-between items-center">
              <div>
                <h1 className={`${poppins.className} text-lg font-[500]`}>
                  Court
                </h1>
                <p className="text-gray-600 text-[12px]">
                  Select the court the game will be played in
                </p>
              </div>
              {/* dropdownlist  */}
              <div className="dropdownlist relative bg-[#45b7db] rounded-[1.5vw] h-[7vh] min:w-[15vw]  md:h-[7vh] md:min-w-[8vw] py-2 flex justify-between items-center px-2">
                <h1 className={`  text-sm`}>North coast football court</h1>
                <Dropdown />
              </div>
            </div>
            {/* tickect type row  */}
            <div className="border-b border-gray-400 w-full min:h-[22vh] py-3  flex flex-col gap-[2vh] ">
              <div>
                <h1 className={`${poppins.className} text-lg font-[500]`}>
                  Ticket Type
                </h1>
                <p className="text-gray-600 text-[12px]">
                  Add one or more ticket type
                </p>
              </div>
              {/* ticket category list btns  */}

              <Ticketlist
                name={"vip"}
                ticketnumber={"Ticket 1"}
                ticketprice={ticketprice}
                poppins={poppins}
                setticketprice={setticketprice}
              />
              <Ticketlist
                name={"Platinum"}
                ticketnumber={"Ticket 2"}
                ticketprice={ticketprice}
                poppins={poppins}
                setticketprice={setticketprice}
              />
              <Ticketlist
                name={"Gold"}
                ticketnumber={"Ticket 3"}
                ticketprice={ticketprice}
                poppins={poppins}
                setticketprice={setticketprice}
              />
              <Ticketlist
                name={"Silver"}
                ticketnumber={"Ticket 4"}
                ticketprice={ticketprice}
                poppins={poppins}
                setticketprice={setticketprice}
              />

              {/* add new ticket type  */}
              <div
                className={`${poppins.className} font-[600] border-dashed border-1 flex justify-between px-4 items-center  border-gray-800 w-full h-[8vh] rounded-4xl`}
              >
                <h1 className={`${poppins.className} font-[600]`}>
                  Add new ticket type
                </h1>
                <span>+</span>
              </div>
            </div>
            {/* ticket map  */}
            <div className="ticket-map">
              <h1>Available Ticket</h1>
            </div>
          </div>
          {/* footer  */}
       
        </div>
  )
}

export default TicketSettingComponent