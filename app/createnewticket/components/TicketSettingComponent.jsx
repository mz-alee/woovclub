"use client";
import React, { useState, useEffect, useRef } from "react";
import Dropdown from "@/app/components/Dropdown";
import { poppins } from "@/app/components/Font";
import Ticketlist from "@/app/newticketpage2/components/Ticketlist";
import { useForm, useFieldArray } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import ModalExample from "@/app/Modal";
import { Tooltip } from "react-tooltip";
import { TiTick } from "react-icons/ti";
import { AiTwotoneDelete } from "react-icons/ai";
import { TbArrowsExchange } from "react-icons/tb";
import { MdClose } from "react-icons/md";
// import 'react-tooltip/dist/react-tooltip.css'
const TicketSettingComponent = () => {
  const [generatedSeats, setGeneratedSeats] = useState([]);
  const {
    register,
    control,
    handleSubmit,
    getValues,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      addSeat: [],
      capacity: 0,
      court: "",
      tickets: [{ type: "", price: 0 }],
      series: ["a","b","c","d"],
      category:'',
      type: "",
    },
  });

  const value = getValues();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "tickets",
  });

  const newTicketType = () => {
    const currentTickets = getValues("tickets");
    if (currentTickets.length >= 4) return;

    toast("New ticket type added");
    setValue("tickets", [...currentTickets, { type: "", price: 0 }]);
  };

  const handleRemove = (index) => {
    const current = getValues("tickets");
    const updated = current.filter((_, i) => i !== index);
    setValue("tickets", updated);
  };

  const onSubmit = (data) => {
    console.log("FORM SUBMITTED:", data);
  };

  const handleAddseat = () => {
    const capacity = getValues("capacity");
    const seatCount = getValues("addSeat");
    const type = getValues("type");

    if (!capacity || capacity <= 0)
      return toast.error("Please enter a valid capacity");
    if (!seatCount || seatCount <= 0)
      return toast.error("Please enter seat number to add");
    if (seatCount > capacity)
      return toast.error("Seat number exceeds total capacity");

    const totalSeats = generatedSeats.length;
    console.log("total seat", totalSeats);

    if (totalSeats + seatCount > capacity) {
      toast("ticket exceed");
      return;
    }
    console.log("total seats", totalSeats);
    const generated = generateTickets(totalSeats + 1, seatCount, type);
    toast.success(`Successfully added ${seatCount} seats`);
    setGeneratedSeats((prev) => [...prev, ...generated]);
  };

  const generateTickets = (start, count, type) => {
    const category = getValues("category");
    const arr = Array.from({ length: count }, (_, i) => ({
      seatNo: start + i,
      status: "available",
      type: type,
      category: category,
    }));
    console.log(arr);

    return arr;
  };
  useEffect(() => {
    const types = value.type;
    const category = value.series;
    console.log("types", types);
    console.log("category", category);
  }, [value]);
  return (
    <div className="setting flex flex-col gap-2">
      <h1 className="capitalize">ticket settings</h1>

      <Tooltip
        clickable={true}
        delayHide={200}
        id="my-tooltip"
        place="top"
        offset={5}
        style={{
          backgroundColor: "white",
          color: "red",
          borderRadius: "0.5rem",
          height: "80px",
          width: "160px",
          display: "flex",
          alignItems: "center",
          gap:'1px',
        }}
        render={() => (
          <div className="text-black  ">
            <button className="flex items-center  first-letter:uppercase text-gray-600 text-[11px] gap-2">
              <span className='text-red-500'><MdClose/></span> set as not available
            </button>
            <button className="flex items-center  first-letter:uppercase text-gray-600 text-[11px] gap-2">
              <span className="text-green-400 text-md">
                <TiTick />
              </span>
              set as available
            </button>
            <button className="flex items-center  first-letter:uppercase text-gray-600 text-[11px] gap-2">
              <span className="text-blue-400 text-md"><TbArrowsExchange /> </span>select category
            </button>
            <button className="flex items-center  first-letter:uppercase text-gray-600 text-[11px] gap-2">
              <span className=" text-md">
                < AiTwotoneDelete/>
              </span>
              delete selected
            </button>
          </div>
        )}
      />
      <ToastContainer />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="setting-container px-[1vw] py-[1vh] text-black bg-[#ededed] w-full min:h-[80vh] rounded-[1.5vw]"
      >
        {/* Capacity */}
        <div className="border-b border-gray-400  w-full h-[12vh] flex justify-between items-center">
          <div>
            <h1 className={`${poppins.className} text-md font-[500]`}>
              Capacity
            </h1>
            <p className="text-gray-600 text-[12px]">
              Choose the number of seats available
            </p>
          </div>
          <div className="dropdownlist relative bg-[#45b7db] rounded-[1.5vw] h-[7vh] min:w-[15vw] md:h-[7vh] md:w-[8vw] py-2 flex justify-center items-center px-2">
            <input
              type="number"
              {...register("capacity", { valueAsNumber: true })}
              className="appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-center md:text-sm lg:text-xl outline-none w-[3vw]"
            />
          </div>
        </div>

        {/* Court */}
        <div className="border-b border-gray-400 w-full h-[12vh] flex justify-between items-center">
          <div>
            <h1 className={`${poppins.className} text-md font-[500]`}>Court</h1>
            <p className="text-gray-600 text-[12px]">
              Select the court the game will be played in
            </p>
          </div>
          <div className="dropdownlist relative bg-[#45b7db] rounded-[1.5vw] h-[7vh] min:w-[15vw] md:h-[7vh] md:min-w-[8vw] py-2 flex justify-between items-center px-2">
            <h1 className={`text-[10px]`}>North coast football court</h1>
            <Dropdown />
          </div>
        </div>

        {/* Ticket Type Rows */}
        <div className="border-b border-gray-400 w-full min:h-[22vh] py-3 pb-14 flex flex-col gap-[2vh]">
          <div>
            <h1 className={`${poppins.className} text-md font-[500]`}>
              Ticket Type
            </h1>
            <p className="text-gray-600 text-[12px]">
              Add one or more ticket type
            </p>
          </div>
          {fields.map((item, index) => (
            <div key={item.id}>
              <Ticketlist
                poppins={poppins}
                index={index}
                register={register}
                setValue={setValue}
                getValues={getValues}
              />
              <button
                type="button"
                onClick={() => handleRemove(index)}
                className={fields.length > 1 ? "block text-red-500" : "hidden"}
              >
                x
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={newTicketType}
            disabled={fields.length === 4}
            className={`${poppins.className} text-sm capitalize outline-none cursor-pointer font-[600] border-dashed border-1 flex justify-between px-4 items-center border-gray-800 w-full h-[8vh] rounded-4xl`}
          >
            add new tickect type
            <span>+</span>
          </button>
        </div>


       
        <div className="min-h-[50vh] w-full  mt-8 flex px-2 py-2 flex-col gap-4 ">
          <div className="flex relative flex-col justify-center  gap-2 text-center h-fit">
            <h1
              className={`${poppins.className} italic text-center  text-lg`}
            >
              seat availability
            </h1>

            <div className="root" id="root">
              <ModalExample
              series={value.series}
                btnName={"add seat"}
                register={register}
                handleAddseat={handleAddseat}
              />
            </div>
          </div>
          <div className="border border-gray-400 h-[15vh]  w-full rounded-lg px-1 py-2 flex flex-col">
            <h1
              className={`${poppins.className} italic text-center text-gray-500`}
            >
              Top
            </h1>

            <div className="flex flex-wrap gap-2 mt-4">
              {generatedSeats
                .filter((item) => item.type === "Top")
                .map((item, index) => (
                  <div key={index}>
                  <a
                    className=" w-fit"
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content="Hello what's up!"
                  >
                    <button
                    
                      className="h-fit bg-green-200 px-2 py-1 text-sm rounded capitalize italic text-black/30"
                    >
                      {item.series} {item.seatNo}
                    </button>
                  </a>
                  </div>
                ))}
            </div>
          </div>
          <div className="border border-gray-400 h-[15vh]  w-full rounded-lg px-1 py-2 flex flex-col">
            <h1
              className={`${poppins.className} italic text-center text-gray-500`}
            >
              Bottom
            </h1>

            <div className="flex flex-wrap gap-2 mt-4">
              {generatedSeats
                .filter((item) => item.type === "Bottom")
                .map((item, index) => (
                  <button
                    key={index}
                    className="h-fit bg-green-200 px-3 py-1 rounded capitalize italic text-black/30"
                  >
                    {item.series} {item.seatNo}
                  </button>
                ))}
            </div>
          </div>
          {/* left  */}
          <div className="border border-gray-400 h-[15vh] w-full rounded-lg px-1 py-2 flex flex-col">
            <h1
              className={`${poppins.className} italic text-center text-gray-500`}
            >
              Left
            </h1>

            <div className="flex flex-wrap gap-2 mt-4">
              {generatedSeats
                .filter((item) => item.type === "Left")
                .map((item, index) => (
                  <button
                    key={index}
                    className="h-fit bg-green-200 px-3 py-1 rounded capitalize italic text-black/30"
                  >
                    {item.series} {item.seatNo}
                  </button>
                ))}
            </div>
          </div>
          <div className="border border-gray-400 h-[15vh]  w-full rounded-lg px-1 py-2 flex flex-col">
            <h1
              className={`${poppins.className} italic text-center text-gray-500`}
            >
              Right
            </h1>

            <div className="flex flex-wrap gap-2 mt-4">
              {generatedSeats
                .filter((item) => item.type === "Right")
                .map((item, index) => (
                  <button
                    key={index}
                    className="h-fit bg-green-200 px-3 py-1 rounded capitalize italic text-black/30"
                  >
                    {item.series} {item.seatNo}
                  </button>
                ))}
            </div>
          </div>
        </div>
        {/* <Newticketmap /> */}
      </form>
    </div>
  );
};

export default TicketSettingComponent;
