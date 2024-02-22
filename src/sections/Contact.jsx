import React from 'react'
import { call, tick, fb, insta, map, sms, twitter, yt } from "../assets/icons"
import { pricing } from '../exports'
import PriceGrid from '../components/PriceGrid'
const Contact = () => {
  return (

    <section id='contact' className='w-full bg-slate-200 flex flex-col justify-center items-center lg:flex-row gap-10 lg:gap-20 h-full p-4 lg:py-40 lg:px-20 '>
      <div className='flex justify-center items-center w-full lg:w-3/4 flex-col lg:flex-row bg-white rounded-lg px-8 py-12 gap-10 z-20'>
        <div className='flex justify-center items-start flex-col gap-4 w-full'>
          <h1 className='text-[#46b583] font-bold text-[35px]'>Contact Info</h1>

          <div id='address' className='flex justify-center items-center gap-4 text-sm font-semibold text-gray-600 sm:text-lg '>
            
            <span className='flex justify-center items-center gap-4 text-sm sm:text-xl text-gray-500'><span className='bg-[#46b583] p-1 rounded-full fill-white'><img src={call} alt="" className='w-[30px] h-30px' /></span>+923272505875</span> 
          </div>

          <div id='address' className='flex justify-center items-center gap-4 text-sm font-semibold text-gray-600 sm:text-lg '>
            
            <span className='flex justify-center items-center gap-4 text-sm sm:text-xl text-gray-500'><span className='bg-[#46b583] p-1 rounded-full fill-white'><img src={sms} alt="" className='w-[30px] h-30px' /></span>umairkhanpk 2004@gmail.com</span> 
          </div>

          <div id='address' className='flex justify-center items-center gap-4 text-sm font-semibold text-gray-600 sm:text-lg '>
            
            <span className='flex justify-center items-center gap-4 text-sm sm:text-xl text-gray-500'><span className='bg-[#46b583] p-1 rounded-full fill-white'><img src={map} alt="" className='w-[30px] h-30px' /></span>Pakistan,Karachi</span> 
          </div>

          <div id='logos' className='flex justify-center items-center gap-4 mt-10'>

            <span className='bg-[#46b583] p-3 rounded-full cursor-pointer hover:bg-[#3b8e68]'>
              <img src={fb} alt="" width={25} height={25} />
            </span>

            <span className='bg-[#46b583] p-3 rounded-full cursor-pointer hover:bg-[#3b8e68]'>
              <img src={insta} alt="" width={25} height={25} />
            </span>

            <span className='bg-[#46b583] p-3 rounded-full cursor-pointer hover:bg-[#3b8e68]'>
              <img src={yt} alt="" width={25} height={25} />
            </span>

            <span className='bg-[#46b583] p-3 rounded-full cursor-pointer hover:bg-[#3b8e68]'>
              <img src={twitter} alt="" width={25} height={25} />
            </span>

          </div>
        </div>

        <div className='flex flex-col justify-center items-center gap-2 w-full'>
          <input type="text" placeholder='Enter Name' className='px-4 py-4 w-full border-2 border-[#46b583] rounded-lg text-[18px] bg-slate-100 focus:outline-none focus:border-green-600' />
          <input type="email" placeholder='Enter Email' className='px-4 py-4 w-full border-2 border-[#46b583] rounded-lg text-[18px] bg-slate-100 focus:outline-none focus:border-green-600' />
          <div className='w-full'>
           <textarea name="" id="" cols="30" rows="5" className='px-4 py-4 w-full border-2 border-[#46b583] rounded-lg text-[18px] bg-slate-100 focus:outline-none focus:border-green-600'></textarea>
           </div>
          <button className='bg-[#46b583] text-white px-4 lg:px-8 py-3 rounded-md text-[13px] sm:text-[18px] hover:bg-[#1c2e36] w-full'>Submit</button>
        </div>

      </div>


    </section>

  )
}

export default Contact
