import React from 'react'
import { fb, insta, twitter, yt } from '../assets/icons'

const Footer = () => {
  return (
    <section className='w-full bg-[#1c2e36] text-white flex flex-wrap flex-col lg:flex-row justify-between items-start gap-10 lg:gap-4 px-10 py-14 lg:px-20 lg:py-28'>
      <div className='flex flex-col justify-center items-start gap-2 w-full lg:w-[40%]'>
        <h1 className='text-[#46b583] text-2xl sm:text-3xl font-bold'>Website Name</h1>
        <p className='text-lg text-slate-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eligendi possimus voluptatibus facilis nesciunt unde ad doloremque, sed laborum? Ex.</p>
        <div className='flex justify-center items-center gap-4 mt-7' id='logos'>
          <span className='bg-white p-2 rounded-full cursor-pointer hover:bg-[#46b583]'><img src={fb} alt="fb icon" width={20} height={20} /></span>
          <span className='bg-white p-2 rounded-full cursor-pointer hover:bg-bg-[#46b583]'><img src={yt} alt="fb icon" width={20} height={20} /></span>
          <span className='bg-white p-2 rounded-full cursor-pointer hover:bg-[#46b583]'><img src={insta} alt="fb icon" width={20} height={20} /></span>
          <span className='bg-white p-2 rounded-full cursor-pointer hover:bg-[#46b583]'><img src={twitter} alt="fb icon" width={20} height={20} /></span>
        </div>
      </div>
    
        <div className='flex flex-col justify-center items-start lg:items-center w-full lg:w-[20%]'>
          <ul className='flex flex-col justify-center items-start gap-3'>
            <h1 className='text-xl font-semibold'>Pages</h1>
            <li className='text-slate-300 cursor-pointer hover:text-[#46b583]'>Home</li>
            <li className='text-slate-300 cursor-pointer hover:text-[#46b583]'>Services</li>
            <li className='text-slate-300 cursor-pointer hover:text-[#46b583]'>testimonials</li>
            <li className='text-slate-300 cursor-pointer hover:text-[#46b583]'>pricing</li>
            <li className='text-slate-300 cursor-pointer hover:text-[#46b583]'>Contact</li>
          </ul>


        </div>
   
      
    </section>
  )
}

export default Footer
