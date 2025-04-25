import { poppins } from '@/app/components/Font'
import React from 'react'

const PaymentRight = () => {
  return (
    <div className=' w-full flex flex-col gap-4 items-center'>
      <div className='bg-[#d9d9d9] flex flex-col gap-1  p-3 items-center w-[200px] h-[200px] md:h-[35vh] md:w-[18vw] rounded-xl text-black'>
        <h1 className={`${poppins.className} text-[11px] w-full  md:text-[0.8vw] font-[600]`}>Choose your payment method</h1>
        <div className="w-full flex items-center px-2 bg-[#e5c839] h-[4vh] rounded-xl">
          <h2 className={`${poppins.className} text-[11px]  md:text-[0.8vw] font-[600]`}>Pay with Card</h2>
          </div>   
          
      </div>
      <div className='w-[17vw] flex justify-between  items-center'>
        <h1 className={`${poppins.className} text-[11px] flex gap-2 md:text-[0.8vw] font-[400]`}>Total
        <span className={`${poppins.className} text-[11px]  md:text-[0.8vw] font-[600]`}>108 SAR</span></h1>
        <button  className={`${poppins.className} italic  font-[600] bg-[#e5c839] hover:bg-yellow-400 text-[2vw] text-black rounded-2xl w-[9.5vw] md:text-[1vw] md:rounded-4xl md:w-[6vw] px-[1vw] py-[1vh] flex items-center  gap-[0.3vw] hover:-translate-y-1  transition duration-300 group`}>Confirm</button>
      </div>
    </div>
  )
}

export default PaymentRight