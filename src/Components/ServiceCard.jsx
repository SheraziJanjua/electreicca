import React from 'react';

function ServiceCard({ icon, text, description, isActive, onMouseEnter }) {
  return (
    <div 
      className={`group flex flex-col items-center`} 
      onMouseEnter={onMouseEnter}
    >
      <div className={`flex flex-col gap-2 h-80 p-6 rounded-lg text-white transition-all duration-200 items-center justify-center ${
        isActive ? 'md:bg-black mt-4' : 'bg-yellow-500 md:hover:bg-black'
      }`}>
        <div className='text-4xl md:text-5xl lg:text-6xl'>{icon}</div>
        <p className='font-semibold text-lg md:text-xl text-center mt-2'>{text}</p>
        <p className='text-base md:text-lg text-center'>{description}</p>
      </div>
      <div className='mt-4'>
        <button className={`font-semibold text-white px-6 py-2 rounded-lg transition-all duration-800 ${
          isActive ? 'md:bg-yellow-500' : 'bg-black md:group-hover:bg-yellow-500'
        }`}>
          Read More
        </button>
      </div>
    </div>
  );
}

export default ServiceCard;
