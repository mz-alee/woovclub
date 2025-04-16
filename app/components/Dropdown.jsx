"use client";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Dropdownlist = ({ ticketTypes, onSelect }) => {
  return (
    <div className="text-black bg-[#51a2ff] w-[90px] absolute left-0 top-8 rounded-[0.2vw] z-10">
      <ul className="flex items-center cursor-pointer flex-col">
        {ticketTypes && ticketTypes.length && ticketTypes.map((item, index) => (
          <li
            key={index}
            onClick={() => onSelect(item)} 
            className="border-b w-full text-center hover:bg-white/40 h-8 border-gray-600"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Dropdown = ({ name, ticketTypes }) => {
  const [isDrop, setIsDrop] = useState(false);
  const [selectedType, setSelectedType] = useState();

  const handleSelect = (item) => {
    setSelectedType(item);
    setIsDrop(false); 
  };

  return (
    <div className="relative">
      <p
        className="capitalize font-light text-sm  cursor-pointer flex items-center gap-2"
        onClick={() => setIsDrop(!isDrop)}
      >
        {selectedType}
        {isDrop ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </p>

      {isDrop && (
        <Dropdownlist
          ticketTypes={ticketTypes}
          onSelect={handleSelect} 
        />
      )}
    </div>
  );
};

export default Dropdown;
