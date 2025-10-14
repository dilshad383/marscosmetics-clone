import React from "react";
const OfferCard = ({card}) => {
  return (
    <div className=" min-w-[20rem]">
      <div className="rounded-sm overflow-hidden w-[90%] mx-auto">
        <img src={card.img} alt="" />
      </div>
      <div className="bg-black text-white relative -top-2 rounded-2xl p-6">
        <p className="my-2">{card.code}</p>
        <h2 className="text-2xl font-semibold h-[4.5rem]">{card.desc}</h2>
        <p className="underline underline-offset-4 pt-8 !text-lg">Explore</p>
      </div>
    </div>
  );
};

export default OfferCard;
