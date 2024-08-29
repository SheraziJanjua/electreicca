import React from 'react';
import { FaTwitter } from "react-icons/fa";
import { ImFacebook } from "react-icons/im";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-zinc-800 text-white py-10 ">
      <div className="w-7xl mx-auto flex flex-col md:flex-row justify-center sm:px-6 ipad:px-6  ipad-pro:px-72  ">
        
        <div className="w-full md:w-1/3 text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-2xl font-bold">Quick Links</h2>
          <ul className="mt-12 list-none">
            <li className="mb-2 hover:text-yellow-500"><a href="#" className="hover:underline">Home</a></li>
            <li className="mb-2 hover:text-yellow-500"><a href="#" className="hover:underline">About</a></li>
            <li className="mb-2 hover:text-yellow-500"><a href="#" className="hover:underline">Services</a></li>
            <li className="mb-2 hover:text-yellow-500"><a href="#" className="hover:underline">Blog</a></li>
            <li className="mb-2 hover:text-yellow-500"><a href="#" className="hover:underline">Testimonial</a></li>
            <li className="mb-2 hover:text-yellow-500"><a href="#" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>
        
        <div className="w-full p-2 md:w-1/3 text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-2xl font-bold">Blog</h2>
          <p className="mt-12 w-full md:w-56 mx-auto md:mx-0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
          
          <div className="mt-6 flex text-2xl justify-center md:justify-start space-x-4">
          <ImFacebook />
          <FaTwitter />
            <FaLinkedinIn />
          </div>
        </div>
        
        <div className="w-full p-6 md:w-1/3 text-center md:text-left ">
          <h2 className="text-2xl font-bold">Newsletter</h2>
          <form className="mt-12">
            <input  
              type="email" 
              placeholder="Enter Your Email" 
              className="font-semibold w-full px-6 py-3 bg-zinc-800 border border-slate-300 focus:outline-none focus:border-blue-500" 
            />
            <br />
            <button 
              type="submit" 
              className="mt-6 w-full md:w-auto px-10 py-3 rounded-sm font-semibold text-lg bg-yellow-500 hover:bg-yellow-600"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
        
      </div>
      <div className="text-center mt-12">
        <p className="mt-8 text-sm font-semibold tracking-widest text-white">2024 All Rights Reserved. Design by Free html Templates Distribution by ThemeWagon</p>
      </div>
    </footer>
  );
};

export default Footer;
