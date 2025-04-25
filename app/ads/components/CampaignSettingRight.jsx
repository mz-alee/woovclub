import { poppins } from "@/app/components/Font";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { RiArrowRightSLine } from "react-icons/ri";
import 'react-datepicker/dist/react-datepicker.css';
const CompaignSettingRight = ({ handlepagenum, number, totalpage }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  return (
    // {/* main content  */}
    <div>
      <h1
        className={`${poppins.className} font-[600] text-[12px] md:text-[0.8vw] capitalize`}
      >
        Campaign Settings
      </h1>
      <div className="setting-container mt-4  px-[1vw] py-[1vh]  text-black bg-[#ededed]   w-full min-h-[80vh] rounded-[1.2vw]">
        <form>
          {/* AD Budget*/}
          <div className="border-b border-[#d0d0d0] w-full h-[10vh]  flex justify-between items-center">
            <div>
              <h1
                className={`${poppins.className} text-sm  md:text-[12px] font-[600]`}
              >
                AD Budget
              </h1>
              <p className="text-gray-600 text-[10px]">Choose daily budget </p>
            </div>
            <div className=" flex flex-col items-end">
              <div className="dropdownlist relative bg-[#45b7db] rounded-[1.5vw] h-[7vh] min:w-[15vw] md:h-[5.5vh] md:w-[7vw] py-2 flex justify-between items-center px-3">
                <button
                  type="buttom"
                  // onClick={() => {
                  //   const value = getValues("capacity") || 0;
                  //   setValue("capacity", value - 1);
                  // }}
                  // disabled={capacity < 1}
                  className={`${poppins.className} font-[600] text-md`}
                >
                  -
                </button>
                <input
                  onKeyDown={(e) => {
                    const invalidChars = ["-", "+", "e", "E", ".", "="];
                    if (invalidChars.includes(e.key)) {
                      e.preventDefault();
                    }
                  }}
                  name="capacity"
                  type="number"
                  className={`appearance-none  [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-center italic md:text-sm lg:text-lg font-[600] outline-none w-[3vw] ${poppins.className}`}
                />
                <button
                  type="button"
                  // onClick={() => {
                  //   const value = getValues("capacity") || 0;
                  //   setValue("capacity", value + 1);
                  // }}
                  className={`${poppins.className} font-[600] text-md`}
                >
                  +
                </button>
              </div>
            </div>
          </div>
          {/* date duration code  */}
          <div className="border-b border-[#d0d0d0] w-full py-2 h-[12vh] flex flex-col justify-between items-center">
            <div className="w-full flex justify-between">
              <h1
                className={`${poppins.className} text-sm  md:text-[12px] font-[600]`}
              >
                Duration
              </h1>
              <h1
                className={`${poppins.className} text-sm  md:text-[12px] font-[600]`}
              >
                0 days
              </h1>
            </div>
            <div className="w-full flex justify-between capitalize">
              <h1 className={`text-sm md:text-[0.7vw] text-gray-500 `}>from</h1>
              <div className="flex items-center">
                <div className="mr-2">
                  <label
                    htmlFor="startDate"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Start Date
                  </label>
                  <DatePicker
                    id="startDate"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    placeholderText="Select start date"
                  />
                </div>
                <div>
                  <label
                    htmlFor="endDate"
                    className="block text-sm font-medium text-gray-700"
                  >
                    End Date
                  </label>
                  <DatePicker
                    id="endDate"
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    placeholderText="Select end date"
                  />
                </div>
              </div>
              <h1 className={`text-sm md:text-[0.7vw] text-gray-500`}>to</h1>
            </div>
          </div>
          {/* total amount  */}
          <div className="border-b border-[#d0d0d0] w-full h-[12vh] flex justify-between items-center">
            <div>
              <h1
                className={`${poppins.className} text-sm  md:text-[12px] font-[600]`}
              >
                Total Amount
              </h1>
              <p className="text-gray-600 text-[10px]">based on duration</p>
            </div>
            <div className=" flex flex-col items-end">
              <div className=" relative bg-[#45b7db] rounded-[1.5vw] h-[7vh] min:w-[15vw] md:h-[5.5vh] md:min-w-[7vw] flex justify-center items-center px-3">
                <h1
                  className={`italic md:text-sm lg:text-[1.2vw]  font-[500]  ${poppins.className}`}
                >
                  12 sar
                </h1>
              </div>
            </div>
          </div>
          {/* gender */}
          <div className="border-b border-[#d0d0d0] w-full h-[12vh] flex justify-between items-center">
            <div>
              <h1
                className={`${poppins.className} text-sm  md:text-[12px] font-[600]`}
              >
                Gender
              </h1>
              <p className="text-gray-600 text-[10px]">
                Choose your targeted gender
              </p>
            </div>
            <div className="relative flex w-fit justify-between">
              <select
                defaultValue=""
                className="bg-[#45b7db]  text-gray-700 rounded-full px-6 py-2 text-[12px]  outline-none appearance-none"
              >
                <option value="" disabled hidden>
                  All
                </option>
                <option value="option1">Women</option>
                <option value="option2">Men</option>
              </select>
            </div>
          </div>
          {/* age group  */}
          <div className=" w-full min-h-[13vh] flex justify-between items-center">
            <div>
              <h1
                className={`${poppins.className} text-sm  md:text-[12px] font-[600]`}
              >
                Age Group
              </h1>
            </div>
            <div className="flex items-center justify-between gap-2">
              <h2 className="text-gray-600 text-[10px]">From</h2>
              <div className="relative flex w-fit justify-between">
                <select
                  defaultValue=""
                  className="bg-[#45b7db]  text-gray-700 rounded-full px-6 py-2 text-[12px]  outline-none appearance-none"
                >
                  <option value="" disabled hidden>
                    0 year
                  </option>
                  <option value="option1">12</option>
                  <option value="option2">13</option>
                  <option value="option3">14</option>
                </select>
              </div>
              <h2 className="text-gray-600 text-[10px]">To</h2>
              <div className="relative flex w-fit justify-between">
                <select
                  defaultValue=""
                  className="bg-[#45b7db]  text-gray-700 rounded-full px-6 py-2 text-[12px]  outline-none appearance-none"
                >
                  <option value="" disabled hidden>
                    0 year
                  </option>
                  <option value="option1">12</option>
                  <option value="option2">13</option>
                  <option value="option3">13</option>
                </select>
              </div>
            </div>
          </div>
          {/* area  */}
          <div className=" w-full min-h-[14vh]  flex flex-col gap-2 justify-between items-center">
            <div className="w-full flex justify-between items-center">
              <div>
                <h1
                  className={`${poppins.className} text-sm  md:text-[12px] font-[600]`}
                >
                  Area
                </h1>
                <p className="text-gray-600 text-[10px]">
                  based on users activity
                </p>
              </div>
              <div className="relative flex w-fit justify-between">
                <select
                  defaultValue=""
                  className="bg-[#45b7db]  text-gray-700 rounded-full px-6 py-2 text-[12px]  outline-none appearance-none"
                >
                  <option value="" disabled hidden>
                    Location
                  </option>
                  <option value="option1">PAK</option>
                  <option value="option2">Moon</option>
                  <option value="option3">Hell</option>
                </select>
              </div>
            </div>
            <div className="w-full border-dashed border rounded-xl border-gray-700 py-2 px-2 h-[5vh] flex items-center justify-between">
              <h1
                className={`${poppins.className} text-sm  md:text-[12px] font-[600]`}
              >
                add new area
              </h1>
              <h1
                className={`${poppins.className} text-sm  md:text-[12px] font-[600]`}
              >
                +
              </h1>
            </div>
          </div>
        </form>
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
              // handleValidations();
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

export default CompaignSettingRight;
