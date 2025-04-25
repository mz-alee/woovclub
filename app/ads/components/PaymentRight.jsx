import { poppins } from '@/app/components/Font'
import React from 'react'

const PaymentRight = () => {
  return (
    <div className=' w-full flex flex-col items-center'>
      <div className='bg-[#d9d9d9] w-[200px] h-[200px] md:h-[35vh] md:w-[18vw] rounded-xl text-black'>
        <h1 className={`${poppins.className} text-[11px]  md:text-[0.8vw] font-[600]`}>Choose your payment method</h1>
      </div>
    </div>
  )
}

export default PaymentRight