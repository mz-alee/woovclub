"use client"
import Dropdown from '@/app/components/Dropdown';
import React from "react";

const Ticketlist = ({ticketprice,setticketprice,poppins,name,ticketnumber}) => {
  return (
    <div>
      <div className="flex flex-col justify-between w-full">
        <div className="list1 flex justify-between">
          <h1>{ticketnumber}</h1>
          {/* Btns  */}
          <div className="flex gap-[1vw] md:gap-[0.5vw] items-center">
            <div className="dropdownlist bg-[#45b7db] rounded-[1.5vw] h-[7vh] min:w-[15vw]  md:h-[7vh] md:w-[8vw] py-2 flex gap-2 justify-between items-center px-2">
              <h1 className={`  text-sm`}>{name}</h1>
              <Dropdown></Dropdown>
            </div>
            <div className="border border-gray-400 h-[6vh]"></div>
            <div className="border-2 border-[#45b7db] rounded-[1.5vw] px-2 min:w-[15vw] md:w-[8vw] h-[7vh] flex justify-center items-center">
              <div
                className={`${poppins.className} italic font-[600]  text-[17px] md:text-xl flex gap-2`}
              >
                <button
                  onClick={() => {
                    setticketprice(ticketprice - 2);
                  }}
                >
                  -
                </button>
                <h1>{ticketprice}</h1>
                <button
                  onClick={() => {
                    setticketprice(ticketprice + 2);
                  }}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticketlist;
