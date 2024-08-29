import React from 'react';
import qqq from '../assets/qqq.jpg';

function Quest() {
  return (
    <div className="relative w-full   h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
      <div
        style={{
          backgroundImage: `url(${qqq})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="absolute inset-0 h-full w-full"
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>
      
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-2 sm:mb-4 text-center">
          Do you need any help for <span className='text-yellow-500'>electricity?</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, nesciunt!
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-yellow-500 md:font-semibold px-3 py-1 md:px-10 md:py-3 rounded">
            GET A QUOTE
          </button>
          <button className="bg-white text-gray-700 md:font-semibold px-3 py-1 sm:px-10 sm:py-3 rounded">
            CALL NOW
          </button>
        </div>
      </div>
    </div>
  );
}

export default Quest;
