import React from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { TbSettings2 } from "react-icons/tb";
import icon1 from "../../public/icon1.svg";
import icon2 from "../../public/icon2.svg";
import icon3 from "../../public/icon3.svg";
import icon4 from "../../public/icon4.svg";
import icon5 from "../../public/icon5.svg";
import icon6 from "../../public/icon6.svg";
import icon7 from "../../public/icon7.svg";
import Image from "next/image";
import Link from "next/link";
const Sidebar = () => {
  return (
    <div className="hidden  h-[95vh] w-[4vw]  border text-white border-gray-600 rounded-[1vw] md:flex flex-col justify-between items-center py-[2vh]  bg-white/10">
      <div>
        <MdArrowForwardIos className="text-lg font-light md:w-[1.5vw] md:h-[3.5vh]" />
      </div>
      <div className="links flex flex-col gap-[4vh] text-lg ">
        <Link className=" active:bg-red-400" href="/">
          <Image
            src={icon1}
            alt="icon1"
            className="md:w-[1.5vw] md:h-[3.5vh]"
          />
        </Link>
        <Link href="/">
          <Image
            src={icon2}
            alt="icon2"
            className="md:w-[1.5vw] md:h-[3.5vh]"
          />
        </Link>
        <Link href="/">
          <Image
            src={icon3}
            alt="icon3"
            className="md:w-[1.5vw] md:h-[3.5vh]"
          />
        </Link>
        <Link href="/">
          <Image
            src={icon4}
            alt="icon4"
            className="md:w-[1.5vw] md:h-[3.5vh]"
          />
        </Link>
        <Link href="/newticket">
          <Image
            src={icon5}
            alt="icon5"
            className="md:w-[1.5vw] md:h-[3.5vh]"
          />
        </Link>
        <Link href="/Ticketsdetail">
          <Image
            src={icon6}
            alt="icon6"
            className="md:w-[1.5vw] md:h-[3.5vh]  "
          />
        </Link>
        <Link href="/">
          <Image
            src={icon7}
            alt="icon7"
            className="md:w-[1.5vw] md:h-[3.5vh]"
          />
        </Link>
      </div>
      <div>
        <TbSettings2 className="md:w-[1.5vw] md:h-[3.5vh]" />
      </div>
    </div>
  );
};

export default Sidebar;
