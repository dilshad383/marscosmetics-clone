import React from "react";
import aboutimg from "../assets/about-img.png";
import abouticon1 from '../assets/about-icon1.png'
import abouticon2 from '../assets/about-icon2.png'
import abouticon3 from '../assets/about-icon3.png'
import abouticon4 from '../assets/about-icon4.png'
const stats = [
  { title: "2015", text: "Our First Step" },
  { title: "Delhi", text: "Our Foundation" },
  { title: "27 million +", text: "Products sold in FY'24" },
  { title: "300 Cr. +", text: "Our FY'24 Turnover" },
];
const cards = [
  {
    title: "Boldly Positive",
    text: "We believe beauty should uplift. Every lipstick, every eyeliner, every small step can spark confidence and joy.",
  },
  {
    title: "Fearlessly Creative",
    text: "Makeup is about expression, not rules. We experiment, we play, and we inspire you to find your own unique style.",
  },
  {
    title: "Power in Your Hands",
    text: "We don’t just sell makeup — we give you the tools to own your look, your story, and your confidence every single day.",
  },
  {
    title: "Always Mindful",
    text: "We stay grounded in the realities of our industry, trends, and community — evolving responsibly while creating beauty that lasts.",
  },
];

const About = () => {
  return (
    <>
      <div className="bg-[#f3e6cf]"></div>

      <div className="bg-[#a52337] place-items-center text-white grid sm:grid-cols-2 md:grid-cols-4">
        {stats.map((item, idx) => (
          <div key={idx} className="">
            <h3 className="text-2xl font-semibold">{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>

      <div className="bg-black text-white">
        <img src={aboutimg} alt="" />

        <div className="">
          <p>Our Brand Statement</p>
          <h4 className="text-2xl font-semibold">Makeup for Everyone</h4>
          <p>
            At MARS, beauty has no labels, limits, or stereotypes. Our DNA is
            rooted in celebrating diversity and empowering self-expression —
            making sure everyone feels seen, valued, and free to be themselves.
            Inclusivity isn’t a checkbox for us; it’s the very fabric of who we
            are. With bold ideas and accessible beauty, we’re redefining what it
            means to feel confident, creative, and unapologetically you.
          </p>
        </div>
      </div>

      {/* This is our outlook */}
      <div className="bg-[#a52337] text-white">
        <h3 className="">This is our outlook</h3>
        <h2 className="font-semibold">
          Boldly Positive.Fearlessly Creative.Power in Your Hands.Always Mindful
        </h2>

        <div className="scrollbar-hide ">
          {cards.map((card, idx) => (
            <div key={idx} className="rounded-2xl p-4">
              <h6 className="text-2xl font-semibold">{card.title}</h6>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#f3e6cf]">
        <img src={abouticon1} alt="" />
        <img src={abouticon2} alt="" />
        <img src={abouticon3} alt="" />
        <img src={abouticon4} alt="" />
      </div>
    </>
  );
};

export default About;
