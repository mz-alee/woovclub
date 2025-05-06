"use client";
import { poppins } from "@/app/components/Font";
import React, { useEffect, useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "./DatePicker";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { MdDelete } from "react-icons/md";
import Select from "react-select";
import * as yup from "yup";
import { format } from "date-fns";
import moment from "moment";
// import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { Button } from "@/components/ui/button";
import MuiDatePicker from "./DatePicker";
import { DropDown } from "./DropDown";
import { toast, ToastContainer } from "react-toastify";
const CompaignSettingRight = ({
  handlepagenum,
  number,
  totalpage,
  values,
  setPage2Values,
}) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [newArea, setNewArea] = useState(["area 1"]);
  const [newAreaSelectedVal, setNewAreaSelectedVal] = useState("");
  const campaignSettingSchema = yup.object({
    budget: yup
      .number()
      .transform((value, originalValue) => {
        return String(originalValue).trim === "" || isNaN(value) ? 0 : value;
      })
      .min(3)
      .max(20)
      .required(),
    genderType: yup.string().required(),
    startAge: yup
      .number()
      .typeError("Start age must be a number")
      .required("Start age is required"),
    endAge: yup
      .number()
      .typeError("End age must be a number")
      .required("End age is required"),
    location: yup
      .array()
      .of(yup.string().required("Please select a location"))
      .min(1, "At least one location must be selected"),
  });
  const handleAddArea = () => {
    const defaultArea = ["area 1"];
    const newItem = `area ${defaultArea && newArea.length + 1} `;
    setNewArea((pre) => [...pre, newItem]);
  };

  const {
    register,
    setValue,
    handleSubmit,
    remove,
    trigger,
    control,
    getValues,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(campaignSettingSchema),
    defaultValues: {
      budget: 0,
      startDate: null,
      daysDuration: null,
      endDate: null,
      totalAmount: 0,
      genderType: "",
      startAgeArray: Array.from({ length: 78 }, (_, i) => i + 13),
      startAge: null,
      endAgeArray: [],
      endAge: null,
      ageGroup: "",
      location: [],
    },
  });
  const value = getValues();

  console.log("valuesssssssss", value);
  console.log("locations", value.location);
  const updatedValue = value.location.includes();
  console.log(updatedValue);

  const endAgeArray = [];
  const totalDay = moment(endDate).diff(startDate, "days");
  setValue("daysDuration", totalDay);
  if (value.startAge?.length) {
    for (let i = parseInt(value.startAge) + 1; i <= 90; i++) {
      endAgeArray.push(i);
    }
  }

  setValue("totalAmount", totalDay * value.budget || 0);
  useEffect(() => {
    setValue("startDate", moment(startDate).format(" DD/MMM/YYYY"));
  }, [startDate]);

  setValue("endDate", moment(endDate).format(" DD/MMM/YYYY"));

  console.log("errors", errors);
  console.log("all values", value);
  const onSubmit = (data) => {
    setPage2Values(value);
    handlepagenum();
    console.log("page 2 form data", data);
  };
  const handleDeleteArea = (id, currentValue) => {
    const currentLocations = getValues("location");
    const updatedArea = newArea.filter((_, index) => index !== id);
    const updatedLocations = currentLocations.filter(
      (_, index) => index !== id
    );
    setValue("location", updatedLocations);
    console.log("updatedLocations", updatedLocations);
    setNewArea(updatedArea);
  };
  return (
    // {/* main content  */}
    <div>
      <ToastContainer />
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1
          className={`${poppins.className} font-[600] text-[12px] md:text-[0.8vw] capitalize`}
        >
          Campaign Settings
        </h1>
        <div className="setting-container mt-4  px-[1vw] py-[1vh]  text-black bg-[#ededed]   w-full min-h-[80vh] rounded-[1.2vw]">
          {/* AD Budget*/}
          <div className="border-b border-[#d0d0d0] w-full h-[10vh]  flex justify-between items-center">
            <div>
              <h1
                className={`${poppins.className} text-sm  md:text-[12px] font-[600]`}
              >
                AD Budget
              </h1>
              <p className="text-gray-600 text-[10px]">Choose daily budget </p>
              {errors.budget && (
                <p className="error">{errors.budget.message}</p>
              )}
            </div>
            <div className=" flex flex-col items-end">
              <div className="dropdownlist relative bg-[#45b7db] rounded-[1.5vw] h-[7vh] w-[17vw] md:h-[5.5vh] md:w-[8vw] py-2 flex justify-between items-center px-3">
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
                placeholder='0'
                  {...register("budget")}
                  onKeyDown={(e) => {
                    const invalidChars = ["-", "+", "e", "E", ".", "="];
                    if (invalidChars.includes(e.key)) {
                      e.preventDefault();
                    }
                  }}
                  type="number"
                  className={`appearance-none  [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-center italic md:text-sm lg:text-lg font-[600] outline-none w-[5vw] ${poppins.className}`}
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
          <div className="border-b border-[#d0d0d0] w-full py-2 min-h-[12vh] flex flex-col gap-2 justify-between items-center">
            <div className="w-full flex  justify-between">
              <h1
                className={`${poppins.className} text-sm  md:text-[12px] font-[600]`}
              >
                Duration
              </h1>
              <h1
                className={`${poppins.className} text-sm  md:text-[12px] font-[600]`}
              >
                {totalDay || 0} days
              </h1>
            </div>
            <div className="w-full flex  justify-between capitalize">
              <div>
                <h1 className={`text-sm md:text-[0.7vw] text-gray-500 `}>
                  from
                </h1>
                <DatePicker
                  name={"startDate"}
                  Position={"left-0"}
                  date={startDate}
                  setDate={setStartDate}
                  Controller={Controller}
                  control={control}
                  startDate={startDate}
                  endDate={endDate}
                  active={true}
                  range={new Date()}
                />
              </div>
              <div>
                <h1 className={`text-sm md:text-[0.7vw]  text-gray-500`}>to</h1>
                <DatePicker
                  Controller={Controller}
                  control={control}
                  name={"endDate"}
                  startDate={startDate}
                  active={startDate === null ? false : true}
                  Position={"right-0"}
                  endDate={endDate}
                  disabled={startDate === null}
                  range={startDate}
                  date={endDate}
                  setDate={setEndDate}
                />
              </div>
              {/* <MuiDatePicker/> */}
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
                  {value.totalAmount}
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
              {!value.genderType?.length && errors.genderType && (
                <p className="error">{errors.genderType.message}</p>
              )}
            </div>
            <div className="relative flex w-fit flex-col justify-between">
              {/* <Controller
                name="genderType"
                control={control}
                defaultValue=""
                render={({ field }) => {
                  <DropDown
                    list={["Women", "Men", "All"]}
                    value={field.value}
                    onChange={field.onChange}
                  />
                }}
              /> */}

              <Controller
                name="genderType"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <DropDown
                    list={["Women", "Men", "All"]}
                    value={field.value}
                    onChange={field.onChange}
                  />
                )}
              />
            </div>
          </div>
          {/* age group  */}
          <div className=" w-full min-h-[13vh] flex  flex-col justify-center ">
            <div className="w-full flex justify-between items-center">
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
                    {...register("startAge", {
                      onChange: (e) => {
                        trigger("startAge");
                        setValue("endAge", "");
                      },
                    })}
                    defaultValue=""
                    className="bg-[#45b7db] scrollbar-hide  rounded-full px-6 py-2 text-[12px] outline-none appearance-none max-h-[200px] overflow-y-auto"
                  >
                    <option value="" disabled>
                      0 year
                    </option>
                    {value.startAgeArray?.map((items, index) => (
                      <option key={index} value={items}>
                        {items} year
                      </option>
                    ))}
                  </select>
                  {/* <Controller
                    name="startAge"
                    control={control}
                    defaultValue=""
                    render={({ field }) => {
                      return (
                        <DropDown
                          list={Array.from({ length: 78 }, (_, i) => i + 13)}
                          value={field.value}
                          onChange={field.onChange}
                        />
                      );
                    }}
                  /> */}
                </div>
                <h2 className="text-gray-600 text-[10px]">To</h2>
                <div className="relative flex w-fit justify-between ">
                  <select
                    disabled={value.startAge === 0}
                    {...register("endAge", {
                      onChange: (e) => {
                        console.log(e.target.value);

                        trigger("endAge");
                      },
                    })}
                    defaultValue=""
                    className="bg-[#45b7db]  flex my-4  rounded-full px-6 py-2 text-[12px] outline-none appearance-none  overflow-y-auto"
                  >
                    {<option value="">select Type</option>}
                    {endAgeArray?.map((items, index) => (
                      <option key={index} value={items}>
                        {items} year
                      </option>
                    ))}
                  </select>
                  {/* <Controller
                    name="endAge"
                    control={control}
                    defaultValue=""
                    render={({ field }) => {
                      return (
                        <DropDown
                          list={endAgeArray}
                          value={field.value}
                          onChange={field.onChange}
                        />
                      );
                    }}
                  /> */}
                </div>
              </div>
            </div>
            {errors.startAge ? (
              <p className="error">{errors.startAge.message}</p>
            ) : (
              errors.endAge && <p className="error">{errors.endAge.message}</p>
            )}
          </div>
          {/* area  */}
          <div className=" w-full min-h-[14vh]  flex flex-col gap-2 justify-between items-center">
            {newArea.map((items, index) => {
              const allSelected = getValues("location") || [];
              const currentValue = allSelected[index];
              console.log("current value ", currentValue);

              const availableOptions = [
                "pakistan",
                "lahore",
                "islamabad",
                "bwp",
              ].filter(
                (option) =>
                  !allSelected.includes(option) || option === currentValue
              );

              return (
                <div
                  key={index}
                  className="w-full flex justify-between items-center"
                >
                  <div>
                    <h1
                      className={`${poppins.className} text-sm md:text-[12px] font-[600]`}
                    >
                      Area
                    </h1>
                    <p className="text-gray-600 text-[10px]">
                      based on users activity
                    </p>
                    {errors.location?.[index] && (
                      <p className="text-red-500 text-[10px]">
                        {errors.location[index]?.message}
                      </p>
                    )}
                  </div>

                  <div className="flex items-center justify-center gap-2">
                    <div className="relative flex w-fit flex-col justify-between">
                      <Controller
                        name={`location.${index}`}
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                          <DropDown
                            list={availableOptions}
                            value={field.value}
                            onChange={(val) => {
                              field.onChange(val);
                              trigger(`location.${index}`);
                            }}
                          />
                        )}
                      />
                      {/* {errors.location?.[index] && (
                        <p className="error">
                          {errors.location[index].message}
                        </p>
                      )} */}
                    </div>

                    <button
                      className={index === 0 ? "hidden" : "block"}
                      disabled={index === 0}
                      type="button"
                      onClick={() => handleDeleteArea(index, currentValue)}
                    >
                      <MdDelete className="text-red-600" />
                    </button>
                  </div>
                </div>
              );
            })}
            <button
              type="button"
              disabled={newArea.length === 4}
              onClick={handleAddArea}
              className={`w-full border-dashed border rounded-xl  ${
                newArea.length === 4
                  ? "border-dashed border border-[#a9a6ad]  "
                  : "border-gray-700"
              } py-2 px-2 h-[5vh] flex items-center justify-between`}
            >
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
            </button>
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
              type="submit"
              // onClick={() => {
              //   handlepagenum();
              // }}
              disabled={number >= totalpage}
              className={`${poppins.className} italic  font-[600] bg-[#e5c839] hover:bg-yellow-400 text-[3.5vw] text-black rounded-2xl min-w-[9.5vw] md:text-[1vw] md:rounded-4xl md:w-[6vw] px-[1vw] py-[1vh] flex items-center  gap-[0.3vw] hover:-translate-y-1 my-8 transition duration-300 group`}
            >
              Next
              <span>
                <RiArrowRightSLine className="group-hover:translate-x-0.5 duration-300" />
              </span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CompaignSettingRight;
