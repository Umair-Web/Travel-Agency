import React,{useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
const PriceGrid = ({plan,price,label,about}) => {
  useEffect(()=>{
    Aos.init();
  })
  return (
    <div data-aos="flip-left" className='transition ease-in-out delay-1 flex flexjustify-center items-start  gap-5 flex-col bg-white rounded-lg m-2 p-4 lg:p-3 hover:drop-shadow-2xl w-full sm:w-[230px] sm:h-[287px]  lg:w-[250px] lg:h-[290px]  border-[3px] border-[#46b583] '>
      <h1 className='text-[#46b583] text-4xl font-semibold '>{plan}</h1>
      <h1 className='text-[#46b583] text-2xl font-bold'>{price}</h1>
      <p className='bg-[#46b583] text-white px-6 py-2 rounded-md text-10px hover:bg-[#1c2e36] hover:text-white cursor-pointer'>{label}</p>
      <p className='text-slate-800 text-lg'>{about}</p>
    </div>
  )
}

export default PriceGrid
