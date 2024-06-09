import React, { useEffect } from 'react'

const SectionTitle = ({ title }) => {
    

  return (
    <div className='flex flex-col items-center justify-center mb-4 lg:mb-6'>
          <h1 className='text-3xl lg:text-4xl xl:text-5xl capitalize poppins-semibold tracking-widest pb-2 lg:pb-4 main-color'>{title}</h1>
          <div className='w-[50%] lg:w-[30%] rounded-xl h-1 main-bg-color' />
    </div>
  )
}

export default SectionTitle