import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import logo from "../assets//logo.png";
const Footer = () => {
  const [openAccordion, setOpenAccordion] = useState(false)

  return (
    <div>
      <div className="bg-[#000] text-white grid md:grid-cols-3">
        <div className="col-span-1">
          <div className="">
            <img src={logo} alt="" />
          </div>
          <div className="my-2 text-sm">
            <p className="font-semibold mb-4">Makeup for everyone</p>
            <p>
              Discover accessible & super-affordable makeup designed for
              everyone. Based in India, we're <br /> here to embrace your unique
              and diverse beauty with us.
            </p>
          </div>
          <div className="flex gap-2">
            <FaTwitter /> <FaFacebookF /> <FaInstagram /> <FaLinkedin />
            <FaYoutube />
          </div>
        </div>
        <div className="col-span-2">
          {/* accordion */}
          <div className="bg-[#212121] px-4">
            <div onClick={()=> setOpenAccordion(!openAccordion)} className="flex justify-between cursor-pointer py-2 my-4">
              <span className="inline-block">categories</span>
              <span className="inline-block">+</span>
            </div>
            <div className="">
              {openAccordion &&
              <ul>
                <li>Best Sellers</li>
                <li>New Arrivals</li>
                <li>Face</li>
                <li>Lips</li>
                <li>Eyes</li>
                <li>Tools</li>
                <li>Combos</li>
                <li>Lip Combos</li>
              </ul>

              }
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
