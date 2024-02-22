import React, { useEffect, useState } from 'react'
import { close, menu } from '../assets/icons'
import { Link } from 'react-scroll';
const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [iconToggle, setIcontoggle] = useState(false);
  const [menuClass, setMenuClass] = useState('');

  const toggleMenu = () => {
    setToggle(!toggle);
  }
  const toggleIcon = () => {
    setIcontoggle(!iconToggle);
  }
  useEffect(() => {
    setMenuClass(toggle ? 'transition-opacity ease-in-out duration-300 transform translate-y-0 opacity-100' : 'transition-opacity ease-in-out duration-300 transform translate-y-full opacity-0')
  }, [toggle])
  return (
    <section className='w-full bg-[#1c2e36] text-white flex justify-between items-center px-8 py-6 lg:px-16 sticky top-0 z-40'>
      <h1 className='text-[#46b583] text-2xl sm:text-3xl font-bold'>Website Name</h1>
      <div className='hidden lg:flex justify-end items-center gap-2'>
        <ul className='flex justify-center items-center gap-3'>
          <li><Link  to="home" spy={true} smooth={true} offset={50} duration={500}    className='text-lg text-slate-100 cursor-pointer rounded-sm px-5 py-2 hover:bg-[#3b8e68] hover:text-white active:text-white'>Home</Link></li>
          <li><Link  to="services" spy={true} smooth={true} offset={50} duration={500}   className='text-lg text-slate-100 cursor-pointer rounded-sm px-5 py-2 hover:bg-[#3b8e68] hover:text-white active:text-white'>Services</Link></li>
          <li><Link  to="testimonials" spy={true} smooth={true} offset={50} duration={500}   className='text-lg text-slate-100 cursor-pointer rounded-sm px-5 py-2 hover:bg-[#3b8e68] hover:text-white active:text-white'>Testimonials</Link></li>
          <li><Link  to="pricing" spy={true} smooth={true} offset={50} duration={500}   className='text-lg text-slate-100 cursor-pointer rounded-sm px-5 py-2 hover:bg-[#3b8e68] hover:text-white active:text-white'>Pricing</Link></li>
          <li><Link  to="contact" spy={true} smooth={true} offset={50} duration={500}   className='text-lg text-slate-100 cursor-pointer rounded-sm px-5 py-2 hover:bg-[#3b8e68] hover:text-white active:text-white'>Contact</Link></li>
        </ul>
      </div>
      <div className='flex lg:hidden flex-col'>
        {iconToggle ? (
          <img src={close} alt="close icon" width={40} height={40} onClick={() => { toggleMenu(); toggleIcon() }} />
        ) : (<img src={menu} alt="menu icon" width={40} height={40} onClick={() => { toggleMenu(); toggleIcon() }} />)}
        {toggle && (
          <div id='mob-menu' className={`bg-[#46b583] text-white py-4 absolute top-20 right-0 w-full`}>
            <ul className='flex flex-col justify-center items-center gap-3'>
              <li><Link to="home" spy={true} smooth={true} offset={50} duration={500}  className='text-xl text-white font-semibold hover:bg-[#3b8e68] hover:text-white w-full rounded-md py-3 text-center'>Home</Link></li>
              <li><Link to="services" spy={true} smooth={true} offset={50} duration={500}    className='text-xl text-white font-semibold hover:bg-[#3b8e68] hover:text-white w-full rounded-md py-3 text-center'>Services</Link></li>
              <li><Link to="testimonials" spy={true} smooth={true} offset={50} duration={500} className='text-xl text-white font-semibold hover:bg-[#3b8e68] hover:text-white w-full  rounded-md py-3 text-center'>Testimonials</Link></li>
              <li><Link to="pricing" spy={true} smooth={true} offset={50} duration={500} className='text-xl text-white font-semibold hover:bg-[#3b8e68] hover:text-white w-full py-3 rounded-md text-center'>Pricing</Link></li>
              <li><Link to="contact" spy={true} smooth={true} offset={50} duration={500} className='text-xl text-white font-semibold hover:bg-[#3b8e68] hover:text-white w-full py-3 rounded-md text-center'>Contact</Link></li>
            </ul>
          </div>
        )}

      </div>
    </section>
  )
}

export default Header
