import React ,{useEffect} from 'react'
import heroimg2 from '../assets/images/heroimg2.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Hero = () => {
  useEffect(()=>{
    Aos.init();
  })
    return (
        <div id='home'>
            <section className="flex flex-col lg:flex-row justify-between items-center gap-4 w-full bg-slate-100 h-auto lg:h-screen">
                  <div data-aos="fade-right" className='flex justify-center items-start flex-col gap-8 lg:w-1/2 px-10 py-10 lg:px-20 lg:py-20'>
                    <h1 className='text-[#46b583] font-bold lg:text-6xl md:text-5xl sm:text-5xl text-3xl'>A journey is best measured in friends, rather than miles.</h1>
                    <p className='text-slate-90 text-xl sm:text-2xl'>Embark on a new journey with our travel agnecy.</p>
                    <div className='flex justify-center items-center gap-7'>
                       <button className='bg-[#46b583] text-white px-4 lg:px-8 py-3 rounded-md text-[13px] sm:text-[18px] hover:bg-[#1c2e36]'>View More</button>
                       <a href='https://youtu.be/g6ir5Z_6-Dg?feature=shared'><button className='border-2 border-[#46b583] text-[#46b583] text-[13px] sm:text-[18px] px-4 lg:px-8 py-[10px] rounded-md hover:border-[#1c2e36] hover:text-[#1c2e36] '>Watch Video</button> </a>
                       
                    </div>
                  </div>
                  <div data-aos="fade-left" className='flex justify-center items-center px-5 py-20 object-cover mx-auto'>
                    <img src={heroimg2} alt=""  className='w-[300px] sm:w-[500px] md:w-[600px] lg:w-[700px]'/>
                  </div>
            </section>
        </div>
    )
}

export default Hero
