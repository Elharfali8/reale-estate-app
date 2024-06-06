import React from 'react'
import logo from '../assets/main-logo.png'

const Footer = () => {
    return (
        <footer className="footer footer-center p-4 main-bg-color white-color text-xl lg:text-2xl poppins-medium tracking-wider text-base-content">
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by EstateEase</p>
  </aside>
</footer>
  )
}

export default Footer