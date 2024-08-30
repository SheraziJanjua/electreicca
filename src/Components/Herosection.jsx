import React, { useState } from 'react';
import { features } from '../Index';
import heroimage from '../assets/heroimage.jpg';

function Herosection() {
  const [active, setActive] = useState(1);

  return (
    <>
      <div className='mt-16 px-4'>
        <h1 className='text-center font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl'>Our Services</h1>
        <hr className='bg-yellow-500 h-2 w-16 md:w-24 lg:w-32 xl:w-40 mx-auto rounded-lg my-4' />
        
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8'>
          {features.map((card, index) => (
            <div 
              key={index} 
              className={`group flex flex-col items-center`} 
              onMouseEnter={() => setActive(index)}
            >
              <div className={`flex flex-col gap-2 h-80 p-6 rounded-lg text-white transition-all duration-200 items-center justify-center ${
                index === active ? 'bg-black mt-4' : 'bg-yellow-500 hover:bg-black'
              }`}>
                <div className='text-4xl md:text-5xl lg:text-6xl'>{card.icon}</div>
                <p className='font-semibold text-lg md:text-xl text-center mt-2'>{card.text}</p>
                <p className='text-base md:text-lg text-center'>{card.description}</p>
              </div>
              <div className='mt-4'>
                <button className={`font-semibold text-white px-6 py-2 rounded-lg transition-all duration-800 ${
                  index === active ? 'bg-yellow-500' : 'bg-black group-hover:bg-yellow-500'
                }`}>
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className='mt-16 px-1'>
        <h1 className='text-center font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl tracking-wider'>
          About Our Electricity Company
        </h1>
        <hr className='bg-yellow-500 h-2 w-16 md:w-24 lg:w-32 xl:w-40 mx-auto rounded-lg my-2' />
        
        <div className='max-w-[960px] mx-auto flex flex-col lg:flex-row justify-center items-center p-2'>
          <div className='order-2 lg:max-w-2.5xl xl:max-w-3xl px-2'>
            <h2 className='font-semibold text-left text-lg md:text-xl lg:text-2xl xl:text-3xl tracking-wider mt-8'>
              Slightly believable. If you are going
            </h2>
            <p className='mt-2 leading-relaxed text-base md:text-lg lg:text-lg xl:text-2xl tracking-wide'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, aliquid deleniti unde molestias veniam recusandae accusantium natus repellat obcaecati culpa.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, aliquid deleniti unde molestias veniam recusandae accusantium natus repellat obcaecati culpa.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, aliquid deleniti unde molestias veniam recusandae accusantium natus repellat obcaecati culpa.
            </p>
            <button className='mt-4 bg-yellow-500 font-semibold text-white px-6 py-2 rounded-lg transition-all duration-300 hover:bg-yellow-600'>
              Read More
            </button>
          </div>

          <div className='order-1 lg:max-w-[400px] xl:max-w-[450px] mt-8 lg:mt-0 px-1'>
            <img src={heroimage} alt="Hero" className="w-full h-auto object-cover rounded-lg" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Herosection;
