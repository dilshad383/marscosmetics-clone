import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import productsData from "../components/productsData";
import Filters from "../components/Filters";

const tabs = [
  "Best Sellers",
  "New Arrivals",
  "Lips",
  "Eyes",
  "Face",
  "Tools",
  "Combos",
  "Lip Combos",
];

const BestSellers = () => {
  const [activeTab, setActiveTab] = useState("Best Sellers");

  // Flatten all product arrays into one list for filtering
  const allProducts = Object.values(productsData).flat();

  // Filter data based on active tab
  const getFilteredData = () => {
    switch (activeTab) {
      case "Best Sellers":
        return allProducts.filter((item) => item.tag === "Bestseller");
      case "New Arrivals":
        return allProducts.filter((item) => item.tag === "New");
      case "Lips":
        return productsData.Lips;
      case "Eyes":
        return productsData.Eyes;
      case "Face":
        return productsData.Face;
      case "Tools":
        return productsData.Tools;
      case "Combos":
        return productsData.Combos;
      case "Lip Combos":
        // Example: combining Lips + Combos (customize as you wish)
        return [...productsData.Lips, ...productsData.Combos];
      default:
        return [];
    }
  };

  const filteredData = getFilteredData();

  return (
    <>
      <div className="grid md:grid-cols-5 ">
        <div className="col-span-1 h-screen pt-12 pl-8 max-md:hidden">
          <h2 className="text-2xl">Filter by</h2>
          <Filters/>
        </div>
        <div className="col-span-4 ">
          {/* Tabs Navigation */}
          <ul className="flex flex-nowrap gap-2 pt-3 justify-center">
            {tabs.map((tab) => (
              <li
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`cursor-pointer px-1 pt-2 text-sm transition-all font-semibold
              ${activeTab === tab ? "border-b-2 border-[#9c1a36]" : ""}`}
              >
                {tab}
              </li>
            ))}
          </ul>

          {/* Tab Content */}
          <div className="grid sm:grid-cols-3 max-sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
            {filteredData.length > 0 ? (
              filteredData.map((card, idx) => (
                <ProductCard key={idx} product={card} />
              ))
            ) : (
              <p className="text-gray-500 col-span-full text-center py-10">
                No products available in this category.
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BestSellers;
