import React from "react";
import aboutimg from "../assets/about-img.png";
import abouticon1 from "../assets/about-icon1.png";
import abouticon2 from "../assets/about-icon2.png";
import abouticon3 from "../assets/about-icon3.png";
import abouticon4 from "../assets/about-icon4.png";
import SlickSlider from "../components/SlickSlider";
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
      <div className="bg-[#f3e6cf] text-center py-2 pt-8">
        <h2 className="text-[clamp(20px,3vw+0.7rem,40px)] leading-[2rem] font-semibold">
          MARS Cosmetics
        </h2>
        <p className="!text-[clamp(16px,1.5vw+0.4rem,24px)]">
          Makeup for Everyone
        </p>
        <SlickSlider />

        <div className="px-[clamp(48px,8vw,248px)]">
          <p className="!text-[clamp(16px,1.5vw+0.4rem,18px)] py-8">
            At MARS Cosmetics, we believe beauty is for everyone. From our
            humble beginnings to becoming India’s most loved makeup brand, our
            journey has always been about empowering you. We create
            high-quality, accessible products that let you express your unique
            self with confidence and creativity. Together, we’re redefining
            beauty standards — celebrating individuality in every shade, every
            style, and every story.
          </p>
        </div>
      </div>

      <div className="bg-[#a52337] text-white grid max-sm:grid-cols-2 md:grid-cols-4 px-[clamp(24px,6vw,80px)] py-[clamp(20px,5vw,63px)] gap-4">
        {stats.map((item, idx) => (
          <div key={idx} className="text-center">
            <h3 className="text-[clamp(24px,2vw+1rem,40px)] font-semibold">
              {item.title}
            </h3>
            <p className="!text-[clamp(16px,1.2vw+0.5rem,28px)]">{item.text}</p>
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
      <div className="bg-[#a52337] text-white py-8 px-6">
        <h3 className="text-[1.3rem] text-center">This is our outlook</h3>
        <h2 className="font-semibold text-2xl text-center leading-[1.7rem] my-6">
          Boldly Positive.Fearlessly Creative.Power in Your Hands.Always Mindful
        </h2>

        <div className="hide-scrollbar overflow-x-auto flex gap-4 flex-nowrap md:justify-center">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="rounded-2xl my-2 p-4 bg-[#f3e6cf] text-black shrink-0 max-w-[16rem]"
            >
              <h6 className="text-2xl font-semibold">{card.title}</h6>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#f3e6cf] flex justify-between px-10 py-8 md:py-16 md:justify-center md:gap-10 ">
        {[abouticon1, abouticon2, abouticon3, abouticon4].map((item) => (
          <img className="max-w-25 md:max-w-35 block" src={item} alt="" />
        ))}
      </div>
    </>
  );
};

export default About;
