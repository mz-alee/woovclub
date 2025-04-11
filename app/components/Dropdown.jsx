"use client"
import React,{useState} from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
const Dropdownlist = ({top}) => {
  return (
    <div className={`text-black bg-[#51a2ff] w-[90px] py-2 absolute left-0 top-8 rounded-[0.2vw] z-10 `}>
      <ul className="flex items-center cursor-pointer  flex-col gap-2">
        <li className="border-b w-full text-center  border-gray-600 pb-1">
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

const Dropdown = ({name}) => {
  const [isDrop, setIsDrop] = useState(false);
  const [arrowposition ,setarrowposition] = useState(true)
  return (
    <div>
      <p
        className="capitalize font-ligh  text-sm  text-gray-500 cursor-pointer flex items-center gap-2 "
        onClick={() => {
          setIsDrop(!isDrop);
          setarrowposition(!arrowposition);
        }}
      >
        {arrowposition ? <IoIosArrowDown /> : <IoIosArrowUp />}
        {name}
      </p>
      {isDrop && <Dropdownlist />}
    </div>
  );
};
export default Dropdown;
