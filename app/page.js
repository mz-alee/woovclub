import React from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Landingpage from './Landingpage';

const page = () => {
  return (
    <div className="main-page overflow-hidden flex min-h-screen px-2 ">
      <div className='fixed h-screen flex items-center'>
        <Sidebar />
      </div>
      <div className="w-full  md:ml-18 px-4 ">
        <Navbar/>
        <Landingpage/>
      </div>
    </div>
  );
};

export default page;
