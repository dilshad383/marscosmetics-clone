import React from "react";
const OfferCard = ({card, headindHeight, cardWidth}) => {
  return (
    <div className={`${cardWidth} `}>
      <div className="rounded-sm overflow-hidden w-[90%] mx-auto">
        <img src={card.img} alt="" />
      </div>
      <div className="bg-black text-white relative -top-2 rounded-2xl p-6">
        <span >
          <img className="w-1/13 mb-2" src={card.icon} alt="" />
        </span>
        <p  className="!text-[clamp(.8rem,1vw,1rem)]">{card.code}</p>
        <h2 className={`text-[clamp(1.125rem,2vw,2rem)] font-semibold leading-7 ${headindHeight}`}>{card.desc}</h2>
        <p className="underline underline-offset-4 pt-4 !text-lg">{card.btn}</p>
      </div>
    </div>
  );
};

export default OfferCard;
