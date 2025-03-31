import React from "react";
import Image from "next/image";
import logo from "../../public/Logo.png";
import logo2 from "../../public/logo2.png";
import { CiBellOn } from "react-icons/ci";
const Navbar = () => {
  return (
    <div className="border-b  border-gray-600 w-full h-[10vh] py-2 flex justify-between items-center">
      <div className="logo">
        <Image src={logo} alt="logo"  className='w-[12vw] h-[4vh] md:w-[8vw] md:h-[6vh]'></Image>
      </div>
      <div className='flex gap-2 items-center'>
        <div className=" bell flex items-center justify-center   bg-white w-[12vw] h-[4vh] md:w-[3vw] md:h-[6vh] rounded-full">
          <CiBellOn className='w-[12vw] h-[4vh] md:w-[8vw] md:h-[4vh]'/>
        </div>
          <div>
          <Image src={logo2} className='w-[12vw] h-[4vh] md:w-[5vw] md:h-[6vh]' alt='logo' />
          </div>
      </div>
    </div>
  );
};

export default Navbar;
