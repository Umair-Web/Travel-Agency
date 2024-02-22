import React from 'react'

const AboutGrid = ({ icon, heading, text, label }) => {
    console.log("Icon=", icon)
    return (
        <div className='transition ease-in-out delay-1 flex justify-center items-center gap-5 flex-col bg-white rounded-lg m-2 p-3 lg:p-2 hover:drop-shadow-2xl w-full sm:w-[280px] sm:h-[310px]  lg:w-[400px] lg:h-[370px]'>
            <img src={icon} alt="" width={60} height={60} className='bg-[#46b583] p-3 rounded-md hover:bg-[#3b8e68]' />
            <h1 className='text-2xl font-medium sm:font-semibold lg:text-3xl text-center text-[#46b583] font-seemibold'>{heading}</h1>
            <p className='text-[15px] font-medium text-center text-slate-700'>{text}</p>
            <p className='transition ease-in-out delay-1 bg-[#46b583] text-white px-6 py-2 rounded-md text-[16px] hover:hover:bg-[#1c2e36] hover:text-white cursor-pointer hover:drop-shadow-md '>{label}</p>
        </div>
    )
}

export default AboutGrid
