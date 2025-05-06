"use client";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { Popover } from "@headlessui/react";
import { format } from "date-fns";
import { useState } from "react";
import { poppins } from "@/app/components/Font";
import { dateInput } from "@heroui/theme";
export default function CustomDatePicker({
  Position,
  date,
  setDate,
  active,
  startDate,
  name,
  range,
  endDate,
  Controller,
  control,
}) {
  const [selected, setselected] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  // const range = startDate?.length ? startDate : new Date()

  return (
    <div>
      <Popover className="relative">
        {({ open, close }) => (
          <>
            <Popover.Button
              disabled={!active}
              className={`flex items-center gap-2 px-1 py-1 bg-blue-400 rounded-4xl text-gray-700 ${poppins.className} italic text-[12px]`}
              onClick={() => setIsOpen(!isOpen)}
            >
              {date ? format(date, "EEE, dd MMM") : "Select Date"}
              <span className="bg-white rounded-full flex justify-center items-center w-6 h-6 font-extrabold">
                ⋯
              </span>
            </Popover.Button>
            <Popover.Panel
              className={`absolute z-1000 mt-2 ${Position} min-h-[30vh] ${poppins.className} font-[300] italic bg-[#fff] text-[12px] shadow-lg rounded`}
            >
              <Controller
                name={name}
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <DayPicker
                    {...field}
                    animate
                    startMonth={active ? startDate : new Date()}
                    disabled={{ before: range }}
                    mode="single"
                    selected={date}
                    onSelect={(selectedDate) => {
                      setDate(selectedDate);
                      if (selectedDate) {
                        close();
                      }
                    }}
                  />
                )}
              />
            </Popover.Panel>
          </>
        )}
      </Popover>
    </div>
  );
}

// import * as React from 'react';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import TextField from '@mui/material/TextField';

// export default function MuiDatePicker() {
//   const [value, setValue] = React.useState(null);

//   return (
//     <LocalizationProvider dateAdapter={AdapterDateFns}>
//       <DatePicker
//         label="Select a date"
//         value={value}
//         onChange={(newValue) => setValue(newValue)}
//         renderInput={(params) => <TextField {...params} />}
//       />
//     </LocalizationProvider>
//   );
// }
