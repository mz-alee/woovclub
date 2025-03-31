"use client"
import React,{useState} from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
const Dropdownlist = () => {
  return (
    <div className="text-black bg-white w-[90px] py-2 rounded-[0.2vw] absolute z-10">
      <ul className="flex items-center  flex-col gap-2">
        <li className="border-b w-full text-center border-gray-600 pb-1">
          profile
        </li>
        <li className="border-b w-full text-center border-gray-600 pb-1">
          profile
        </li>
        <li>profile</li>
      </ul>
    </div>
  );
};

const Dropdown = () => {
  const [isDrop, setIsDrop] = useState(false);
  const [arrowposition ,setarrowposition] = useState(true)
  return (
    <div>
      <p
        className="capitalize font-ligh cursor-pointer flex items-center gap-2 "
        onClick={() => {
          setIsDrop(!isDrop);
          setarrowposition(!arrowposition);
        }}
      >
        sort by date
        {arrowposition ? <IoIosArrowDown /> : <IoIosArrowUp />}
      </p>
      {isDrop && <Dropdownlist />}
    </div>
  );
};
export default Dropdown;
