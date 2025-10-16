import ReactDOM from "react-dom";
import React, { useState } from "react";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import Button from "./Button";
const HoverImageCards = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);
  const [mainImage, setMainImage] = useState(product.images[0]);

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
            <div
              className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm"
              onClick={() => setIsModalOpen(false)}
            >
              <div
                className="bg-white rounded-xl p-6 w-[90%] max-w-md shadow-2xl relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-2 right-3 text-gray-500 text-2xl font-bold"
                  onClick={() => setIsModalOpen(false)}
                >
                  &times;
                </button>

                <h2 className="text-lg font-semibold mb-4 text-center text-[#061C2F]">
                  Select Shades
                </h2>

                {/* 🖼️ Main Product Image */}
                <img
                  src={mainImage}
                  alt={product.name}
                  className="w-full h-64 object-contain mb-4 rounded-lg"
                />

                {/* 🔍 Thumbnails (click to change main image) */}
                <div className="flex gap-2 overflow-x-auto mb-4 justify-center">
                  {product.images.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt=""
                      onClick={() => setMainImage(img)}
                      className={`w-16 h-16 object-contain border-2 rounded-md cursor-pointer transition-all ${
                        mainImage === img
                          ? "border-[#CD0053]"
                          : "border-transparent"
                      }`}
                    />
                  ))}
                </div>

                {/* 🎨 Color Options */}
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  {product.colors.map((color, idx) => (
                    <div
                      key={idx}
                      style={{
                        backgroundColor: color,
                        border:
                          selectedColor === color
                            ? "2px solid #CD0053"
                            : "1px solid #d1d5db",
                      }}
                      className="w-8 h-8 rounded-full cursor-pointer hover:scale-110 transition-transform"
                      onClick={() => {
                        setSelectedColor(color);
                        // Optional: Change main image based on color index if exists
                        if (product.images[idx]) {
                          setMainImage(product.images[idx]);
                        }
                      }}
                    />
                  ))}
                </div>

                {/* 🛒 Add to Cart Button */}
                <Button
                  text="Add to Cart"
                  className="w-full mt-4"
                  onClick={() =>
                    console.log(
                      `Added ${product.name} with shade ${
                        selectedColor || "default"
                      }`
                    )
                  }
                />
              </div>
            </div>,
            document.body
          )}
      </div>
    </>
  );
};

export default HoverImageCards;
