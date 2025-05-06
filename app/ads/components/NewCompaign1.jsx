"use client";
import { poppins } from "@/app/components/Font";
import Footer from "@/app/createnewticket/components/Footer";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useContext, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { RiArrowRightSLine } from "react-icons/ri";
import { toast, ToastContainer } from "react-toastify";
import * as yup from "yup";
import { CampaignContext, useCampaignContext } from "../CampaignContext";
import { DropDown } from "./DropDown";
import otherImage from "../.../../../../public/compaingImages/other.png";
import Image from "next/image";
import { alert } from "@heroui/theme";
// yup validation schema
const CompaignSchema = yup.object({
  compaignTitle: yup.string().required("title is required"),
  // dropdown: yup
  //   .array()
  //   .of(
  //     yup.object().shape({
  //       id: yup.number().required(),
  //       name: yup.string().required(),
  //     })
  //   )
  //   .required(),
  dropdown: yup.string().required(),
  gameCategory: yup.string().required(),
});
const CreateNewCompaign1 = ({
  handlepagenum,
  number,
  totalpage,
  setValues,
  initialValue,
}) => {
  const [gameData, setGameData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeOther, setActiveOther] = useState(false);

  // useEffect(() => {
  //   // if (initialValue) {
  //   //   setValue("compaignTitle", initialValue?.compaignTitle);
  //   // }
  //   const fetchData = async () => {
  //     try {
  //       const res = await fetch("/gameImages.json");
  //       const data = await res.json();
  //       setGameData(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchData();
  // }, []);
  useEffect(() => {
    if (initialValue) {
      setValue("compaignTitle", initialValue?.compaignTitle);
    }
    const fetchData = async () => {
      try {
        const res = await fetch("/gameCategoryResponse.json");
        const data = await res.json();
        setGameData(data)
        console.log(data);
        
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);





  const handleToggle = (index, name) => {
    setActiveOther(false);
    setActiveIndex(index);
    setValue("gameCategory", name, { shouldValidate: true });
  };

  //  react hook form
  const {
    register,
    setValue,
    getValues,
    handleSubmit,
    control,
    trigger,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(CompaignSchema),
    defaultValues: {
      compaignTitle: "",
      dropdown: "",
      gameCategory: "",
      // otherGameDropdown: "",
    },
  });
  const value = getValues();


  const handleOtherToggle = () => {
    setActiveOther(true);

    setActiveIndex(false);
    console.log("clicked");

    alert("fsafd");
  };
  const error = Object.keys(errors);

  const onSubmit = (data) => {
    handlepagenum();
    setValues(value);
  };
  return (
    <div className="w-full">
      <ToastContainer />
      <h1 className={`${poppins.className} text-[12px] my-2 text-white`}>
        Create New Campaign
      </h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="bg-[#ededed] rounded-2xl text-black w-full py-4 gap-4 min:h-[30vh] px-[1.5vw] flex flex-col justify-around">
          <div>
            <h1 className={`${poppins.className} text-[12px] font-light`}>
              create new campaign
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
                campaign type
              </h1>
              <h1
                className={`${poppins.className} text-[8px] capitalize font-[500]`}
              >
                Choose the type of your campaign
              </h1>
              {errors.dropdown && (
                  <p className="error">{errors.dropdown.message}</p>
                )}
              {/* {value.dropdown === undefined
                : ""} */}
            </div>
            <div>
              <div className="relative flex w-fit justify-between">
                <Controller
                  name="dropdown"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <DropDown
                      list={["Events", "Courts", "Posts"]}
                      value={field.value}
                      onChange={field.onChange}
                    />
                  )}
                />
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
              {gameData.main?.map((items, index) => {
                return (
                  <button
                    type="button"
                    onClick={() => {
                      handleToggle(index, items.name);
                    }}
                    key={index}
                    className={`${
                      activeIndex === index ? "bg-blue-400" : "bg-gray-500/30 "
                    } h-[6vh] w-fit px-3 rounded-xl flex items-center gap-2 justify-center cursor-pointer hover:bg-blue-400`}
                  >
                    <img src={items.photo} width={20} alt="game type image" />
                    <h1
                      {...register("gameCategory")}
                      className={`${poppins.className} text-[11px] lg:text-[0.8vw] capitalize font-[600] italic`}
                    >
                      {items.name}
                    </h1>
                  </button>
                );
              })}
              <button
                type="button"
                onClick={() => {
                  handleOtherToggle();
                }}
                className={`${
                  activeOther ? "bg-blue-400" : "bg-gray-500/30 "
                } h-[6vh] w-fit px-3 rounded-xl flex items-center gap-2 justify-center cursor-pointer hover:bg-blue-400`}
              >
                <Image src={otherImage} width={20} alt="game types image" />
                <h1
                  {...register("gameCategory")}
                  className={`${poppins.className} text-[11px] lg:text-[0.8vw] capitalize font-[600] italic`}
                >
                  other
                </h1>
              </button>
            </div>
          </div>
          <div
            className={`w-full flex  justify-between ${
              !activeOther && "hidden"
            }`}
          >
            <h1
              className={`${poppins.className} text-[12px] md:text-[0.8vw] my-2 `}
            >
              Choose Other Sport
            </h1>
            {activeOther ? (
              <Controller
                name="gameCategory"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <DropDown
                    list={gameData.others?.map((items,index)=>(
                      items.name
                    ))}
                    value={field.value}
                    onChange={field.onChange}
                  />
                )}
              />
            ) : (
              ""
            )}
            </div>
          {errors.gameCategory && (
            <p className="error">{errors.gameCategory.message}</p>
          )}
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
              className={`${poppins.className} italic  font-[600] bg-[#e5c839] hover:bg-yellow-400  text-black rounded-2xl text-[3.5vw]  md:text-[1vw] md:rounded-4xl md:w-[6vw] px-[1vw] py-[1vh] flex items-center  gap-[0.3vw] hover:-translate-y-1 my-8 transition duration-300 group`}
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

export default CreateNewCompaign1;
