import React from 'react'

export const EventInformationTable = () => {
  return (
    <div className="border md:text-[2vh] px-[1vw] py-[2vh]  border-[#454446] h-[40vh] w-full  md:w-full rounded-[1vw] flex flex-col ">
    <h1>Event Information</h1>
    <div className=" w-full  h-full flex flex-col justify-center gap-[2.1vh] ">
      {[...Array(4)].map((_, index) => {
        return (
          <tr
          key={index}
            className={`flex justify-between ${
              index !== 3
                ? "border-b border-[#454446] pb-[1vh]"
                : ""
            }`}
          >
            <td>Type</td>
            <td>Frindly Match</td>
          </tr>
        );
      })}
    </div>
  </div>
  )
}
