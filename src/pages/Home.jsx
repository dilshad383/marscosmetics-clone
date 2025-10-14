import React from "react";
import Bestseller from "../components/Bestseller";
import festive from "../assets/festive.avif";
import category1 from "../assets/category1.webp";
import category2 from "../assets/category2.avif";
import category3 from "../assets/category3.webp";
import category4 from "../assets/category4.avif";
import category5 from "../assets/category5.webp";
import category6 from "../assets/category6.avif";
import category7 from "../assets/category7.webp";
import category8 from "../assets/category8.avif";
import category9 from "../assets/category9.webp";
import offer1 from "../assets/offer1.webp";
import offer2 from "../assets/offer2.webp";
import offer3 from "../assets/offer3.webp";
import offer4 from "../assets/offer4.webp";
import heroImg from "../assets/hero-img-sm.png";
import heroImgSm from "../assets/hero-img.png";
import freegift from "../assets/freegift.png"; 
import ExploreSlider from "../components/ExploreSlider";
import OfferCard from "../components/OfferCard";
import Button from "../components/Button";
const categories = [
  { img: category1, title: "Festive Glow" },
  { img: category2, title: "Best Sellers" },
  { img: category3, title: "New Arrivals" },
  { img: category4, title: "Lips" },
  { img: category5, title: "Eyes" },
  { img: category6, title: "Face" },
  { img: category7, title: "Tools" },
  { img: category8, title: "Combos" },
  { img: category9, title: "Lips Combos" },
];
const offerCards = [
  {
    img: offer1,
    code: 'Apply code "FESTIVEGLOW"',
    desc: "Shop any 3 products upto 379 at just ₹799",
  },

  {
    img: offer2,
    code: 'Apply code "WELCOME2MARS"',
    desc: "Flat 15% OFF on Your First Order",
  },
  {
    img: offer3,
    code: 'Apply code "FREEKAJAL"',
    desc: "Free Twist Up Kajal worth ₹229 on orders Above ₹549",
  },

  {
    img: offer4,
    code: 'Apply code "FREEMAKEUPKIT"',
    desc: "Free Makeup Kit worth ₹299 on orders Above ₹699",
  },
];
const Home = () => {
  return (
    <>
      <div className="categories relative flex px-8 py-8 items-center">
        <div className="flex items-center mx-auto gap-4 relative z-10 text-white overflow-hidden">
          <div className="relative z-10 ">
            <img
              className="flex-none w-40 min-w-[10rem] mr-4 object-contain"
              src={festive}
              alt=""
            />
          </div>
          <div className="flex gap-4 overflow-x-auto flex-nowrap hide-scrollbar">
            {categories.map((item, idx) => (
              <div key={idx} className="text-xs flex-none text-center">
                <div className="aspect-square rounded-full w-20 max-md:w-15 overflow-hidden mb-2">
                  <img src={item.img} alt="" />
                </div>
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="cursor-pointer">
        <picture>
          <source media="(min-width: 600px)" srcSet={heroImgSm} />
          <img src={heroImg} alt="" />
        </picture>
      </div>
      {/* Best Sellers */}
      <div className="w-full px-4 md:px-8 mt-6">
        <h2 className="section-heading">Best Sellers</h2>
        <div className=" w-full">
          <Bestseller />
        </div>
      </div>

{/* Explore Gifts & Combos */}
      <div className="px-12 mt-6">
        <h2 className="section-heading mb-4">Explore Gifts & Combos</h2>
        <ExploreSlider />
      </div>

{/* Curated Offers For You */}
      <div className="px-10 mt-8 pb-10">
        <h2 className="section-heading mb-4">Curated Offers For You</h2>
        <div className="flex gap-4 overflow-x-auto flex-nowrap hide-scrollbar ">
          {offerCards.map((item, idx) => (
            <OfferCard key={idx} card={item}/>
          ))}
        </div>
      </div>

{/* Free Gift Banner */}
      <div className="bg-[#f3f3f3] p-10 max-md:px-4">
        <div className=" rounded-3xl grid sm:grid-cols-2 bg-white p-8 gap-4">
          <div className="">
            <h2 className="font-semibold text-[clamp(2rem,4vw,3.5rem)] leading-[1.1]">Who doesn’t <br /> love a free gift?</h2>
            <p className=" my-6 !text-[clamp(1rem,2vw,1.25rem)]">Get a free 15 Color Eyeshadow Palette worth Rs.449 on purchase above Rs.999*</p>
            <p className="pb-4">Use Code: BIGBASHSALE</p>

            <Button text="Get yours now!"/>
          </div>
          <div className="">
            <img className="min-w-[15rem] " src={freegift} alt="" />
          </div>
        </div>
      </div>

{/* own this look */}


    </>

  );
};

export default Home;
