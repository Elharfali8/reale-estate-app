import React from 'react'
import SectionTitle from './SectionTitle'
import { properties } from '../utils/data'
import { Link } from 'react-router-dom'

const Properties = () => {
  return (
      <section className='container mx-auto px-4 lg:px-2 xl:px-1 py-10 lg:py-14'>
          <SectionTitle title='properties' /> 
          <div className='mt-10 lg:mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {properties.map((p) => {
                  const { id, title, path, Icon, desc } = p
                  return (
                      <Link to={`/properties${path}`} key={id} className='rounded-xl bg-[#CBE9FF] p-8 flex items-center justify-center flex-col transition-all ease-in-out duration-150 hover:scale-105'>
                          <span className='mb-4'><Icon className='w-[60px] h-[60px] lg:h-20 lg:w-20' /></span>
                          <h1 className='poppins-semibold text-2xl lg:text-3xl xl:text-4xl mb-6 tracking-widest'>{title}</h1>
                          <p className='text-center md:text-lg tracking-wider'>
                              {desc}
                          </p>
                      </Link>
                  )
              })}
          </div>
    </section>
  )
}

export default Properties