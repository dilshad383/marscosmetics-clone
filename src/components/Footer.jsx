import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import logo from "../assets/logo.png";

const accordionData = [
  {
    title: "Categories",
    items: [
      "Best Sellers",
      "New Arrivals",
      "Face",
      "Lips",
      "Eyes",
      "Tools",
      "Combos",
      "Lip Combos",
    ],
  },
  {
    title: "Policies and More",
    items: [
      "Privacy Policy",
      "Refund Policy",
      "Shipping Policy",
      "Terms of Service",
      "Subscription Policy",
    ],
  },
  {
    title: "Connect",
    items: [
      "For Queries:",
      "support@marscosmetics.in",
      "For Collaborations:",
      "collaborations@marscosmetics.in",
      "+91 9289507849",
      "Monday to Friday: 10:00 AM - 6:00 PM",
    ],
  },
];

const Footer = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleAccordion = (index) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="bg-black text-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 py-8">
        {/* Left Section */}
        <div>
          <img src={logo} alt="Logo" className="w-32" />
          <div className="text-sm my-6">
            <p className="font-semibold mb-4">Makeup for everyone</p>
            <p>
              Discover accessible & super-affordable makeup designed for
              everyone. Based in India, we're here to embrace your unique and
              diverse beauty with us.
            </p>
          </div>
          <div className="flex gap-3 text-xl">
            <FaTwitter /> <FaFacebookF /> <FaInstagram /> <FaLinkedin />{" "}
            <FaYoutube />
          </div>
        </div>

        {/* Accordion Section */}
        <div className="md:col-span-2">
          {accordionData.map((section, index) => (
            <div
              key={index}
              className="bg-[#212121] rounded-lg mb-3 px-4 transition-all duration-300"
            >
              <div
                onClick={() => toggleAccordion(index)}
                className="flex justify-between items-center cursor-pointer py-3"
              >
                <span className="font-medium text-lg">{section.title}</span>
                <span className="text-2xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </div>

              <div
                className={`transition-[max-height] duration-500 ease-in-out overflow-hidden ${
                  openIndex === index ? "max-h-[500px]" : "max-h-0"
                }`}
              >
                <ul className="pl-2 space-y-2 pb-3">
                  {section.items.map((item, i) => (
                    <li key={i} className="text-sm">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
