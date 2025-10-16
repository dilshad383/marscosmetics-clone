import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import mainSlide1 from "../assets/main-slide1.png";
import mainSlide2 from "../assets/main-slide2.png";
import mainSlide3 from "../assets/main-slide3.png";

const MainSlider = () => {
  const slides = [mainSlide1, mainSlide2, mainSlide3];

  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    appendDots: dots => (
      <div className="absolute bottom-5 w-full flex justify-center">
        <ul className="flex space-x-3">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div key={i} className="w-8 h-[5px] bg-gray-300 rounded-full transition-all duration-300"></div>
    ),
  };

  return (
    <div className="relative w-full overflow-hidden">
      <Slider {...settings}>
        {slides.map((img, i) => (
          <div key={i}>
            <img
              src={img}
              alt={`Slide ${i + 1}`}
              className="w-full h-[500px] object-cover"
            />
          </div>
        ))}
      </Slider>

      {/* Custom dot styling */}
      <style>
        {`
          .slick-dots {
            position: absolute;
            bottom: 1rem;
            display: flex !important;
            justify-content: center;
            width: 100%;
          }

          .slick-dots li {
            margin: 0 6px;
            width: auto;
            height: auto;
          }

          .slick-dots li button {
            display: none !important; /* hide default circle buttons */
          }

           /* Inactive dots */
          .slick-dots li div {
            background-color: #d1d5db; /* Tailwind gray-300 */
            width: 1rem; /* smaller bar */
            height: 5px;
            border-radius: 9999px;
            transition: all 0.3s ease;
          }

          /* Active dot */
          .slick-dots li.slick-active div {
            background-color: #ffffff; /* white */
            width: 2rem; /* longer bar */
          }
        `}
      </style>
    </div>
  );
};

export default MainSlider;
