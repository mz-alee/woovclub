"use client";
import { poppins } from "@/app/components/Font";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import * as yup from "yup";

// yup validation schema
const CompaignSchema = yup.object({
  compaignTitle: yup.string().required("title is required"),
  dropdown: yup.string().required(),
  gameCategory: yup.string().required(),
});

const CreateNewCompaign1 = () => {
  const [gameData, setGameData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/gameImages.json");
        const data = await res.json();
        setGameData(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleToggle = (index, name) => {
    setActiveIndex(index);
    setValue("gameCategory", name, { shouldValidate: true });
  };

  //  react hook form
  const {
    register,
    setValue,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(CompaignSchema),
    defaultValues: {
      compaignTitle: "",
      dropdown: "",
      gameCategory: "",
    },
  });
  const value = getValues();

  const handleValidations = () => {
    if (errors.compaignTitle) {
      toast.error("title error");
      return;
    }
    if (errors.dropdown) {
      toast.error("select compaign type first ");
      return;
    }
    if (errors.gameCategory) {
      toast.error("select game category  first ");
      return;
    }
  };
  console.log("state data", value);
  console.log("errors", errors);

  return (
    <div className="w-full">
      <ToastContainer />
      <h1 className={`${poppins.className} text-[12px] my-2 text-white`}>
        Create New Campaign
      </h1>
      <form onSubmit={handleSubmit(onsubmit)}>
        <div className="bg-[#ededed] rounded-2xl text-black w-full  min-h-[35vh] px-[1.5vw] flex flex-col justify-around">
          <div>
            <h1 className={`${poppins.className} text-[12px] font-light`}>
              create new compaign
            </h1>
            <div className="w-full border border-gray-300 rounded-lg ">
              <input
                {...register("compaignTitle")}
                className="w-full px-2 text-gray-500 text-[12px] outline-none border-none"
                placeholder="Enter Title"
                type="text"
              />
            </div>
            {errors.compaignTitle && (
              <p className="error">{errors.compaignTitle.message}</p>
            )}
          </div>
          <div className="2nd row flex justify-between w-full">
            <div>
              <h1
                className={`${poppins.className} text-[12px] capitalize font-[500]`}
              >
                compaign type
              </h1>
              <h1
                className={`${poppins.className} text-[8px] capitalize font-[500]`}
              >
                Choose the type of your campaign
              </h1>
              {errors.dropdown && (
                <p className="error">{errors.dropdown.message}</p>
              )}
            </div>
            <div>
              <div className="relative flex w-fit justify-between">
                <select
                  {...register("dropdown")}
                  defaultValue=""
                  className="bg-[#45b7db]  text-gray-700 rounded-full px-6 py-2 text-[12px]  outline-none appearance-none"
                >
                  <option value="" disabled hidden>
                    select type
                  </option>
                  <option value="option1">Events</option>
                  <option value="option2">Courts</option>
                  <option value="option3">Posts</option>
                </select>
              </div>
            </div>
          </div>
          <div className="3rdrow w-full flex justify-between items-center">
            <h1
              className={`${poppins.className} text-[12px] capitalize font-[500]`}
            >
              select support
            </h1>
            <div className="flex gap-2 flex-wrap">
              {gameData.map((items, index) => {
                return (
                  <button
                    type="button"
                    onClick={() => {
                      handleToggle(index, items.name);
                    }}
                    key={index}
                    className={`${
                      activeIndex === index ? "bg-blue-400" : "bg-gray-500/30 "
                    } h-[6vh] w-fit px-3 rounded-xl flex items-center gap-2 justify-center cursor-pointer`}
                  >
                    <img src={items.src} width={20} alt="" />
                    <h1
                      {...register("gameCategory")}
                      className={`${poppins.className} text-[11px] lg:text-[0.8vw] capitalize font-[600] italic`}
                    >
                      {items.name}
                    </h1>
                  </button>
                );
              })}
              <div className="bg-gray-500/30 h-[6vh] w-fit px-3 rounded-xl flex items-center justify-center">
                <h1
                  className={`${poppins.className} text-[11px] lg:text-[0.8vw] capitalize font-[600] italic`}
                >
                  other
                </h1>
              </div>
            </div>
          </div>
          {errors.gameCategory && (
            <p className="error">{errors.gameCategory.message}</p>
          )}
          <button onClick={handleValidations} type="submit">
            submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateNewCompaign1;
