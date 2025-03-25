import React from "react";
import Image from "next/image";
import logo from "../../public/Logo.png";
import logo2 from "../../public/logo2.png";
import { CiBellOn } from "react-icons/ci";
const Navbar = () => {
  return (
    <div className="border-b  border-gray-600 w-full h-[4rem] py-2 flex justify-between items-center">
      <div className="logo">
        <Image src={logo} alt="logo" width={100} height={100}></Image>
      </div>
      <div className='flex gap-2 items-center'>
        <div className=" bell flex items-center justify-center   bg-white w-[3rem] h-[3rem] rounded-full">
          <CiBellOn className='text-xl'/>
        </div>
          <div>
          <Image src={logo2} width={50} height={50} alt='logo' />
          </div>
      </div>
    </div>
  );
};

export default Navbar;
