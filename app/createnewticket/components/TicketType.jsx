import React from "react";

const TicketType = () => {
  return (
    <div className="border-b border-gray-400 w-full min:h-[22vh] py-3 pb-14 flex flex-col gap-[2vh]">
      <div>
        <h1 className={`${poppins.className} text-md font-[500]`}>
          Ticket Type
        </h1>
        <p className="text-gray-600 text-[12px]">Add one or more ticket type</p>
      </div>

      <div className="flex flex-col justify-between w-full gap-2">
        {value.tickets &&
          value.tickets.length &&
          value.tickets?.map((items, index) => {
            return (
              <div className="list1 flex justify-between">
                <h1>Ticket{index + 1} </h1>

                <div className="flex gap-[1vw] md:gap-[0.5vw] items-center">
                  <div className="dropdownlist relative bg-[#45b7db] rounded-[1.5vw] h-[7vh] min:w-[20vw] md:h-[7vh] md:w-[8vw] py-2 flex gap-2 justify-between items-center px-2">
                    <select
                      {...register(`ticketsCategory ${index}`)}
                      className="bg-transparent outline-none text-[12px] w-full"
                    >
                      <option value="">Select Type</option>
                      <option value="VIP">VIP</option>
                      <option value="Gold">Gold</option>
                      <option value="Platinum">Platinum</option>
                      <option value="Silver">Silver</option>
                    </select>
                  </div>

                  <div className="border-l border-gray-400 h-[6vh]"></div>

                  <div className="border-1 border-[#45b7db] rounded-[1.5vw] px-2 min-w-[10vw] md:w-[8vw] h-[7vh] flex justify-center items-center">
                    <button type="button">-</button>
                    <input
                      type="number"
                      {...register(`ticketsprice`, {
                        valueAsNumber: true,
                      })}
                      className="appearance-none text-center md:text-sm lg:text-lg outline-none w-[3vw]"
                    />
                    <button type="button">+</button>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleRemove(index)}
                    className={
                      fields.length > 1 ? "block text-red-500" : "hidden"
                    }
                  >
                    x
                  </button>
                </div>
              </div>
            );
          })}
        <div>
          {errors?.ticketsCategory && (
            <p className="error">{errors.ticketsCategory.message}</p>
          )}
        </div>
      </div>

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
  );
};

export default TicketType;
