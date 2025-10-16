import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import mainSlide1 from "../assets/main-slide1.png";
import mainSlide2 from "../assets/main-slide2.png";
import mainSlide3 from "../assets/main-slide3.png";
import mainSlideSm1 from "../assets/main-slide-sm1.png";
import mainSlideSm2 from "../assets/main-slide-sm2.png";
import mainSlideSm3 from "../assets/main-slide-sm3.png";

const MainSlider = () => {
  // safer init for SSR: default false, update in useEffect
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 600);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const slides = isMobile
    ? [mainSlideSm1, mainSlideSm2, mainSlideSm3]
    : [mainSlide1, mainSlide2, mainSlide3];

  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,

    // place dots (we'll style them with CSS below)
    appendDots: dots => (
      <div
        style={{
          position: "absolute",
          bottom: 16,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          zIndex: 50, // keep above slides
          pointerEvents: "none", // allow clicks only on inner elements
        }}
      >
        <ul style={{ display: "flex", gap: 12, pointerEvents: "auto" }}>{dots}</ul>
      </div>
    ),

    // render custom dot content (a rounded bar)
    customPaging: (i) => (
      <div
      key={i}
        style={{
          width: 16,
          height: 6,
          borderRadius: 9999,
          backgroundColor: "#d1d5db", // gray-300
          transition: "all 0.25s ease",
        }}
      />
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
              className="w-full md:h-[500px] object-cover"
            />
          </div>
        ))}
      </Slider>

      {/* Additional CSS to expand active dot width and color */}
      <style>{`
        /* Hide slick's default button content (we're providing our own via customPaging),
           but don't completely remove the button element (slick needs it for click handling). */
        .slick-dots li button {
          padding: 0;
          border: none;
          background: transparent;
        }

        /* The div we render inside the button */
        .slick-dots li div {
          display: inline-block;
        }

        /* active state: slick adds .slick-active to the li */
        .slick-dots li.slick-active div {
          width: 32px !important; /* longer bar when active */
          background-color: #ffffff !important; /* white for active */
          height: 6px !important;
        }

        /* keep dots clickable */
        .slick-dots li {
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default MainSlider;
