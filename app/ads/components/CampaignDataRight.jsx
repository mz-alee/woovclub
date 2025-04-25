import { poppins } from "@/app/components/Font";
import React, { useRef } from "react";
import { IoImageOutline } from "react-icons/io5";
import { MdOndemandVideo } from "react-icons/md";
import { RiArrowRightSLine } from 'react-icons/ri';
const CompaignDataRight = ({ handlepagenum, number, totalpage }) => {
  return (
    <div>
      <div className="flex flex-col gap-3">
        <h1
          className={`${poppins.className} font-[600] text-[12px] md:text-[0.8vw] capitalize`}
        >
          Ad Details
        </h1>
        {/* image selector  */}
        <div className="image-selector ">
          <label
            htmlFor="file-upload"
            className="h-[35vh] flex flex-col justify-center items-center cursor-pointer w-[220px] bg-white/20 rounded-2xl "
          >
            <div className="flex gap-2 items-center">
              <IoImageOutline className="text-3xl text-gray-300" />
              <span
                className={`${poppins.className} font-[500] text-sm md:text-[1vw] text-gray-300`}
              >
                Or
              </span>
              <MdOndemandVideo className="text-3xl text-gray-300" />
            </div>
            <p
              className={`${poppins.className} font-[300] text-[10px] md:text-[0.6vw] text-gray-300 capitalize`}
            >
              Click to add Images or Video
            </p>
          </label>
          <input type="file" name="" id="file-upload" className="hidden " />
        </div>
        {/* choose specific event  */}
        <div className="w-full border border-[#424242] h-14 md:h-[7vh] rounded-2xl flex justify-between items-center p-3">
          <div>
            <h1
              className={`${poppins.className} font-[600] text-[12px] md:text-[0.8vw] capitalize text-gray-300`}
            >
              Choose Specific Event
            </h1>
            <p className={`text-sm md:text-[0.7vw] text-gray-300`}>
              Choose value
            </p>
          </div>
          <div className="relative flex w-fit justify-between">
            <select
              defaultValue=""
              className="bg-[#45b7db]  text-gray-700 rounded-full px-3 py-1.5 text-[12px]  outline-none appearance-none"
            >
              <option value="" disabled hidden>
                Select Type
              </option>
              <option value="option1">Event 1</option>
              <option value="option2">Event 2</option>
            </select>
          </div>
        </div>
        {/* title  */}
        <div className="">
          <h1
            className={`${poppins.className} font-[500] text-[12px] md:text-[0.8vw] capitalize`}
          >
            title
          </h1>
          <input
            type="text"
            className="w-full border border-[#424242] outline-none text-gray-300 text-[12px] md:text-[0.8vw] h-[5vh]  rounded-xl md:rounded-[0.8vw] flex justify-between items-center p-3"
            placeholder="Title"
          />
        </div>
        {/* caption  */}
        <div className="">
          <h1
            className={`${poppins.className} font-[500] text-[12px] md:text-[0.8vw] capitalize`}
          >
            caption
          </h1>
          <label className="w-full border border-[#424242] outline-none text-gray-300 text-[12px] md:text-[0.8vw] h-[20vh] rounded-xl md:rounded-[0.8vw] flex items-start px-2 py-1">
            <input
              type="text"
              placeholder="Caption"
              className="w-full h-auto bg-transparent outline-none "
            />
          </label>
        </div>
      </div>
      {/* footer  */}
      <div className="footer  h-[10vh] w-full  mt-[1vw]">
        <div className="flex justify-between items-center">
          <a
            href="/"
            className={`${poppins.className} font-light text-sm md:text-[1vw]`}
          >
            Reset
          </a>
          <button
            type="button"
            onClick={() => {
              handlepagenum();
            }}
            disabled={number >= totalpage}
            className={`${poppins.className} italic  font-[600] bg-[#e5c839] hover:bg-yellow-400 text-[2vw] text-black rounded-2xl w-[9.5vw] md:text-[1vw] md:rounded-4xl md:w-[6vw] px-[1vw] py-[1vh] flex items-center  gap-[0.3vw] hover:-translate-y-1 my-8 transition duration-300 group`}
          >
            Next
            <span>
              <RiArrowRightSLine className="group-hover:translate-x-0.5 duration-300" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompaignDataRight;
