import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Landingpage from '../Landingpage';

const Ticketspage = () => {
  return (
    <div className="main-page overflow-hidden flex min-h-screen px-2 ">
      <div className='fixed h-screen flex items-center'>
        <Sidebar />
      </div>
      <div className="w-full  md:ml-18 px-4 ">
        <Navbar/>
          <div className="ticket-page text-white">
            <h1>hey</h1>
          </div>
      </div>
    </div>
  );
};

export default Ticketspage;
