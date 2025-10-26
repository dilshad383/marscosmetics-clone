import React, { useEffect, useRef, useState } from "react";
import { HiMiniChevronDown } from "react-icons/hi2";
import {
  FiChevronDown,
  FiChevronLeft,
  FiChevronRight,
  FiChevronUp,
} from "react-icons/fi";
import logo from "../assets/logo.png";
import { PiShoppingCartFill } from "react-icons/pi";
import { LuUser } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { VscClose } from "react-icons/vsc";
import { Link } from "react-router";
import subSidebarData from "./subSidebarData";
const Header = () => {
  // sidebar states
  const [openSidebar, setOpenSidebar] = useState(false);
  const [selectedSubSidebar, setSelectedSubSidebar] = useState(null);
  const [openDropdowns, setOpenDropdowns] = useState({});

  const toggleSidebar = () => setOpenSidebar(!openSidebar);
  const closeSidebar = () => setOpenSidebar(false);
  const openSubSidebar = (key) => setSelectedSubSidebar(key);
  const closeSubSidebar = () => setSelectedSubSidebar(null);

  const toggleDropdown = (key) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const sidebarRef = useRef(null);
  const subSidebarRef = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      const sidebarClicked =
        sidebarRef.current && sidebarRef.current.contains(e.target);

      const subSidebarClicked =
        subSidebarRef.current && subSidebarRef.current.contains(e.target);

      // If click is outside both, close both
      if (!sidebarClicked && !subSidebarClicked) {
        closeSidebar();
        closeSubSidebar();
      }

      // If click is inside sidebar but NOT in sub-sidebar
      if (sidebarClicked && !subSidebarClicked) {
        closeSubSidebar();
      }
    };

    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, []);

  return (
    <div className="">
      {/* marquee */}
      <div className="overflow-hidden whitespace-nowrap bg-[#8a0a26] text-white text-sm py-3 relative">
        {/* First Loop */}
        <div className="inline-block animate-marquee">
          <span className="mx-4">MARS Festive Glow Sale is Live Now!</span>
          <span className="mx-4">
            Avail B3@799 and other exciting offers at checkout
          </span>
          <span className="mx-4">MARS Festive Glow Sale is Live Now!</span>
          <span className="mx-4">
            Avail B3@799 and other exciting offers at checkout
          </span>
        </div>

        {/* Second Loop for seamless scroll */}
        <div className="inline-block absolute top-0 animate-marquee2">
          <span className="mx-4">MARS Festive Glow Sale is Live Now!</span>
          <span className="mx-4">
            Avail B3@799 and other exciting offers at checkout
          </span>
          <span className="mx-4">MARS Festive Glow Sale is Live Now!</span>
          <span className="mx-4">
            Avail B3@799 and other exciting offers at checkout
          </span>
        </div>
      </div>

      {/* Header Bar */}
      <div className="bg-black text-white py-4 px-12 max-md:px-4 flex justify-between items-center">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          <RxHamburgerMenu
            className="text-xl cursor-pointer lg:hidden"
            onClick={toggleSidebar}
          />
          <Link to="/"><img src={logo} alt="Logo" /></Link>    
          <div className="flex items-center max-md:hidden gap-2">
            <span className="text-sm">Categories</span>
            <HiMiniChevronDown />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex gap-4 text-sm">
          <div className="max-md:hidden flex gap-4">
            <Link to="">Store Locator</Link>
            <Link to="/about">About Us</Link>
            <Link to="">Blog</Link>
            <Link to="">Support</Link>
          </div>
          <Link><CiSearch className="inline-block" /></Link>
          <Link to="/signin" className="max-sm:hidden"><LuUser className="inline-block" /></Link>
          <Link><PiShoppingCartFill className="inline-block" /></Link>
          
        </div>
      </div>

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-full w-[19rem] z-[100] text-white bg-black transition-transform duration-300 pt-10 px-6  ${
          openSidebar ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <VscClose className="text-3xl cursor-pointer" onClick={closeSidebar} />
        <ul className="flex flex-col space-y-3 text-[13px] mt-10 list-none relative">
          <Link to="/festive-glow-sale">Festive Glow Sale</Link>
          <Link to="/bestsellers">Best Sellers</Link>

          {/* Main links with sub-sidebar */}
          {Object.keys(subSidebarData).map((key) => (
            <li
              key={key}
              className="flex items-center justify-between cursor-pointer "
              onClick={() => openSubSidebar(key)}
            >
              {subSidebarData[key].title}
              <FiChevronRight />
            </li>
          ))}

          <Link to="/blogs">Blogs</Link>
          <Link to="/find-your-shade">Find Your Shade</Link>
          <Link to="/store-locator">Store Locator</Link>
          <Link to="/about">About Us</Link>
          <Link to="/support">Support</Link>
        </ul>


        {/* Sub-sidebar (positioned relative to the Sidebar) */}
        {selectedSubSidebar && (
          <div
            ref={subSidebarRef}
            className={`bg-black h-full w-[80%] absolute z-[101] top-0 right-0 py-10 text-white transition-transform duration-300 ease-in-out ${
              selectedSubSidebar
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0"
            }`}
          >
            <div
              className="flex items-center gap-2 mb-4 px-4 cursor-pointer transition"
              onClick={closeSubSidebar}
            >
              <FiChevronLeft className="text-xl" /> Back
            </div>

            <ul className="list-none space-y-4 px-8 text-[13px]">
              {subSidebarData[selectedSubSidebar].items.map((item, i) => (
                <li key={i}>
                  <div
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => toggleDropdown(item.name)}
                  >
                    <span>{item.name}</span>
                    {openDropdowns[item.name] ? (
                      <FiChevronUp />
                    ) : (
                      <FiChevronDown />
                    )}
                  </div>

                  {openDropdowns[item.name] && (
                    <div className="flex flex-col ml-4 mt-2 space-y-2">
                      {item.links.map((link) => (
                        <Link
                          key={link.to}
                          to={link.to}
                          className="hover:text-pink-400 transition"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
