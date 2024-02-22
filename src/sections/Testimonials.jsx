import React from 'react'
import { clients } from '../exports'
import ClientGrid from '../components/ClientGrid'
const Testimonials = () => {
  return (
    <section id='testimonials' className='w-full flex flex-col gap-5 h-full p-7 lg:py-40 lg:px-20'>
      <p className='text-center text-2xl sm:text-3xl'>Testimonials</p>
      <h1 className='text-[#46b583] font-bold text-4xl lg:text-6xl text-center leading-[50px]'>What Clients Says</h1>
      <p className='text-slate-950 text-xl text-center'>At [Your Travel Agency Name], we take pride in creating extraordinary travel experiences that leave a lasting impression on our clients. Don't just take our word for it; hear what our valued travelers have to say about their journeys with us. </p>
      <div data-aos="fade-right" className='flex justify-center items-center flex-wrap mt-5 w-full gap-6'>
        {clients.map((client)=>(
          <div key={client.name} className='w-80 mt-20'>
            <ClientGrid {...client}/>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
