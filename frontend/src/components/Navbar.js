import React, { useState } from 'react';

import logo from '../assets/logo1.png'
import { navLinks } from '../constants';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faMapMarker, faBars, faClose, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const nbsp = '\u00A0';

  return (
    <div className='navbar' >
      <div className='bg-red-600 text-center w-full p-2'>

        <span className='text-xs'>
          <FontAwesomeIcon icon={faMapMarker} className='inline-block text-white h-4 w-4 pl-1' />   
          {nbsp} Kisumu, Kenya
        </span>

        {nbsp}{nbsp}{nbsp}

        <span className='text-xs'>
          <FontAwesomeIcon icon={faPhone} className='inline-block text-white h-4 w-4 pl-1' />   
          {nbsp} +254 742 491 942
        </span>

        {nbsp}{nbsp}{nbsp}

        <span className='text-xs'>
          <FontAwesomeIcon icon={faEnvelope} className='inline-block text-white h-4 w-4 pl-1' />   
          {nbsp} info@aicmanyatta.com
        </span>

      </div>

      <nav className="flex items-center justify-between flex-wrap shadow-md sticky bg-black pr-4">

        <div className="flex items-center flex-shrink-0 text-white">
        {/* logo image*/}
          <a href='/' className="">
            <img src={logo} alt='logo-img' className=' w-100 h-[80px]'/>
          </a>
        </div>

        {/* Toggle menu */}
        <div className="block lg:hidden">
          {!isOpen ? 
            <button
              className="flex items-center px-3 py-2 transition duration-700 border rounded text-white-400 hover:border-red-400"
              type="button"
              onClick={toggleMenu}
            >
              <FontAwesomeIcon icon={faBars} 
                className="fill-current text-md h-5 w-5 font-bold text-white"
                
              />
            </button>
          : 

            < div />
          }

        </div>

        <div
          className={`w-full ${
            isOpen ? 'fixed p-10 inset-y-0 right-0  bg-[#fc581d80]' : 'hidden'
          } lg:block flex-grow lg:flex lg:items-center lg:w-auto bg-black`}
        >
          {isOpen ? 
            <button
              className="absolute top-16 right-5 px-3 py-3  font-bold rounded transition duration-700 border rounded text-red-400 border-black hover:text-black hover:border-red-400"
              onClick={toggleMenu}
              type="button"
              >
              <FontAwesomeIcon icon={faClose} 
                className="fill-current h-5 w-5 text-md font-bold text-white"
                
              />
            </button>
            :
            <div />
          }

          <div className="text-lg lg:flex-grow lg:text-center bg-black"
            >
            {navLinks.map((nav, index) => (
              <a
                key={nav.id}
                href={nav.id}
                className="block font-bold mt-4 lg:inline-block lg:mt-0 text-white hover:text-red-500 mr-4 transition duration-700"
              >
                {nav.title}
              </a>

            ))}
            

          </div>

          <div className='mt-3 bg-black'>
              <a href='#' className='md:mr-2 md:inline block mt-5 md:mt-0 tracking-wider w-36 text-center bg-red-700 p-3 rounded hover:text-white transition duration-700 font-medium' >
                LIVE STREAM
              </a>

              <a href='#' className='mt-5 md:mt-0 md:inline block tracking-wider w-24 text-center bg-red-700 p-3 rounded hover:text-white transition duration-700 font-medium' >
                GIVE
              </a>
          </div>
        </div>
      </nav>
    </div>


  );
  

}

export default Navbar
