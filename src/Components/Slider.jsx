import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import headerimage from '../assets/headerimage.jpg';
import { headslide } from '../Index';

const Sliderr = () => {
  const sliderRef = useRef(null);
  const NextArrow = () => (
    <div
      className="bg-yellow-500 w-8 h-6 md:w-10 md:h-10 cursor-pointer text-black hover:bg-white rounded-lg absolute bottom-[20%] right-4 md:bottom-[25%] lg:bottom-[22%] md:right-4 lg:right-[-10px] z-10 sm:right-2"
      onClick={() => sliderRef.current.slickNext()}
    >
      <div style={{ display: 'flex',justifyContent: 'center', height: '100%', marginTop:'-1.5px' }}>
        →
      </div>
    </div>
  );
  
  const PrevArrow = () => (
    <div
      className="bg-yellow-500 w-8 h-6 md:w-10 md:h-10 cursor-pointer text-black hover:bg-white rounded-lg absolute bottom-[20%] left-4 md:bottom-[25%] lg:bottom-[22%] md:left-4 lg:left-[-10px] z-10 sm:left-2"
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
                <button className="bg-yellow-500 px-4 py-1 md:px-8 md:py-2 lg:px-12 lg:py-4 text-white md:font-semibold rounded-lg mt-4 md:mt-12">
                  {data.button}
                </button>
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
