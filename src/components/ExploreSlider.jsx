import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { MdChevronRight } from "react-icons/md";
import explore1 from "../assets/explore1.webp";
import explore2 from "../assets/explore2.webp";
import explore3 from "../assets/explore3.webp";
import Button from "./Button";

const ExploreSlider = () => {
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  const slides = [
    { img: explore1, text: "Everyday Essentials" },
    { img: explore2, text: "Pout Perfect" },
    { img: explore3, text: "Feline Eyes" },
  ];

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.params && nextRef.current) {
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <div>
      {/* ✅ Mobile/Tablet View — Swiper Slider */}
      <div className="relative md:hidden">
        <Swiper
          modules={[Navigation]}
          loop={true}
          slidesPerView="auto"
          spaceBetween={16}
          centeredSlides={false}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="mySwiper"
        >
          {slides.map((slide, idx) => (
            <SwiperSlide key={idx} className="!w-[85%]">
              <div className="rounded-md">
                <div className="rounded-md overflow-hidden">
                  <img src={slide.img} alt="" />
                </div>
                <Button text={slide.text} className="w-full mt-4"/>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          ref={nextRef}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white text-black rounded-full w-10 h-10 flex items-center justify-center shadow-md z-10 cursor-pointer"
        >
          <MdChevronRight size={24} />
        </button>
      </div>

      {/* ✅ Desktop View — Static 3 Cards */}
      <div className="hidden md:grid grid-cols-3 gap-6">
        {slides.map((slide, idx) => (
          <div key={idx} className="rounded-md">
                <div className="rounded-md overflow-hidden">
                  <img src={slide.img} alt="" />
                </div>
                <Button text={slide.text} className="w-full mt-4"/>
              </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreSlider;
