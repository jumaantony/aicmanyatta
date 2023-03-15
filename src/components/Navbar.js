import React, { useState } from 'react';

import logo from '../assets/logo.png'
import { navLinks } from '../constants';

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-white shadow-md mt-5 p-6 sticky">

      <div className="flex items-center flex-shrink-0 text-white mr-6">
       {/* logo image*/}
        <a href='/home' className="">
          <img src={logo} alt='logo-img' className='w-[80px] h-[80px]'/>
        </a>
      </div>

      <div className="block lg:hidden">
        {!isOpen ? 
          <button
            className="flex items-center px-3 py-2 transition duration-700 border rounded text-red-400 border-black hover:text-black hover:border-red-400"
            type="button"
            onClick={toggleMenu}
          >
            <Bars3Icon
              className="fill-current text-md h-5 w-5 font-bold"
              viewBox="0 0 20 20"
            />
          </button>
        : 

          < div />
        }

      </div>
      <div
        className={`w-full ${
          isOpen ? 'fixed p-10 inset-y-0 right-0 bg-transparent bg-[#fc581d80]' : 'hidden'
        } lg:block flex-grow lg:flex lg:items-center lg:w-auto`}
      >
        {isOpen ? 
          <button
            className="absolute top-16 right-5 px-3 py-3  font-bold rounded transition duration-700 border rounded text-red-400 border-black hover:text-black hover:border-red-400"
            onClick={toggleMenu}
            type="button"
            >
            <XMarkIcon
              className="fill-current h-5 w-5 text-md font-bold"
              viewBox="0 0 20 20"
            />
          </button>
          :
          <div />
        }

        <div className="text-lg lg:flex-grow lg:text-center"
          >
          {navLinks.map((nav, index) => (
            <a
              key={nav.id}
              href={nav.id}
              className="block font-bold mt-4 lg:inline-block lg:mt-0 text-black lg:hover:text-red-500 sm:hover:text-white mr-4 transition duration-700"
            >
              {nav.title}
            </a>

          ))}
          

        </div>

        <div className='mt-8 md-mt-0'>
            <a href='#' className='md:mr-2 md:inline block mt-5 md:mt-0 tracking-wider w-36 text-center bg-red-700 p-4 rounded hover:text-white transition duration-700' >
              LIVE STREAM
            </a>

            <a href='#' className='mt-5 md:mt-0 md:inline block tracking-wider w-24 text-center bg-red-700 p-4 rounded hover:text-white transition duration-700' >
              GIVE
            </a>
        </div>
      </div>
    </nav>


  );
  

}

export default Navbar
