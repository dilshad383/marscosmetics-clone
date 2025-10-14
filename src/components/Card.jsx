import React from "react";

const Card = () => {
  return <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {cards.map((card) => (
        <div
          key={card.id}
          className="group w-64 rounded-2xl overflow-hidden shadow-lg cursor-pointer mx-auto"
        >
          <div className="relative">
            {/* Default image */}
            <img
              src={card.img1}
              alt={card.title}
              className="w-full h-40 object-cover transition-opacity duration-300 group-hover:opacity-0"
            />
            {/* Hover image */}
            <img
              src={card.img2}
              alt={card.title}
              className="absolute inset-0 w-full h-40 object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
          </div>
          <div className="p-4 text-center">
            <h2 className="font-semibold text-lg">{card.title}</h2>
            <p className="text-gray-500 text-sm">{card.desc}</p>
          </div>
        </div>
      ))}
    </div>

  </div>;
};

export default Card;
