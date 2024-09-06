import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import headerimage from '../assets/headerimage.jpg';
import { headslide } from '../Index';
import { Link } from 'react-router-dom';

const Sliderr = () => {
  const sliderRef = useRef(null);
  const NextArrow = () => (
    <div
      className="bg-yellow-500 w-8 h-6 md:w-10 md:h-6 cursor-pointer  text-black hover:bg-white rounded-lg absolute bottom-[25%] right-4 md:bottom-[25%] lg:bottom-[27%] md:right-4 lg:right-[-10px] z-10 sm:right-2"
      onClick={() => sliderRef.current.slickNext()}
    >
      <div style={{ display: 'flex',justifyContent: 'center', height: '100%', marginTop:'-1.5px' }}>
        →
      </div>
    </div>
  );
  
  const PrevArrow = () => (
    <div
      className="bg-yellow-500 w-8 h-6 md:w-10 md:h-6 cursor-pointer text-black hover:bg-white rounded-lg absolute bottom-[25%] left-4 md:bottom-[25%] lg:bottom-[27%] md:left-4 lg:left-[-10px] z-10 sm:left-2"
      onClick={() => sliderRef.current.slickPrev()}
    >
      <div style={{ display: 'flex', marginTop:'-1.5px', height: '100%',justifyContent: 'center' }}>
        ←
      </div>
    </div>
  );

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    arrows: false,
  };

  return (
    <div className="max-w-full h-[200px] md:h-[350px] lg:h-[350px] bg-cover bg-center" style={{ backgroundImage: `url(${headerimage})` }}>
      <div className="relative max-w-4xl h-full mx-auto flex justify-center items-center">
        <PrevArrow />
        <Slider ref={sliderRef} {...settings} className="w-full">
          {headslide.map((data, index) => (
            <div key={index} className="flex justify-center items-center h-full">
              <div className="text-center">
                <h1 className="text-white text-xl md:text-4xl lg:text-6xl font-semibold mb-2 md:mb-4 tracking-wider">
                  {data.heading}
                </h1>
                <h2 className="text-white mt-2 md:mt-6 px-[6px] text-sm tracking-normal md:text-lg lg:text-xl lg:whitespace-nowrap">
                  {data.text}
                </h2>
                <div className=' mb-4 mt-8'>
                <Link 
                 to='/login'
                 className="px-6 py-1 bg-yellow-500 text-black rounded-full text-lg font-semibold  transition duration-300 ease-in-out hover:bg-orange-500 glow-effect">
                  Sign In
                </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <NextArrow />
      </div>
    </div>
  );
};

export default Sliderr;
