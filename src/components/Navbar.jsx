import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/main-logo.png'
import { navLinks } from '../utils/data'
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ handleNav, navToggle }) => {
    
  return (
      <nav className='h-20 main-bg-color white-color fixed top-0 right-0 left-0'>
          <div className=" container mx-auto px-4 lg:px-2 xl:px-1  h-full flex justify-between items-center">
              <Link to='/' className='flex items-center justify-center'>
                <img src={logo} alt="main logo" className='w-[160px] lg:w-[190px]' />
              </Link>

              <div className='hidden lg:flex items-center gap-x-4 text-lg xl:text-xl poppins-medium tracking-wider'>
                  <ul className='flex items-center gap-x-4'>
                      {navLinks.map((link) => {
                          const { id, title, path } = link
                          return (
                              <li key={id} className=''>
                                  <NavLink to={path} className='px-4 py-2 rounded-lg transition-all ease-in-out duration-150 hover:tracking-widest '>
                                    {title}
                                  </NavLink>
                              </li>
                          )
                      })}
                  </ul>
                  <button type="button" className='px-6 py-2 rounded-3xl border border-white transition-all ease-in-out duration-150 hover:bg-[#FFFFFF] hover:text-[#3161f6] hover:border-[#3161f6]'>
                      Contact Us
                  </button>
              </div>
              <div className='flex items-center justify-center lg:hidden'>
                  <button type="button" onClick={handleNav}>
                      {navToggle ? <FaTimes size={28} /> : <FaBars size={28} />}
                  </button>
              </div>
          </div>
    </nav>
  )
}

export default Navbar