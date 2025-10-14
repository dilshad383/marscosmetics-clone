import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";
import { Navigation, } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import trends1 from "../assets/trends1.mp4";
import trends2 from "../assets/trends2.webp";
import trends3 from "../assets/trends3.mp4";
import trends4 from "../assets/trends4.mp4";
import trends5 from "../assets/trend5.png";
import trends6 from "../assets/trend6.png";
import trends7 from "../assets/trend7.png";
import trends8 from "../assets/trend8.png";
import trends9 from "../assets/trend9.png";


const items = [
  {
    type: "video",
    src: trends1,
    heading: "Northen Light Liquid Eyes",
    title: "Eyeshadow",
    price: "599 INR",
  },
  {
    type: "image",
    src: trends2,
    heading: "Northen Light Liquid Eyes",
    title: "Eyeshadow",
    price: "599 INR",
  },
  {
    type: "video",
    src: trends3,
    heading: "Northen Light Liquid Eyes",
    title: "Eyeshadow",
    price: "599 INR",
  },
  {
    type: "video",
    src: trends4,
    heading: "Northen Light Liquid Eyes",
    title: "Eyeshadow",
    price: "599 INR",
  },
  {
    type: "image",
    src: trends5,
    heading: "Northen Light Liquid Eyes",
    title: "Eyeshadow",
    price: "599 INR",
  },
  {
  type: "image",
  src: trends6,
  heading: "Luxe Matte Lipstick",
  title: "Lip Color",
  price: "499 INR",
},
{
  type: "image",
  src: trends7,
  heading: "Radiant Glow Highlighter",
  title: "Face",
  price: "699 INR",
},
{
  type: "image",
  src: trends8,
  heading: "Velvet Touch Blush",
  title: "Cheeks",
  price: "549 INR",
},
{
  type: "image",
  src: trends9,
  heading: "Bold Lash Mascara",
  title: "Eyes",
  price: "649 INR",
},

];

export default function ResponsiveSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiper, setSwiper] = useState(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  // Attach navigation after refs mount
  useEffect(() => {
    if (swiper && prevRef.current && nextRef.current) {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, [swiper]);

  // Track edges to hide buttons
  useEffect(() => {
    if (!swiper) return;
    const updateButtons = () => {
      setIsBeginning(swiper.isBeginning);
      setIsEnd(swiper.isEnd);
    };
    swiper.on("slideChange", updateButtons);
    updateButtons(); // initial
    return () => swiper.off("slideChange", updateButtons);
  }, [swiper]);

  return (
    <div className="relative w-full">
      {/* Prev Button */}
      <button
        ref={prevRef}
        className={`absolute left-4 top-1/2 -translate-y-1/2 bg-white text-black rounded-full w-10 h-10 flex items-center justify-center shadow-md z-10 cursor-pointer transition-opacity ${
          isBeginning ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <MdChevronLeft size={24} />
      </button>

      {/* Next Button */}
      <button
        ref={nextRef}
        className={`absolute right-4 top-1/2 -translate-y-1/2 bg-white text-black rounded-full w-10 h-10 flex items-center justify-center shadow-md z-10 cursor-pointer transition-opacity ${
          isEnd ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <MdChevronRight size={24} />
      </button>

      {/* Swiper */}
      <Swiper
        modules={[Navigation]}
        onSwiper={setSwiper}
        spaceBetween={20}
        mousewheel={true}
        slidesPerView={2}
        breakpoints={{
          768: { slidesPerView: 4 },
        }}
        className="pb-8"
      >
        {items.map((item, idx) => (
          <SwiperSlide key={idx}
          className="rounded-lg overflow-hidden relative"
          >
            {item.type === "video" ? (
              <video
                src={item.src}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto object-cover "
              />
            ) : (
              <img src={item.src} alt="" />
            )}
            <div className="absolute card-shadow bottom-0 flex justify-between text-white px-4 pb-3 w-full">
              <div className="relative z-20 ">
                <p className="">{item.heading}</p>
                <p className="">{item.title}</p>
              </div>
              <div className="text-2xl relative z-20">
              {item.price}
              </div>
            </div>
            
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
