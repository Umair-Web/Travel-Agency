import React, { useEffect } from 'react'
import { aboutgrids } from "../exports"
import AboutGrid from '../components/AboutGrid'
import Aos from 'aos'
import 'aos/dist/aos.css'
const About = () => {
  useEffect(()=>{
    Aos.init();
  })
  return (
    <div>
      <section id='services' className='w-full bg-slate-200 flex flex-col lg:flex-row gap-10 lg:gap-20 h-full px-7 py-4 lg:py-40 lg:px-20'>
        <div data-aos="fade-up-right"  className='flex justify-center items-start flex-col gap-8 lg:w-1/2'>
          <h1 className='text-[#46b583] font-bold text-3xl sm:text-5xl lg:text-6xl'>Soar to New Heights with Seamless Reservations!</h1>
          <p className='text-slate-85 text-xl sm:text-2xl'>At our travel agency, we take the hassle out of flight bookings. Our experienced team ensures you get the best deals on flights tailored to your preferences, making your journey as smooth as possible.</p>
          <div className='flex justify-center items-center gap-7'>

            <button className='bg-[#46b583] text-white px-4 lg:px-8 py-3 rounded-md text-[13px] sm:text-[18px] hover:bg-[#1c2e36]'>Read more...</button>
          </div>


        </div>
        <div data-aos="fade-up-left" className='flex flex-wrap justify-between items-center lg:w-1/2'>
          {aboutgrids.map((grid) => (
            <div key={grid.label} className='flex flex-wrap lg:w-1/2'>
              <AboutGrid {...grid} />
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}

export default About
