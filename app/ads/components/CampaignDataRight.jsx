import { poppins } from "@/app/components/Font";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { IoImageOutline } from "react-icons/io5";
import { MdOndemandVideo } from "react-icons/md";
import { RiArrowRightSLine } from "react-icons/ri";
import * as yup from "yup";

// Yup validation schema
const dataSchema = yup.object({
  images: yup.string().required("An image is required"), 
  title: yup.string().required("Title is required"),
  caption: yup.string().required("Caption is required"),
  eventType: yup.string().required("Event type is required"),
});

const CompaignDataRight = ({ handlepagenum, number, totalpage }) => {
  const [image, setImage] = useState(null);
  const {
    register,
    setValue,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(dataSchema),
    defaultValues: {
      images: "",
    },
  });

  

  const onImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      setValue("images", file); 
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    setValue("images", "");
  };

  console.log("image ", image);
  console.log("form values: ", getValues());

  const onSubmit = (data) => {
    handlepagenum();
    console.log("page 3 all state data", data);
  };
  console.log("error",errors);
  
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col px-4 gap-3">
          <h1
            className={`${poppins.className} font-[600] text-[12px] md:text-[0.8vw] capitalize`}
          >
            Ad Details
          </h1>

          {/* Image Selector */}
          <div className="image-selector">
            <label
              htmlFor="file-upload"
              className="h-[35vh] flex flex-col overflow-hidden justify-center items-center cursor-pointer w-[220px] bg-white/20 rounded-2xl"
            >
              {image ? (
                <img
                  src={image}
                  className="w-full h-full object-cover"
                  alt="preview"
                />
              ) : (
                <div className="flex flex-col items-center">
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
                </div>
              )}
            </label>
            <input
              {...register("images")}
              onChange={onImageChange}
              type="file"
              id="file-upload"
              className="hidden"
            />
            {errors.images && <p className="error">{errors.images.message}</p>}
            {image && (
              <button
                type="button"
                onClick={handleRemoveImage}
                className="mt-2 text-red-500"
              >
                Remove Image
              </button>
            )}
          </div>

          {/* Event Selector */}
          <div className={`w-full border ${errors.eventType?"border-[#dc2626]":"border-[#424242]"} h-14 md:h-[7vh] rounded-2xl flex justify-between items-center p-3`}>
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
                {...register("eventType")}
                defaultValue=""
                className="bg-[#45b7db]  text-gray-700 rounded-full px-3 py-1.5 text-[12px] outline-none appearance-none"
              >
                <option value="" disabled hidden>
                  Select Type
                </option>
                <option value="option1">Event 1</option>
                <option value="option2">Event 2</option>
              </select>
            </div>
          </div>
          {errors.eventType && (
            <p className="error">{errors.eventType.message}</p>
          )}

          {/* Title */}
          <div>
            <h1 className={`${poppins.className} font-[500] text-[12px] md:text-[0.8vw] capitalize`}>
              Title
            </h1>
            <input
              {...register("title")}
              type="text"
              className={`w-full border ${errors.title ?"border-[#dc2626]":"border-[#424242]"} outline-none text-gray-300 text-[12px] md:text-[0.8vw] h-[5vh]  rounded-xl md:rounded-[0.8vw] flex justify-between items-center p-3`}
              placeholder="Title"
            />
            {errors.title && <p className="error">{errors.title.message}</p>}
          </div>

          {/* Caption */}
          <div>
            <h1 className={`${poppins.className} font-[500] text-[12px] md:text-[0.8vw] capitalize`}>
              Caption
            </h1>
            <label className={`w-full border ${errors.caption?'border-[#dc2626]':"border-[#424242]"} outline-none text-gray-300 text-[12px] md:text-[0.8vw] h-[20vh] rounded-xl md:rounded-[0.8vw] flex items-start px-2 py-1`}>
              <input
                {...register("caption")}
                type="text"
                placeholder="Caption"
                className="w-full h-auto bg-transparent outline-none"
              />
            </label>
            {errors.caption && (
              <p className="error">{errors.caption.message}</p>
            )}
          </div>
        </div>

        <div className="footer h-[10vh] w-full mt-[1vw]">
          <div className="flex justify-between items-center">
            <a
              href="/"
              className={`${poppins.className} font-light text-sm md:text-[1vw]`}
            >
              Reset
            </a>
            <button
              type="submit"
              // onClick={()=>{
              //   handlepagenum()
              // }}
              disabled={number >= totalpage}
              className={`${poppins.className} italic font-[600] bg-[#e5c839] hover:bg-yellow-400 text-[3.5vw] text-black rounded-2xl min-w-[9.5vw] md:text-[1vw] md:rounded-4xl md:w-[6vw] px-[1vw] py-[1vh] flex items-center gap-[0.3vw] hover:-translate-y-1 my-8 transition duration-300 group`}
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

export default CompaignDataRight;
