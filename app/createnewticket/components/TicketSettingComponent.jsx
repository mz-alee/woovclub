"use client";
import React, { useState, useEffect, useRef } from "react";
import Dropdown from "@/app/components/Dropdown";
import { poppins } from "@/app/components/Font";
import Ticketlist from "@/app/newticketpage2/components/Ticketlist";
import { useForm, useFieldArray, useWatch } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import ModalExample from "@/app/Modal";
import { Tooltip } from "react-tooltip";
import { TiTick } from "react-icons/ti";
import { AiTwotoneDelete } from "react-icons/ai";
import { TbArrowsExchange } from "react-icons/tb";
import { MdClose } from "react-icons/md";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "react-tooltip/dist/react-tooltip.css";
import Swal from "sweetalert2";
const TicketSettingComponent = () => {
  const [generatedSeats, setGeneratedSeats] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(false);
  const [ticketIndex, setTicketIndex] = useState(0);
  const [ticketNotAvail, setTicketNotAvail] = useState(false);

  const ticketSchema = yup.object({
    capacity: yup
      .number()
      .transform((value, originalValue) =>
        String(originalValue).trim() === "" || isNaN(value) ? 0 : value
      )
      .min(1)
      .required("enter a number"),
    team1: yup.string().trim().required("Team 1 name is required"),
    team2: yup.string().trim().required("Team 2 name is required"),
    ticketsCategory: yup.string().required("Please select an option"),
    type: yup.string().required("Please select an option"),
    addSeat: yup
      .number()
      .transform((value, originalValue) =>
        String(originalValue).trim() === "" || isNaN(value) ? 0 : value
      )
      .min(1)
      .required("add the seat number"),
    category: yup.string().required("Please select an seat alphabet "),
  });

  const {
    register,
    control,
    handleSubmit,
    getValues,
    setValue,
    watch,
    trigger,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ticketSchema),
    mode: "onChange",
    defaultValues: {
      addSeat: [],
      capacity: 0,
      court: "",
      tickets: [],
      series: ["a", "b", "c", "d"],
      category: "",
      type: "",
      ticketsCategory: "",
      ticketsprice: 0,
      team1: "",
      team2: "",
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

  // const handleRemove = (index) => {
  //   const current = getValues("tickets");
  //   const updated = current.filter((_, i) => i !== index);
  //   setValue("tickets", updated);
  // };

  const onsubmit = (data) => {
    toast("form submited");
    console.log("all data from react hook from", data);
  };
  const handleAddseat = () => {
    trigger();
    console.log("react hook form data", value);

    if (!getValues("team1").length) {
      toast.error(` "team" 1 name required`);
      return;
    }
    if (!getValues("team2").length) {
      toast.error(` "team" 2 name required`);
      return;
    }
    if (!getValues("type").length) {
      toast.error("select the type first");
      return;
    }
    if (!getValues("category").length) {
      toast.error("select the category first");
      return;
    }
    const capacity = getValues("capacity");
    const seatCount = getValues("addSeat");
    const type = getValues("type");
    const category = getValues("category");
    if (!capacity || capacity <= 0)
      return toast.error("Please enter a  capacity number");
    if (!seatCount || seatCount <= 0)
      return toast.error("Please enter seat number to add");
    if (seatCount > capacity)
      return toast.error("Seat number exceeds total capacity");

    if (errors.length) {
      return;
    }
    const totalSeats = generatedSeats.length;
    if (totalSeats + seatCount > capacity) {
      toast.error("ticket exceed");
      return;
    }
    const existCategory = generatedSeats.find(
      (seat) => seat.type === type && seat.category !== category
    );

    if (existCategory) {
      toast.error(
        `"${type}" already using  "${existCategory.category}" category`
      );
      return;
    }
    const existingType = generatedSeats.find(
      (seat) => seat.category === category && seat.type !== type
    );
    if (existingType) {
      toast.error(
        `"${category}" already using in  "${existingType.type}" section`
      );
      return;
    }

    if (!errors.length) {
      setIsOpen(!isOpen);
    }

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

    return arr;
  };
  const capacity = useWatch({
    control,
    name: "capacity",
  });
  console.log("all data", generatedSeats);

  // function for selected ticket

  const handleToolTip = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      width: "400px",
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedList = generatedSeats.filter(
          (_, index) => index !== ticketIndex
        );

        setGeneratedSeats(updatedList);
        toast.success("seat deleted");
        Swal.fire({
          title: "Deleted!",
          text: "Seat has been deleted.",
          icon: "success",
        });
      }
    });
  };

  const handleSelectedTicket = (index) => {
    setTicketIndex(index);
  };
  const updateSeatStatus = (status) => {
    const updatedStatus = [...generatedSeats];
    updatedStatus[ticketIndex].status = status;
    setGeneratedSeats(updatedStatus);
    toast.success(`seat marked as ${status}`);
  };
  //  for del all seats
  const handleDeleteSeat = (type) => {
    const topDel = generatedSeats.filter((items) => items.type !== type);
    setGeneratedSeats(topDel);
    toast.success(` "${type}" Side Seats Deleted`);
  };
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
          zIndex: 2,
          backgroundColor: "white",
          color: "red",
          borderRadius: "0.5rem",
          height: "80px",
          width: "160px",
          display: "flex",
          alignItems: "center",
          gap: "1px",
        }}
        render={() => (
          <div className="text-black ">
            <button
              type="button"
              onClick={() => updateSeatStatus("not-available")}
              className={`flex items-center  first-letter:uppercase text-gray-600 text-[11px] gap-2  `}
            >
              <span className="text-red-500">
                <MdClose />
              </span>
              set as not available
            </button>
            <button
              onClick={() => updateSeatStatus("available")}
              className="flex items-center  first-letter:uppercase text-gray-600 text-[11px] gap-2"
            >
              <span className="text-green-400 text-md">
                <TiTick />
              </span>
              set as available
            </button>
            <button className="flex items-center  first-letter:uppercase text-gray-600 text-[11px] gap-2">
              <span className="text-blue-400 text-md">
                <TbArrowsExchange />{" "}
              </span>
              select category
            </button>
            <button
              type="button"
              onClick={handleToolTip}
              className="flex items-center  first-letter:uppercase text-gray-600 text-[11px] gap-2"
            >
              <span className=" text-md">
                <AiTwotoneDelete />
              </span>
              delete seat
            </button>
          </div>
        )}
      />
      <ToastContainer />
      <div className="setting-container  px-[1vw] py-[1vh] text-black bg-[#ededed] w-full min-h-[100vh] rounded-[1.5vw]">
        <form onSubmit={handleSubmit(onsubmit)}>
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
            <div className=" flex flex-col items-end">
              <div className="dropdownlist relative bg-[#45b7db] rounded-[1.5vw] h-[7vh] min:w-[15vw] md:h-[7vh] md:w-[8vw] py-2 flex justify-between items-center px-4">
                <button
                  type="buttom"
                  onClick={() => {
                    const value = getValues("capacity") || 0;
                    setValue("capacity", value - 1);
                  }}
                  disabled={capacity < 1}
                  className={`${poppins.className} font-[600] text-lg`}
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
                  {...register("capacity", { valueAsNumber: true })}
                  className="appearance-none font-bold [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-center md:text-sm lg:text-xl outline-none w-[3vw]"
                />
                <button
                  type="button"
                  onClick={() => {
                    const value = getValues("capacity") || 0;
                    setValue("capacity", value + 1);
                  }}
                  className={`${poppins.className} font-[600] text-lg`}
                >
                  +
                </button>
              </div>
              {errors.capacity && (
                <p className="error">{errors.capacity.message}</p>
              )}
            </div>
          </div>

          {/* Team  */}
          <div className="border-b border-gray-400 w-full min-h-[17vh] my-2 justify-center flex flex-col gap-4 py-2">
            <div className="flex flex-col justify-between w-full  ">
              <div className="flex justify-between w-full">
                <div>
                  <h1 className="font-bold">Team 1</h1>
                  <p className="text-gray-600 capitalize text-[12px]">
                    enter team 1 name
                  </p>
                </div>
                <input
                  {...register("team1")}
                  className="border border-gray-600 py-2 px-2 outline-none rounded-xl"
                  type="text"
                  placeholder="Enter Team 1 Name"
                />
              </div>
              <div>
                {errors.team1 && (
                  <p className="error">{errors.team1.message}</p>
                )}
              </div>
            </div>
            <div className="flex flex-col justify-between w-full  ">
              <div className="flex justify-between w-full">
                <div>
                  <h1 className="font-bold">Team 2</h1>
                  <p className="text-gray-600 capitalize text-[12px]">
                    enter team 2 name
                  </p>
                </div>
                <input
                  {...register("team2")}
                  className="border border-gray-600 py-2 px-2 outline-none rounded-xl"
                  type="text"
                  placeholder="Enter Team 2 Name"
                />
              </div>
              {errors.team2 && <p className="error">{errors.team2.message}</p>}
            </div>
          </div>
        </form>

        {/* Ticket Type Rows */}

        <div className="min-h-[80vh] w-full mt-8 flex flex-col px-2 py-2 gap-4">
          {/* Modal section */}
          <div className="flex  items-center relative flex-col justify-center gap-2 text-center h-fit">
            <h1 className={`${poppins.className} italic text-center text-lg`}>
              seat availability
            </h1>
            <button
              // type="button"
              className="bg-blue-400 text-white rounded-2xl text-sm capitalize italic px-2  w-fit py-1  hover:bg-blue-500 "
              onClick={() => setIsOpen(true)}
            >
              add seat
            </button>
          </div>

          {/* Ticket map section */}
          <div className="flex w-full flex-grow">
            {/* Left section */}
            <div className="w-1/4 flex justify-center items-center gap-2 flex-wrap">
              {generatedSeats.filter((item) => item.type === "Left").length <
                1 && (
                <h1
                  className={`${poppins.className} italic text-center text-gray-500`}
                >
                  Left
                </h1>
              )}
              <div className="flex  justify-center flex-wrap gap-2 mt-4">
                <div className="flex flex-wrap ">
                  {generatedSeats
                    .filter((item) => item.type === "Left")
                    .map((item, index) => (
                      <div key={index}>
                        <a className="w-fit" data-tooltip-id="my-tooltip">
                          <button
                            onMouseEnter={() => {
                              handleSelectedTicket(index);
                            }}
                            className="h-fit bg-gray-300/50 px-2 py-0.5   rounded-xl text-[10px]  capitalize italic text-black/60"
                          >
                            {item.category} {item.seatNo}
                          </button>
                        </a>
                      </div>
                    ))}
                </div>
                <div>
                  {generatedSeats.filter((item) => item.type === "Left")
                    .length > 0 && (
                    <button
                      onClick={() => {
                        handleDeleteSeat("Left");
                      }}
                    >
                      ...
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Center section */}
            <div className="w-1/2 flex flex-col justify-between">
              {/* Top section */}
              <div className="w-full flex justify-center items-center flex-col gap-2 flex-wrap py-2">
                {generatedSeats.filter((item) => item.type === "Top").length <
                  1 && (
                  <h1
                    className={`${poppins.className} italic text-center text-gray-500`}
                  >
                    Top
                  </h1>
                )}
                <div className="flex flex-wrap gap-2  mt-4">
                  {generatedSeats
                    .filter((item) => item.type === "Top")
                    .map((item, index) => (
                      <div key={index}>
                        <a className="w-fit" data-tooltip-id="my-tooltip">
                          <button
                            onMouseEnter={() => {
                              handleSelectedTicket(index);
                            }}
                            className={`h-fit  px-2 py-0.5   rounded-xl text-[10px]  capitalize italic text-black/60 ${
                              item.status === "not-available"
                                ? "bg-red-400"
                                : "bg-gray-300/50"
                            }`}
                          >
                            {item.category} {item.seatNo}
                          </button>
                        </a>
                      </div>
                    ))}
                </div>
                {generatedSeats.filter((item) => item.type === "Top").length >
                  0 && (
                  <button
                    onClick={() => {
                      handleDeleteSeat("Top");
                    }}
                  >
                    ...
                  </button>
                )}
              </div>

              {/* Middle visual section */}
              <div className="w-full flex justify-around  px-4 my-10 items-center relative  py-4">
                <div className="border-l border-gray-500 h-1/2"></div>
                <div className="border border-gray-500 rounded-full w-[100px] h-[100px]"></div>
                <div className="border-l border-gray-500 h-[30vh] absolute left-[50%] translate-x-[-50%]"></div>
                <div className="border-l border-gray-500 h-1/2"></div>
              </div>

              {/* Bottom section */}
              <div className="w-full flex justify-center flex-col items-center gap-2 flex-wrap py-2">
                {generatedSeats.filter((item) => item.type === "Bottom")
                  .length < 1 && (
                  <h1
                    className={`${poppins.className} italic text-center text-gray-500`}
                  >
                    Bottom
                  </h1>
                )}
                {generatedSeats.filter((items) => items.type === "Bottom")
                  .length > 0 && (
                  <button
                    onClick={() => {
                      handleDeleteSeat("Bottom");
                    }}
                  >
                    ...
                  </button>
                )}
                <div className="flex flex-wrap gap-2 mt-4">
                  {generatedSeats
                    .filter((item) => item.type === "Bottom")
                    .map((item, index) => (
                      <div key={index}>
                        <a className="w-fit " data-tooltip-id="my-tooltip">
                          <button
                            onMouseEnter={() => {
                              handleSelectedTicket(index);
                            }}
                            className="h-fit bg-gray-300/50 px-2 py-0.5   rounded-xl text-[10px]  capitalize italic text-black/60"
                          >
                            {item.category} {item.seatNo}
                          </button>
                        </a>
                      </div>
                    ))}
                </div>
              </div>
            </div>

            {/* Right section */}
            <div className="w-1/4 flex justify-center items-center gap-2 flex-wrap">
              {generatedSeats.filter((item) => item.type === "Right").length <
                1 && (
                <h1
                  className={`${poppins.className} italic text-center text-gray-500`}
                >
                  Right
                </h1>
              )}
              <div className="flex flex-wrap gap-2 mt-4">
                {generatedSeats.filter((items) => items.type === "Right")
                  .length ? (
                  <button
                    onClick={() => {
                      handleDeleteSeat("Right");
                    }}
                  >
                    ...
                  </button>
                ) : (
                  ""
                )}
                {generatedSeats
                  .filter((item) => item.type === "Right")
                  .map((item, index) => (
                    <div key={index}>
                      <a className="w-fit " data-tooltip-id="my-tooltip">
                        <button
                          onMouseEnter={() => {
                            handleSelectedTicket(index);
                          }}
                          className="h-fit bg-gray-300/50 px-2 py-0.5   rounded-xl text-[10px]  capitalize italic text-black/60"
                        >
                          {item.category} {item.seatNo}
                        </button>
                      </a>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="root">
        <ModalExample
          generatedSeats={generatedSeats}
          capacity={value.capacity}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          errors={errors}
          series={value.series}
          btnName={"add seat"}
          register={register}
          handleAddseat={handleAddseat}
        />
      </div>
    </div>
  );
};

export default TicketSettingComponent;
