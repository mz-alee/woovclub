import React from "react";
import { poppins } from './Font';
const Pagecount = () => {
  return (
    <div>
      <h3
        className={`${poppins.className} italic font-[600] text-sm md:text-[0.8vw] flex gap-[0.3vw]`}
      >
        1 <span className="text-gray-400">of</span>
        <span className="text-gray-400">3</span>
      </h3>
    </div>
  );
};

export default Pagecount;
