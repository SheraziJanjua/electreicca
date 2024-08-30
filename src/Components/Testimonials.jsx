import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { testimonials } from '../Index';
import ss6 from '../assets/ss6.png';

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className="absolute top-12  left-0 lg:left-[3%] md:left-[1%] lg:top-[90%] md:top-[85%] text-sm lg:test-lg z-10 bg-yellow-500 text-white px-4 py-2 "
      onClick={onClick}
      aria-label="Previous"
    >
      &#10094;
    </button>
  );
};

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className="absolute top-12 left-[89%] lg:left-[9%] md:left-[93%]  md:top-[85%] text-sm lg:test-lg lg:top-[90%] z-10 bg-yellow-500 text-white px-4 py-2 "
      onClick={onClick}
      aria-label="Next"
    >
      &#10095;
    </button>
  );
};

const TestimonialSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
  <div className='relative w-full p-4 md:max-w-[950px] md:p-6 md:mx-auto ' >
    <div className="flex flex-col justify-center bg-white py-12 relative">
      <h1 className="text-center font-bold text-xl md:text-3xl lg:text-4xl tracking-wider mb-4">
        Customers Testimonial
      </h1>
      <p className="text-center text-lg  text-gray-600 mb-8">
        Even slightly believable. If you are going to use a passage
      </p>
      <div className="relative">
        <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
              <div key={index} className="flex justify-center gap-4">
                <div className="flex flex-col gap-2 items-center justify-center">
                  <div className="flex flex-col md:flex-row items-center md:justify-center gap-4 md:gap-16 w-full lg:w-[900px] relative">
                    <div className=" w-[100px] h-[140px] border-2 border-yellow-500 relative z-10 lg:w-[150px] lg:h-[200px]">
                      <img
                        src={testimonial.image}
                        alt={testimonial.user}
                        className=" w-[100px] h-[120px] object-cover absolute top-2 left-4 lg:w-[150px] lg:h-[160px] lg:top-4 lg:left-6"
                      />
                    </div>
                    <div className="text-center md:text-left">
                      <h3 className="md:ml-8 font-bold text-2xl text-gray-900">
                        {testimonial.user}
                      </h3>
                      <div className=''>
                      <p className=" mt-4 text-gray-700 text-xl leading-relaxed max-w-full md:max-w-xl lg:max-w-2xl">
                        {testimonial.text} <br />
                        <span className='hidden ' >
                          <img src={ss6} alt="" />
                        </span>
                      </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </Slider>   
      </div>
    </div>
   </div>

  );
};

export default TestimonialSlider;
