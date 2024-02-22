import React from 'react'

const ClientGrid = ({image,about,name,profile}) => {
  return (
    <div className='bg-slate-200 px-6 py-8 flex justify-center items-center flex-col h-[400px] gap-4 rounded-xl'>
        <img src={image} alt="image" width={140} height={140} />
        <p className='text-center text-[17px] text-gray-600'>{about}</p>
        <h1 className='text-center text-[#46b583] text-2xl font-semibold'>{name}</h1>
        <p className='text-center text-[17px] text-gray-800'>{profile}</p>
      
    </div>
  )
}

export default ClientGrid
