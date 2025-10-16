import React, { useRef, useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const Filters = () => {
 const [openSection, setOpenSection] = useState(null);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(2499);
  const lastValue = useRef(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const handleRangeChange = (e) => {
    const newValue = Number(e.target.value);

    // First time user interacts → store baseline
    if (lastValue.current === null) {
      lastValue.current = newValue;
      return;
    }

    // If moved right → adjusting maxPrice
    if (newValue > lastValue.current) {
      setMaxPrice(Math.max(newValue, minPrice));
    }
    // If moved left → adjusting minPrice
    else if (newValue < lastValue.current) {
      setMinPrice(Math.min(newValue, maxPrice));
    }

    lastValue.current = newValue;
  };

  const handleMouseUp = () => {
    lastValue.current = null; // reset after drag
  };

  return (
    <div className="w-full max-w-xs bg-white">
      {/* Availability */}
      <div className="border-b border-gray-400">
        <button
          onClick={() => toggleSection("availability")}
          className="w-full flex justify-between items-center px-2 py-3 text-sm font-medium hover:bg-gray-50"
        >
          Availability
          <FiChevronDown
            className={`transition-transform ${
              openSection === "availability" ? "rotate-180" : ""
            }`}
          />
        </button>

        {openSection === "availability" && (
          <div className="px-5 pb-3 text-sm space-y-2">
            <label className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <input type="checkbox" className="accent-black" />
                In Stock
              </div>
              <span className="text-gray-500">45</span>
            </label>
            <label className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <input type="checkbox" className="accent-black" />
                Out of Stock
              </div>
              <span className="text-gray-500">9</span>
            </label>
          </div>
        )}
      </div>

            {/* Price Section */}
      <div className="border-b border-gray-400">
        <button
          onClick={() => toggleSection("price")}
          className="w-full flex justify-between items-center px-2 py-3 text-sm font-medium hover:bg-gray-50"
        >
          Price
          <FiChevronDown
            className={`transition-transform ${
              openSection === "price" ? "rotate-180" : ""
            }`}
          />
        </button>

        {openSection === "price" && (
          <div className="px-5 pb-3 text-sm space-y-3">
            {/* One slider controlling both sides */}
            <div className="relative h-6 flex items-center">
              <div className="absolute h-1 w-full bg-gray-300 rounded" />
              <div
                className="absolute h-1 bg-black rounded"
                style={{
                  left: `${(minPrice / 2499) * 100}%`,
                  right: `${100 - (maxPrice / 2499) * 100}%`,
                }}
              />
              <input
                type="range"
                min="0"
                max="2499"
                step="10"
                onChange={handleRangeChange}
                onMouseUp={handleMouseUp}
                className="absolute w-full accent-black"
              />
            </div>

            <div className="flex justify-between items-center gap-3">
              <div>
                <label className="block text-xs text-gray-500">From</label>
                <input
                  type="text"
                  value={`₹${minPrice}`}
                  readOnly
                  className="border rounded px-2 py-1 text-sm w-20"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-500">To</label>
                <input
                  type="text"
                  value={`₹${maxPrice}`}
                  readOnly
                  className="border rounded px-2 py-1 text-sm w-20"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Color */}
      <div className="border-b border-gray-400">
        <button
          onClick={() => toggleSection("color")}
          className="w-full flex justify-between items-center px-2 py-3 text-sm font-medium hover:bg-gray-50"
        >
          Color
          <FiChevronDown
            className={`transition-transform ${
              openSection === "color" ? "rotate-180" : ""
            }`}
          />
        </button>

        {openSection === "color" && (
          <div className="px-5 pb-3 text-sm space-y-1">
            {["001", "002", "003", "004", "005"].map((color) => (
              <div
                key={color}
                className="flex justify-between items-center text-gray-700"
              >
                <span>{color}</span>
                <span className="text-gray-500">1</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Product Type */}
      <div>
        <button
          onClick={() => toggleSection("productType")}
          className="w-full flex justify-between items-center px-2 py-3 text-sm font-medium hover:bg-gray-50"
        >
          Product Type
          <FiChevronDown
            className={`transition-transform ${
              openSection === "productType" ? "rotate-180" : ""
            }`}
          />
        </button>

        {openSection === "productType" && (
          <div className="px-5 pb-3 text-sm space-y-2">
            {[
              { name: "Blush", count: 2 },
              { name: "Brush", count: 1 },
              { name: "Brush Set", count: 3 },
              { name: "Compact", count: 4 },
              { name: "Concealer", count: 2 },
              { name: "Cosmetics", count: 1 },
              { name: "Eyelashes", count: 1 },
            ].map((item) => (
              <label
                key={item.name}
                className="flex justify-between items-center"
              >
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="accent-black" />
                  {item.name}
                </div>
                <span className="text-gray-500">{item.count}</span>
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Filters;
