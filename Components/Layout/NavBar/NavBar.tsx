"use client";

import React, { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import Link from "next/link";
import { NavMenu } from "../../../Data/Layout/NavMenuItmes";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="w-full lg:w-10/12 bg-transparent mx-auto px-4 lg:px-0 py-4 relative text-white">
      <nav className="flex justify-between items-center">
        {/* Logo */}
        <div className="w-12 h-12 flex-shrink-0">
          <img src="/images/logo.jpg" alt="Logo" className="w-full h-full object-cover rounded-md" />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 lg:space-x-12 text-sm font-medium">
          {NavMenu.map((item) => (
            <Link key={item.name} href={item.link} className="hover:opacity-70 transition-opacity">
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex justify-center items-center space-x-4">
          <a href="tel:+1234568910" className="flex items-center text-sm font-medium">
            <Phone size={16} />
            <span className="ml-2">+123 456 8910</span>
          </a>
          <button className="px-5 py-2.5 rounded-full border-2 border-white text-sm hover:bg-white hover:text-black transition-all">
            Book Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="p-2">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-lg md:hidden flex flex-col p-6 space-y-6 z-50 border-t border-white/10 rounded-b-2xl shadow-2xl">
          {/* Mobile Links */}
          <div className="flex flex-col space-y-4">
            {NavMenu.map((item) => (
              <Link 
                key={item.name} 
                href={item.link} 
                className="text-lg font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Buttons Area */}
          <div className="flex flex-col space-y-3 pt-4 border-t border-white/10">
            {/* Phone Button */}
            <a 
              href="tel:+1234568910" 
              className="flex justify-center items-center space-x-2 px-5 py-3 rounded-full border-2 border-white/50 text-sm font-semibold active:bg-white active:text-black transition-all"
            >
              <Phone size={16} />
              <span>+123 456 8910</span>
            </a>

            {/* Book Now Button */}
            <button className="w-full px-5 py-3 rounded-full border-2 border-white bg-white text-black font-bold text-sm">
              Book Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;