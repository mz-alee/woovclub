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
import union from "../../public/Union.png";
const Sidebar = () => {
  const [active, setActive] = useState(false);
  const path = usePathname();

  // Handle click event to toggle sidebar
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className="flex z-100  ">
      <div
        className={`${
          active
            ? "hidden h-[98vh] w-[14vw]  transition-all backdrop-blur-md text-white rounded-[1vw] sm:flex flex-col justify-between gap-10 items-center py-[2vh] bg-blur-lg bg-white/10"
            : "hidden h-[98vh]  sm:w-[6vw] md:w-[5vw] lg:w-[4vw] transition-all text-white rounded-[1vw] sm:flex flex-col justify-between   items-center py-[2vh] bg-white/10"
        }`}
      >
        {/* Logo */}
        <div className={`${active ? "flex w-[70px] " : "hidden"}`}>
          <Image src={logo} alt="logo" />
        </div>

        {/* Toggle button */}
        {active ? (
          ""
        ) : (
          <div>
            <button
              className={`${active ? " hidden " : "flex"}`}
              onClick={handleClick}
            >
              <MdKeyboardArrowRight className="text-lg font-light md:w-[1.5vw] md:h-[3.5vh]" />
            </button>
          </div>
        )}

        {/* Links */}
        <div className="links   w-full  flex  items-center flex-col gap-4 text-lg">
          <div className="flex  justify-center w-full relative">
            <div
              className={`  ${
                active
                  ? "w-20 border-b py-1.5 border-gray-600 flex items-center gap-1"
                  : "py-1.5 border-b border-gray-600"
              }`}
            >
              <Link
                className={`${active ? "flex items-center gap-2" : ""}`}
                href="/ads"
              >
                <Image
                  src={path === "/ads" ? activeicon1 : icon1}
                  alt="icon1"
                  className="z-10 md:w-[1.5vw] md:h-[3.5vh]"
                />
                {active && (
                  <p className="capitalize font-light text-[12px]">ads</p>
                )}
              </Link>
              <div
                className={`absolute  right-0 w-[40px] xl:w-[3vw] h-[14vh] -z-10 flex ${
                  path === "/ads" ? "   -top-7 2xl:-top-9  " : "hidden"
                }`}
              >
                {!active ? (
                  <Image src={navActiveBg} alt="navbg" className=" " />
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
          {/* Posts Link */}
          <div className="relative w-full flex justify-center">
            <div
              className={`  ${
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
              {!active ? (
                <Image
                  src={union}
                  alt="union"
                  className={`-z-2 ${
                    path === "/posts"
                      ? "w-[50px] h-fit  -top-9  absolute right-0  "
                      : "hidden"
                  }`}
                />
              ) : (
                ""
              )}
            </div>
          </div>
          {/* Event Link */}
          <div className="relative flex justify-center w-full">
            <div
              className={` ${
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
              {!active ? (
                <Image
                  src={union}
                  alt="union"
                  className={`-z-2 ${
                    path === "/event"
                      ? "w-[50px] h-fit  -top-9  absolute right-0  "
                      : "hidden"
                  }`}
                />
              ) : (
                ""
              )}
            </div>
          </div>
          {/* Court Link */}
          <div className="relative w-full flex justify-center">
            <div
              className={`  ${
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
                  loading="lazy"
                  src={path === "/court" ? activeicon4 : icon4}
                  alt="icon4"
                  className="md:w-[1.5vw] md:h-[3.5vh]"
                />
                {active && (
                  <p className="capitalize font-light text-[12px]">Court</p>
                )}
              </Link>
              {!active ? (
                <Image
                  loading="lazy"
                  src={union}
                  alt="nav icon"
                  className={`-z-2 ${
                    path === "/court"
                      ? "w-[50px] h-fit  -top-9  absolute right-0  "
                      : "hidden"
                  }`}
                />
              ) : (
                ""
              )}
            </div>
          </div>
          {/* Coaches Link */}
          <div className="flex   justify-center relative w-full">
            <div
              className={` ${
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
                  className="z-10 md:w-[1.5vw] md:h-[3.5vh]"
                />
                {active && (
                  <p className="capitalize font-light text-[12px]">Coaches</p>
                )}
              </Link>
              {!active ? (
                <Image
                  src={union}
                  alt="union"
                  className={`-z-2 ${
                    path === "/coaches"
                      ? "w-[50px] h-fit  -top-9  absolute right-0  "
                      : "hidden"
                  }`}
                />
              ) : (
                ""
              )}
            </div>
          </div>
          {/* courses Detail Link */}
          <div className="relative  w-full flex justify-center">
            <div
              className={`  ${
                active
                  ? "w-20 border-b py-1.5 border-gray-600 flex items-center gap-1"
                  : "py-1.5 border-b border-gray-600"
              }`}
            >
              <Link
                className={` z-220 ${active ? "flex items-center gap-1" : ""}`}
                href="/Ticketsdetail"
              >
                <Image
                  src={path === "/Ticketsdetail" ? activeicon6 : icon6}
                  alt="icon6"
                  className=" md:w-[1.5vw] md:h-[3.5vh]"
                />
                {active && (
                  <p className="capitalize font-light text-[12px]">courses</p>
                )}
              </Link>
              {!active ? (
                <Image
                  src={union}
                  alt="union"
                  className={`-z-2 ${
                    path === "/Ticketsdetail"
                      ? "w-[50px] h-fit  -top-9  absolute right-0  "
                      : "hidden"
                  }`}
                />
              ) : (
                ""
              )}
            </div>
          </div>
          {/* dashboard Link */}
          <div className="relative flex w-full justify-center">
            <div
              className={` flex  ${
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
              {!active ? (
                <Image
                  src={union}
                  alt="union"
                  className={` ${
                    path === "/"
                      ? "w-[50px] h-fit  -top-9  absolute right-0  "
                      : "hidden"
                  }`}
                />
              ) : (
                ""
              )}
              {/* <Image className=' w-fit h-fit  ' src={union} alt='union'/> */}
            </div>
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
