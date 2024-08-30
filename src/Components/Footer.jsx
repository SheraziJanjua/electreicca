import React from 'react';
import { FaTwitter } from "react-icons/fa";
import { ImFacebook } from "react-icons/im";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-zinc-800 text-white py-10">
      <div className="max-w-7xl mx-auto flex flex-col sm:px-6 lg:px-[185px] space-y-10 lg:space-y-0 lg:flex-row lg:justify-between">
        
        <div className="w-full flex flex-col md:flex-row md:justify-center md:ml-16  lg:w-2/3 space-y-10 md:space-y-0 md:space-x-10">
          
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl font-bold">Quick Links</h2>
            <ul className="mt-6 md:mt-12 list-none">
              <li className="mb-2 hover:text-yellow-500"><a href="#" className="hover:underline">Home</a></li>
              <li className="mb-2 hover:text-yellow-500"><a href="#" className="hover:underline">About</a></li>
              <li className="mb-2 hover:text-yellow-500"><a href="#" className="hover:underline">Services</a></li>
              <li className="mb-2 hover:text-yellow-500"><a href="#" className="hover:underline">Blog</a></li>
              <li className="mb-2 hover:text-yellow-500"><a href="#" className="hover:underline">Testimonial</a></li>
              <li className="mb-0 hover:text-yellow-500"><a href="#" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>

          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl font-bold">Blog</h2>
            <p className="mt-2 p-6 md:p-0 md:mt-12 w-full md:w-56 mx-auto md:mx-0">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
            </p>
            <div className="mt-5 md:mt-6 flex justify-center md:justify-start space-x-4 text-2xl">
              <ImFacebook />
              <FaTwitter />
              <FaLinkedinIn />
            </div>
          </div>
        </div>

        <div className="flex-1 p-4 lg:ml-6 text-center lg:text-left">
          <h2 className="text-2xl md:ml-8 font-bold">Newsletter</h2>
          <form className="mt-4 p-8 md:mt-12 flex flex-col md:flex-row lg:flex-col lg:gap-4 md:items-center lg:items-start space-y-4 md:space-y-0">
            <input  
              type="email" 
              placeholder="Enter Your Email" 
              className="flex-1 px-8 py-3 bg-zinc-800 border border-slate-300 focus:outline-none focus:border-yellow-500 md:mr-4 lg:w-[150%]" 
            />
            <button 
              type="submit" 
              className="w-full  md:w-auto px-12 py-3 rounded-sm font-semibold text-lg bg-yellow-500 hover:bg-yellow-600"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>

      <div className="text-center mt-12 px-4">
        <p className="mt-8 text-sm font-semibold tracking-widest text-white">
          2024 All Rights Reserved. Design by Free HTML Templates Distribution by ThemeWagon
        </p>
      </div>
    </footer>
  );
};

export default Footer;
