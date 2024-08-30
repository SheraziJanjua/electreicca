import React, { useState } from 'react';
import { MdOutlineMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { navItems } from '../Index';

function Navbar() {
  const [mobile, setMobile] = useState(false);
  const [active, setActive] = useState(0);

  const toggle = () => {
    setMobile(!mobile);
  };

  return (
    <div className='bg-yellow-500 py-3 p-0 relative'>
      <div className="max-w-7xl mx-auto flex justify-between lg:justify-center lg:gap-44 items-center px-4 lg:px-0">
        <div className='text-white font-bold text-2xl tracking-wider md:text-3xl lg:text-4xl'>
          ELECTRICCA
        </div>
        <ul className="hidden sm:flex space-x-1.5 md:space-x-3 text-white text-sm md:text-base lg:text-lg">
          {navItems.map((item, index) => (
            <li 
              key={item.label} 
              className={`cursor-pointer ${index === active ? 'text-black' : 'text-white'} transition-colors duration-200`}
              onClick={() => setActive(index)}
            >
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
        <div className='sm:hidden '>
          <button onClick={toggle} className="text-white pt-2 ">
            {mobile ? <IoMdClose size={28} /> : <MdOutlineMenu size={28} />}
          </button>
        </div>
      </div>
      <div
        className={`sm:hidden absolute top-15 py-7 right-0 z-20 bg-yellow-400 w-full overflow-hidden transition-all duration-1000 ease-in-out ${mobile ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'} sm:max-h-64 sm:opacity-100`}
      >
        <ul className={`flex flex-col items-center font-semibold text-white text-sm space-y-2 transition-opacity duration-300 ${mobile || window.innerWidth >= 640 ? 'opacity-100' : 'opacity-0'}`}>
          {navItems.map((item, index) => (
            <li 
              key={item.label} 
              onClick={() => { 
                toggle(); 
                setActive(index);
              }} 
              className='hover:text-black cursor-pointer transition-colors duration-200 ease-in-out'
            >
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
