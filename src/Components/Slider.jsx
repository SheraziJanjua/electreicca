import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import headerimage from '../assets/headerimage.jpg';
import { headslide } from '../Index';

const Sliderr = () => {
  const sliderRef = useRef(null);

  const NextArrow = () => (
    <div
      className="bg-yellow-500 w-8 h-8 cursor-pointer text-black hover:bg-white flex items-center justify-center absolute bottom-[20%] md:bottom-[32%] lg:bottom-[40%] right-4 ipad:right-0 lg:right-[-10px] xl:right-[-10px] z-10"
      onClick={() => sliderRef.current.slickNext()}
    >
      →
    </div>
  );

  const PrevArrow = () => (
    <div
      className="bg-yellow-500 w-8 h-8 cursor-pointer text-black hover:bg-white flex items-center justify-center absolute bottom-[20%] md:bottom-[32%] lg:bottom-[40%] left-4 ipad:left-0  lg:left-0 xl:left-[-10px] z-10"
      onClick={() => sliderRef.current.slickPrev()}
    >
      ←
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
                <h1 className="text-white text-xl md:text-4xl lg:text-6xl font-semibold mb-4 tracking-wider">
                  {data.heading}
                </h1>
                <h2 className="text-white mt-4 px-1 text-sm tracking-tighter md:text-lg lg:text-xl lg:whitespace-nowrap">
                  {data.text}
                </h2>
                <button className="bg-yellow-500 px-4 py-1 md:px-8 md:py-2 lg:px-12 lg:py-4 text-white md:font-semibold rounded-lg mt-8">
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
