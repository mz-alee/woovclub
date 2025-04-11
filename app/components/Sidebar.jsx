"use client";
import React, { useState } from "react";
import {
  MdArrowForwardIos,
  MdKeyboardArrowRight,
  MdKeyboardArrowLeft,
} from "react-icons/md";
import { TbSettings2 } from "react-icons/tb";
import icon1 from "../../public/icon1.svg";
import icon2 from "../../public/icon2.svg";
import icon3 from "../../public/icon3.svg";
import icon4 from "../../public/icon4.svg";
import icon5 from "../../public/icon5.svg";
import icon6 from "../../public/icon6.svg";
import icon7 from "../../public/icon7.svg";
import activeicon1 from "../../public/icon1-active.svg";
import activeicon2 from "../../public/icon2-active.svg";
import activeicon3 from "../../public/icon3-active.svg";
import activeicon4 from "../../public/icon4-active.svg";
import activeicon5 from "../../public/icon5-active.svg";
import activeicon6 from "../../public/icon6-active.svg";
import activeicon7 from "../../public/icon7-active.svg";
import navActiveBg from "../../public/navActiveBg.png";
import logo from "../../public/Logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const [active, setActive] = useState(false);
  const path = usePathname();
  // const getActiveClass = (routeName) => {
  //   return path.includes(routeName) ? "text-yellow-500" : "text-white";
  // };

  // Handle click event to toggle sidebar
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className="flex z-10  ">
      <div
        className={`${
          active
            ? "hidden h-[98vh] w-[12vw]  transition-all backdrop-blur-md text-white rounded-[1vw] sm:flex flex-col justify-between  items-center py-[2vh] bg-blur-lg bg-white/10"
            : "hidden h-[98vh] sm:w-[6vw] md:w-[5vw] lg:w-[4vw] transition-all text-white rounded-[1vw] sm:flex flex-col justify-between items-center py-[2vh] bg-white/10"
        }`}
      >
        {/* Logo */}
        <div className={`${active ? "flex w-[70px] 0" : "hidden"}`}>
          <Image src={logo} alt="logo" />
        </div>

        {/* Toggle button */}
        {active? "":<div>
          <button
            className={`${active ? " hidden " : "flex"}`}
            onClick={handleClick}
          >
            <MdKeyboardArrowRight className="text-lg font-light md:w-[1.5vw] md:h-[3.5vh]" />
          </button>
        </div>}


        {/* Links */}
        <div className="links   w-full  flex  items-center flex-col gap-[1vh] text-lg">
          <div
            className={`relative  ${
              active
                ? "w-20 border-b py-1.5 border-gray-600 flex items-center gap-1"
                : "py-1.5 border-b border-gray-600"
            }`}
          >
            <Link
              className={`${active ? "flex items-center gap-2" : ""}`}
              href="/Ads"
            >
              <Image
                src={path === "/Ads" ? activeicon1 : icon1}
                alt="icon1"
                className="z-10 md:w-[1.5vw] md:h-[3.5vh]"
              />
              {active && (
                <p className="capitalize font-light text-[12px]">ads</p>
              )}
            </Link>
            <div
              className={`absolute  w-[2.8vw] h-[14vh] -z-10 flex ${
                path === "/Ads" ? "   -top-7   " : "hidden"
              }`}
            >
              <Image src={navActiveBg} alt="navbg" className=" " />
            </div>
          </div>

          {/* Posts Link */}
          <div
            className={` relative ${
              active
                ? "w-20 border-b py-1.5 border-gray-600 flex items-center gap-1"
                : "py-1.5 border-b border-gray-600"
            }`}
          >
            <Link
              className={`${active ? "flex items-center gap-1" : ""}`}
              href="/posts"
            >
              <Image
                src={path === "/posts" ? activeicon2 : icon2}
                alt="icon2"
                className="md:w-[1.5vw] md:h-[3.5vh]"
              />
              {active && (
                <p className="capitalize font-light text-[12px]">Posts</p>
              )}
            </Link>
            <div
              className={`absolute  w-[2.8vw] h-[14vh] -z-10 flex ${
                path === "/posts" ? "   -top-7   " : "hidden"
              }`}
            >
              <Image src={navActiveBg} alt="navbg" className=" " />
            </div>
          </div>

          {/* Event Link */}
          <div
            className={` relative ${
              active
                ? "w-20 border-b py-1.5 border-gray-600 flex items-center gap-1"
                : "py-1 border-b border-gray-600"
            }`}
          >
            <Link
              className={`${active ? "flex items-center gap-1" : ""}`}
              href="/event"
            >
              <Image
                src={path === "/event" ? activeicon3 : icon3}
                alt="icon3"
                className="md:w-[1.5vw] md:h-[3.5vh]"
              />
              {active && (
                <p className="capitalize font-light text-[12px]">Event</p>
              )}
            </Link>
            <div
              className={`${
                path === "/event"
                  ? "w-[3vw] h-6 top-0 bg-pink-600 absolute"
                  : ""
              }`}
            ></div>
          </div>

          {/* Court Link */}
          <div
            className={` relative ${
              active
                ? "w-20 border-b py-1.5 border-gray-600 flex items-center gap-1"
                : "py-1.5 border-b border-gray-600"
            }`}
          >
            <Link
              className={`${active ? "flex items-center gap-1" : ""}`}
              href="/court"
            >
              <Image
                src={path === "/court" ? activeicon4 : icon4}
                alt="icon4"
                className="md:w-[1.5vw] md:h-[3.5vh]"
              />
              {active && (
                <p className="capitalize font-light text-[12px]">Court</p>
              )}
            </Link>
            <div
              className={`${
                path === "/court"
                  ? "w-[3vw] h-6 top-0 bg-pink-600 absolute"
                  : ""
              }`}
            ></div>
          </div>

          {/* Coaches Link */}
          <div
            className={` relative ${
              active
                ? "w-20 border-b py-1.5 border-gray-600 flex items-center gap-1"
                : "py-1.5 border-b border-gray-600"
            }`}
          >
            <Link
              className={`${active ? "flex items-center gap-1" : ""}`}
              href="/coaches"
            >
              <Image
                src={path === "/coaches" ? activeicon5 : icon5}
                alt="icon5"
                className="md:w-[1.5vw] md:h-[3.5vh]"
              />
              {active && (
                <p className="capitalize font-light text-[12px]">Coaches</p>
              )}
            </Link>
            <div
              className={`${
                path === "/coaches"
                  ? " w-[3vw] pl-[2vw] h-6 top-0 left-0 bg-pink-600 absolute "
                  : ""
              }`}
            >
              {/* <div className='w-[4vw] bg-amber-200 h-2'></div> */}
            </div>
          </div>

          {/* courses Detail Link */}
          <div
            className={` relative ${
              active
                ? "w-20 border-b py-1.5 border-gray-600 flex items-center gap-1"
                : "py-1.5 border-b border-gray-600"
            }`}
          >
            <Link
              className={`${active ? "flex items-center gap-1" : ""}`}
              href="/Ticketsdetail"
            >
              <Image
                src={path === "/Ticketsdetail" ? activeicon6 : icon6}
                alt="icon6"
                className="md:w-[1.5vw] md:h-[3.5vh]"
              />
              {active && (
                <p className="capitalize font-light text-[12px]">courses</p>
              )}
            </Link>
            <div
              className={`${
                path === "/Ticketsdetail"
                  ? "w-[3vw] h-6 top-0 bg-pink-600 absolute"
                  : ""
              }`}
            ></div>
            {/* <div className='w-[3vw] h-6 top-0 bg-pink-600 absolute'></div> */}
          </div>

          {/* dashboard Link */}
          <div
            className={`relative flex ${
              active ? "w-20 py-1.5 flex items-center gap-1" : "py-1.5 "
            }`}
          >
            <Link
              className={`z-10 ${active ? "flex items-center gap-1" : ""}`}
              href="/"
            >
              <Image
                src={path === "/" ? icon7 : icon7}
                alt="icon7"
                className="md:w-[1.5vw] md:h-[3.5vh]"
              />
              {active && (
                <p className="capitalize font-light text-[12px]">Tickets</p>
              )}
            </Link>
            {/* <div
              className={` ${
                path === "/"
                  ? " w-[3vw]  items-center justify-center absolute h-4 rounded-l-2xl  left-[50%] bg-red-600 "
                  : ""
              }`}
            ></div> */}
          </div>
        </div>

        {/* Settings Section */}
        <div className={`${active ? "flex items-center gap-1" : ""}`}>
          <TbSettings2 className="md:w-[1.5vw] md:h-[2.5vh]" />
          {active && (
            <p className="capitalize font-light text-[12px]">Settings</p>
          )}
        </div>
      </div>

      {/* Sidebar Toggle Button */}
      <div>
        <button
          className={`${active ? "flex" : "hidden"}`}
          onClick={handleClick}
        >
          <MdKeyboardArrowLeft className="text-lg mt-2 text-white font-light md:w-[1.5vw] md:h-[3.5vh]" />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
