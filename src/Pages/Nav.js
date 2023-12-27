import React, { useState } from 'react';
import Switcher from './Switcher';
// import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import bb from "./bb.svg"
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <div>
      <nav className="bg-blue-800 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <a href="/" className="flex">
           <img src={bb} className='h-12 w-12' />
            <span className="self-center text-lg font-serif font-thin whitespace-nowrap text-amber-300  hover:text-fuchsia-600 hover:font-bold  dark:text-white">Broadband</span>
          </a>
          <div className="flex md:order-2">
            
            <button
              type="button"
              className="md:hidden text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 rounded-lg text-sm p-2 inline-flex items-center dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-4"
              aria-expanded={isMobileMenuOpen}
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
              </svg>
              <svg className={`hidden w-6 h-6 ${isMobileMenuOpen ? 'block' : 'hidden'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </button>
          </div>
          <div className={`md:flex justify-between items-center w-full md:w-auto md:order-1 ${isMobileMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu-4">
            <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
              <li>
                <Link to="home" className="font-light tracking-widest font-mono text-xl md:bg-transparent text-white block pl-3 pr-4 py-2 pb-5 md:text-white md:p-0 rounded  hover:underline hover:underline-offset-4 dark:text-white dark:hover:text-pink-500   dark:hover:underline underline-offset-4 decoration-blue-300" aria-current="page">Home</Link>
                </li>
              <li>
                {/* <Link to="home">Home</Link> */}
              <Link to="/info" className=" font-light tracking-widest font-mono text-xl md:bg-transparent text-white block pl-3 pr-4 py-2 pb-5 md:text-white md:p-0 rounded  hover:underline hover:underline-offset-4 dark:text-white dark:hover:text-pink-500   dark:hover:underline underline-offset-4 decoration-blue-300">Info</Link>
                {/* <a href="#" className=" font-light tracking-widest font-mono text-xl md:bg-transparent text-white block pl-3 pr-4 py-2 pb-5 md:text-white md:p-0 rounded  hover:underline hover:underline-offset-4 dark:text-white dark:hover:text-pink-500   dark:hover:underline underline-offset-4 decoration-blue-300">About</a> */}
                </li>
              <li>
                <Link to="/team" className="font-light tracking-widest font-mono text-xl md:bg-transparent text-white block pl-3 pr-4 py-2 pb-5 md:text-white md:p-0 rounded hover:underline hover:underline-offset-4 dark:text-white dark:hover:text-pink-500   dark:hover:underline underline-offset-4 decoration-blue-300">Team</Link>
              </li>
              <li>
                <Link to="/event" className=" font-light tracking-widest font-mono text-xl md:bg-transparent text-white block pl-3 pr-4 py-2 pb-5 md:text-white md:p-0 rounded hover:underline hover:underline-offset-4 dark:text-white dark:hover:text-pink-500   dark:hover:underline underline-offset-4 decoration-blue-300">Event</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
