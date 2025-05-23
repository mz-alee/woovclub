"use client";
import React, { useState, useEffect } from "react";
// import MobileTicketMap from "./MobileTicketMap";
import DesktopNewticketmap from './DesktopNewticketmap';
const categoryColors = {
  Platinum: "bg-[#45b7db] text-black",
  Gold: "bg-yellow-400",
  Silver: "bg-[#505050] text-white",
  VIP: "bg-[#505050] border border-[#e5c839] text-white",
};
const Newticketmap = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/records.json");

        if (!res.ok) {
          console.log("Failed to fetch data");
          return;
        }

        const tickets = await res.json();
        setdata(tickets);
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* <MobileTicketMap data={data} categoryColors={categoryColors}/> */}
      <DesktopNewticketmap data={data} categoryColors={categoryColors}/>
    </div>
  );
};

export default Newticketmap;
