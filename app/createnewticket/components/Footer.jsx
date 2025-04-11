"use client"
import React from "react";
import Link from "next/link";
import { RiArrowRightSLine } from "react-icons/ri";
import { poppins } from '@/app/components/Font';
const Footer = ({handlepagenum ,number}) => {
  console.log("number",number);
  
  
  return (
    <div className="footer  h-[10vh] w-full  mt-[1vw]">
      <div className="flex gap-[0.5vw]  items-center">
        <input type="checkbox" className="check-box" />

        <h1 className={`${poppins.className}  text-sm md:text-[0.8vw]`}>i agree with Woov Club's</h1>
        <Link
          href="/"
          className={` ${poppins.className} text-[#45B7DB] underline capitalize text-sm md:text-[0.8vw]`}
        >
          terms and condition
        </Link>
      </div>
      <div className="flex justify-between items-center">
        <a
          href="/"
          className={`${poppins.className} font-light text-sm md:text-[1vw]`}
        >
          Reset
        </a>
        <button
          onClick={handlepagenum}
          disabled={number>=3}
          className={`${poppins.className} italic font-[600] bg-[#e5c839] text-[1.3vw] text-black rounded-[2vw] w-[6.5vw] px-[1vw] py-[1vh] flex items-center  gap-[0.3vw]`}
        >
          Next
          <span>
            <RiArrowRightSLine />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Footer;
