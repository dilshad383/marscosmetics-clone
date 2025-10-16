import ReactDOM from "react-dom";
import React, { useState } from "react";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import Button from "./Button";
const HoverImageCards = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const hasReviews = product.reviews && product.reviews !== "No reviews";
  return (
    <>
      <div className="card">
        <div className="overflow-hidden bg-[#f8f7f3]">
          <div className="relative group overflow-hidden cursor-pointer h-[18rem] flex items-center justify-center">
            <img
              src={product.images[0]}
              className="max-w-full max-h-full object-contain"
              alt=""
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <img
                className="max-w-full max-h-full object-contain"
                src={product.images[1]}
                alt=""
              />
            </div>

            <div className="absolute top-0 left-0  uppercase !text-[8px] px-[4px]  font-semibold bg-[#cd0053] text-white">
              {product.bestseller}
            </div>
          </div>
        </div>
        <p className="font-semibold mt-2 text-[#061C2F] text-[14px]">
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

        <Button
          text="Select Shades"
          onClick={() => setIsModalOpen(true)}
          className="w-full"
        />

        {isModalOpen &&
          ReactDOM.createPortal(
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
              <div className="bg-white rounded-xl p-6 w-[90%] max-w-md shadow-lg relative">
                <button
                  className="absolute top-2 right-3 text-gray-500 text-xl"
                  onClick={() => setIsModalOpen(false)}
                >
                  &times;
                </button>
                <h2 className="text-lg font-semibold mb-4">Select Shades</h2>
                {/* your shade options go here */}
              </div>
            </div>,
            document.body // 👈 attaches modal to <body>
          )}
      </div>
    </>
  );
};

export default HoverImageCards;
