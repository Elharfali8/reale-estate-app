import React from 'react'
import { navLinks } from '../utils/data'
import { NavLink } from 'react-router-dom'

const Sidebar = ({ navToggle, handleNav }) => {
    
  return (
      <aside className={`
        p-6
            ${navToggle ? 'fixed lg:hidden top-[80px] left-0 right-0 bottom-0 z-10 bg-[#3F51F4] transition-all ease-in-out duration-150 translate-x-0' : 'fixed lg:hidden top-[80px] left-0 right-0 bottom-0 z-10 bg-[#3F51F4] transition-all ease-in-out duration-150 translate-x-[-100%]'}
        `}>
          <ul className='mt-10 grid gap-y-2'>
              {navLinks?.map((link) => {
                  const { id, title, path } = link
                  return (
                      <li>
                          <NavLink to={path} key={id} className='block white-color poppins-medium tracking-wider text-xl pl-2 py-2 rounded-xl transition-all ease-in-out duration-150 hover:tracking-widest hover:pl-4' onClick={handleNav}>
                              {title}
                          </NavLink>
                      </li>
                  )
              })}
          </ul>
          <div className='mt-8 flex items-center justify-center'>
          <button type="button" className='px-6 py-2 text-[#FFFFFF] rounded-3xl border border-white transition-all ease-in-out duration-150 hover:bg-[#FFFFFF] hover:text-[#3161f6] hover:border-[#3161f6] poppins-medium tracking-wider text-xl' onClick={handleNav}>
                      Contact Us
                  </button>
          </div>
        </aside>
  )
}

export default Sidebar