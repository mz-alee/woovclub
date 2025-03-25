"use client"
import React from "react";
import Image from 'next/image';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Landingpage from './Landingpage';
const page = () => {
  return (
    <div className="main-page overflowx-hidden w-full flex px-2 items-center  ">
    <Sidebar/>
    <div className='scrollbar-hide w-full h-full px-4 overflow-auto '>
    {/* <Navbar/> */}
    <Landingpage/>
    </div>
    </div>
  );
};

export default page;
