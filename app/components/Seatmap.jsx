import React from "react";


const generateSeats = (rows) => {
  let seats = [];
  for (let i = 0; i < rows; i++) {
    let seatCount = 5 + i * 2;
    let rowSeats = [];
    for (let j = 0; j < seatCount; j++) {
      rowSeats.push(
        <div
          key={`row-${i}-seat-${j}`}
          className={`seat ${
            i % 2 === 0 ? "bg-blue-500" : "bg-gray-500"
          } p-2 rounded text-white text-xs`}
        >
          A{i + 1}
          {j + 1}
        </div>
      );
    }
    seats.push(
      <div key={`row-${i}`} className="flex justify-center gap-2 my-1">
        {rowSeats}
      </div>
    );
  }
  return seats;
};

const StadiumSeating = () => {
  return (
    <div className="stadium-container flex flex-col items-center p-4 bg-black min-h-screen">
      <h1 className="text-white text-xl mb-4">Court Ticket Map</h1>
      <div className="seating-grid flex flex-col items-center gap-2">
        {generateSeats(5)}
      </div>
     
    </div>
  );
};

export default StadiumSeating;
