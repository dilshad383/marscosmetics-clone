import ProductCard from "./ProductCard";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Mousewheel, Keyboard } from "swiper/modules";
import productsData from "./productsData";

export default function App({category}) {
  const data = productsData[category] || [];
  return (
    <div className="relative">
      {/* Make this wrapper relative so nav buttons can be positioned against slide image container */}
      <div className="relative">
        <Swiper
          cssMode={true}
          slidesPerView={4}
          spaceBetween={20}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Mousewheel, Keyboard]}
          breakpoints={{
            1020: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 3,
            },
            600: {
              slidesPerView: 2,
            },
            0: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
          }}
          className="mySwiper !overflow-visible"
        >
          {/* <div className="swiper-button-next !w-8 !h-8 bg-black rounded-full !text-white flex items-center justify-center absolute !right-[-1rem] top-1/2 translate-y-[-50%] z-20">
            <MdChevronRight />
          </div> */}
          {/* <div className="swiper-button-prev !w-8 !h-8 bg-black rounded-full !text-white flex items-center justify-center absolute !left-[-1rem] top-1/2 translate-y-[-50%] z-20">
            <MdChevronLeft />
          </div> */}
          {data.map((card, idx) => (
            <SwiperSlide className="" key={idx}>
              <ProductCard product={card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
