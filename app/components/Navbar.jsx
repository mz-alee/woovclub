import React from "react";
import Image from "next/image";
import logo from "../../public/Logo.png";
import logo2 from "../../public/logo2.png";
import { CiBellOn } from "react-icons/ci";
const Navbar = () => {
  return (
    <div className="border-b  backdrop-blur-4xl backdrop-opacity-50 border-[#333135] w-full h-[10vh] py-1 flex justify-between items-center">
      <div className="logo">
        <Image src={logo} alt="logo"  className='w-[12vw] h-[4vh] sm:w-[6vw] sm:h-[4vh]  md:w-[5vw] md:h-[5vh]'></Image>
      </div>
      <div className='flex gap-2 items-center'>
        <div className=" bell flex items-center justify-center   bg-white h-[28px] w-[28px] md:w-[40px] md:h-[40px]  rounded-full">
          <CiBellOn className='w-[12vw] h-[4vh] md:w-[8vw] md:h-[4vh]'/>
        </div>
          <div>
          <Image src={logo2} className='w-[40px] h-[4vh] md:w-[40px] md:h-[6vh]' alt='logo' />
          </div>
      </div>
    </div>
  );
};

export default Navbar;
