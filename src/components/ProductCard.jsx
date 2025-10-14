import React from "react";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import festive from "../assets/festive.avif";
import Button from "./Button";
const HoverImageCards = ({ product }) => {
  const hasReviews = product.reviews && product.reviews !== "No reviews";
  return (
    <>
      <div className="card">
        <div className="border-4 border-[#960001] overflow-hidden bg-[#f8f7f3]">
          <div className="relative group overflow-hidden cursor-pointer h-[18rem] flex items-center justify-center">
            <img src={product.images[0]} className="max-w-full max-h-full object-contain" alt="" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <img
                className="max-w-full max-h-full object-contain"
                src={product.images[1]}
                alt=""
              />
            </div>
            <img 
              className="absolute z-10 top-2 right-2 w-[5rem]"
              src={festive} alt="" />

            <div className="absolute top-0 left-0  uppercase text-xs bg-[#cd0053] text-white">
              Bestseller
            </div>
          </div>
        </div>
        <p
          className="font-semibold mt-2 text-[#061C2F] text-[14px]"
        >
          {product.name}
        </p>
        <div className="flex items-center  text-yellow-500 text-lg">
          {hasReviews ? (
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <FaStar className="text-sm" key={i} />
              ))}
            </div>
          ) : (
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <CiStar className="text-sm" key={i} />
              ))}
            </div>
          )}
          <span className="ml-1 text-sm text-black">{product.reviews}</span>
        </div>
        <p className="!text-sm">{product.price}</p>

        <Button text="Select Shades" className="w-full"/>
      </div>
    </>
  );
};

export default HoverImageCards;
