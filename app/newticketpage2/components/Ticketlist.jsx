"use client";
import Dropdown from "@/app/components/Dropdown";
import React from "react";

const Ticketlist = ({ register, setValue, getValues, poppins, index }) => {
  const handlePriceChange = (delta) => {
    console.log("deltaaaaaaaa",delta);
    
    const current = getValues(`tickets.${index}.price`);
    console.log(current);
    
    
    setValue(`tickets.${index}.price`, current + delta);
  };

  return (
    <div className="flex flex-col justify-between w-full">
      <div className="list1 flex justify-between">
        <h1>Ticket {index + 1}</h1>

        <div className="flex gap-[1vw] md:gap-[0.5vw] items-center">
          {/* Dropdown Type */}
          <div className="dropdownlist relative bg-[#45b7db] rounded-[1.5vw] h-[7vh] min:w-[20vw] md:h-[7vh] md:w-[8vw] py-2 flex gap-2 justify-between items-center px-2">
            <select
              {...register(`tickets.${index}.type`)}
              className="bg-transparent outline-none text-[12px] w-full"
            >
              <option value="">Select Type</option>
              <option value="VIP">VIP</option>
              <option value="Gold">Gold</option>
              <option value="Platinum">Platinum</option>
              <option value="Silver">Silver</option>
            </select>
          </div>

          <div className="border-l border-gray-400 h-[6vh]"></div>

          {/* Price Input with +/- */}
          <div className="border-1 border-[#45b7db] rounded-[1.5vw] px-2 min-w-[10vw] md:w-[8vw] h-[7vh] flex justify-center items-center">
            <div
              className={`${poppins.className} italic font-[600] text-[17px] md:text-xl flex items-center gap-2`}
            >
              <button type="button" onClick={() => handlePriceChange(-2)}>
                -
              </button>
              <input
                type="number"
                {...register(`tickets.${index}.price`, { valueAsNumber: true })}
                className="appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-center md:text-sm lg:text-lg outline-none w-[3vw]"
              />
              <button type="button" onClick={() => handlePriceChange(2)}>
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticketlist;
