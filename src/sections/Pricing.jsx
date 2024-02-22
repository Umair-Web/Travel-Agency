import React ,{useEffect} from 'react'
import { tick } from '../assets/icons'
import { pricing } from '../exports'
import PriceGrid from '../components/PriceGrid'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Pricing = () => {
  useEffect(()=>{
    Aos.init();
  })
  return (
    <div>
      <section id='pricing' className='w-full bg-slate-200 flex-col justify-center items-start h-full px-7 py-14 lg:py-40 lg:px-20 gap-5'>
        <h1 data-aos="fade-right" className='text-[#46b583] font-bold text-4xl sm:text-5xl lg:text-6xl'>Packages</h1>
        <div className='flex flex-col lg:flex-row gap-6 lg:gap-20 justify-between items-start w-full mt-5'>
          <p data-aos="fade-right" className='text-slate-950 text-xl sm:text-2xl'>Our carefully curated packages cater to diverse travel interests, ensuring an experience that suits every adventurer.</p>
          <div className='flex items-center justify-center flex-col gap-4 sm:flex-row sm:gap-40 md:gap-96 lg:gap-0 w-full'>

          <div data-aos="fade-left" className='w-full lg:w-2/4'>
            <ul className='flex flex-col justify-center items-start  gap-4 '>
              <li className='flex justify-center items-center gap-4 text-[21px] text-gray-800 '><span className='bg-[#46b583] p-1 rounded-full fill-white'><img src={tick} alt="" className='w-[30px] h-30px'/></span>Tranquil Oasis</li>
              <li className='flex justify-center items-center gap-4 text-[21px] text-gray-800'><span className='bg-[#46b583] p-1 rounded-full fill-white'><img src={tick} alt="" className='w-[30px] h-30px' /></span>Epic Adventure</li>
              <li className='flex justify-center items-center gap-4 text-[21px] text-gray-800'><span className='bg-[#46b583] p-1 rounded-full fill-white'><img src={tick} alt="" className='w-[30px] h-30px' /></span>Enchanting Love </li>

            </ul>
          </div>

          <div data-aos="fade-left" className='w-full lg:w-2/4'>
            <ul className='flex flex-col justify-center items-start gap-4 '>
              <li className='flex justify-center items-center gap-4 text-[21px] text-gray-800'><span className='bg-[#46b583] p-1 rounded-full fill-white'><img src={tick} alt="" className='w-[30px] h-30px' /></span>Global Gastronomic</li>
              <li className='flex justify-center items-center gap-4 text-[21px] text-gray-800'><span className='bg-[#46b583] p-1 rounded-full fill-white'><img src={tick} alt="" className='w-[30px] h-30px' /></span>Family Fiesta </li>
              <li className='flex justify-center items-center gap-4 text-[21px] text-gray-800'><span className='bg-[#46b583] p-1 rounded-full fill-white'><img src={tick} alt="" className='w-[30px] h-30px' /></span>Cultural Mosaic</li>

            </ul>
          </div>

          </div>
        </div>
        <div className='flex justify-around items-center flex-wrap mt-20 sm:w-full lg:mx-auto lg:w-[800px] '>
          {pricing.map((price) => (
            <div className="" key={price.plan} >
              <PriceGrid {...price} />
            </div>
          )

          )}
        </div>
      </section>

    </div>
  )
}

export default Pricing
