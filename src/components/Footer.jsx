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

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <div className="bg-[#000] text-white grid md:grid-cols-3 gap-6">
        <div className="col-span-1 px-4 pt-4">
          <div className="">
            <img src={logo} alt="" />
          </div>
          <div className="text-sm my-6">
            <p className="font-semibold mb-4">Makeup for everyone</p>
            <p className="!text-sm">
              Discover accessible & super-affordable makeup designed for
              everyone. Based in India, we're here to embrace your unique
              and diverse beauty with us.
            </p>
          </div>
          <div className="flex gap-2">
            <FaTwitter /> <FaFacebookF /> <FaInstagram /> <FaLinkedin />
            <FaYoutube />
          </div>
        </div>
        <div className="col-span-2 md:py-6">
          {/* accordion */}
          {accordionData.map((section, index) => (
            <div key={index} className="bg-[#212121] px-4 rounded-lg mx-3 mb-4">
              <div className="w-full mx-auto">
                <div className="">
                  {/* Header */}
                  <div
                    onClick={() => toggleAccordion(index)}
                    className="flex justify-between items-center cursor-pointer py-3"
                  >
                    <span className="font-medium text-lg">{section.title}</span>
                    <span className="text-2xl">{openIndex === index ? "−" : "+"}</span>
                  </div>

                  {/* Content */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <ul className="pl-2 space-y-2 mt-2">
                      {section.items.map((item, i) => (
                        <li key={i} className="text-sm">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
