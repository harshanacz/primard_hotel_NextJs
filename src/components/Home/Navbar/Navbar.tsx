"use client"; 
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { navItems } from "@/constants/Constants";
import { HiBars3BottomRight } from "react-icons/hi2";

interface NavbarProps {
  toggleMenu: () => void; 
}

const Navbar: React.FC<NavbarProps> = ({ toggleMenu }) => {
  const [navBg, setNavBg] = React.useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) {
        setNavBg(true);
      } else {
        setNavBg(false);
      }
    };

    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  return (
    <div 
      className={`fixed h-[12vh] z-[10] w-full transition-all duration-300 
        ${navBg ? 'bg-black bg-opacity-80 backdrop-blur-lg' : 'bg-transparent backdrop-blur-none'}`}>
      <div className="flex items-center h-full justify-between w-[95%] sm:w-[90%] mx-auto">
        {/* Logo */}
        <Image src="/images/logo.png" width={170} height={170} alt="logo" />

        {/* Container for Nav Links and Book Now Button */}
        <div className="hidden sm:flex items-center justify-end space-x-10 w-full">
          {/* Nav Links */}
          <div className="flex items-center space-x-10">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={`/${item.label.toLowerCase()}`}
                className="text-white  font-normal  text-lg hover:text-yellow-400 transition-all duration-300"
              >
                {item.label}
              </Link>
            ))}
          </div>
          {/* Book Now Button */}
          <button className="bg-yellow-400 text-black px-4 py-2 rounded-full text-lg  font-normal ">
            Book Now
          </button>
        </div>

        {/* Menu Button for Mobile View */}
        <div className="flex sm:hidden items-center space-x-4">
          <button className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm  font-normal ">
            Book Now
          </button>
          <HiBars3BottomRight
            className="w-8 h-8 cursor-pointer text-white"
            onClick={toggleMenu}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
