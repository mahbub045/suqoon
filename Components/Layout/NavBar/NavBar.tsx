"use client";

import { NavMenu } from "@/Data/Layout/Navbar/NavbarMenu";
import { Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out
        ${
          scrolled
            ? "bg-white text-black shadow-md py-2"
            : "bg-transparent text-white pt-4"
        }`}
    >
      <nav
        className={`mx-auto transition-all duration-500 ease-in-out px-4 lg:px-0 flex justify-between items-center
          ${scrolled ? "w-11/12" : "w-full lg:w-11/12"}`}
      >
        {/* Logo */}
        <div className="w-18 h-18 shrink-0">
          <Image
            src={scrolled ? "/images/logo-black.png" : "/images/logo-white.png"}
            alt="Suqoon Real Estate Logo"
            width={1000}
            height={1000}
            className="w-full h-full object-contain rounded-md"
          />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 lg:space-x-12 text-sm font-medium">
          {NavMenu.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className="hover:text-primary"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex justify-center items-center space-x-4">
          <a
            href="tel:+1234568910"
            className={`flex items-center text-sm font-medium
            ${scrolled ? "text-primary" : "text-white"}`}
          >
            <Phone size={16} />
            <span className="ml-2">+123 456 8910</span>
          </a>
          <button
            className={`px-5 py-2.5 rounded-full border-2 text-sm cursor-pointer transition-all 
            ${
              scrolled
                ? "bg-primary text-white hover:bg-transparent hover:text-black"
                : "border-white hover:bg-white hover:text-black"
            }`}
          >
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
        <div
          className={`absolute top-full left-0 w-full md:hidden flex flex-col p-6 space-y-6 z-50 border-t rounded-b-2xl shadow-2xl transition-colors
          ${
            scrolled
              ? "bg-white text-black border-gray-100"
              : "bg-black/95 backdrop-blur-lg text-white border-white/10"
          }`}
        >
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

          <div className="flex flex-col space-y-3 pt-4 border-t border-white/10">
            <a
              href="tel:+1234568910"
              className={`flex justify-center items-center space-x-2 px-5 py-3 rounded-full border-2 text-sm font-semibold transition-all
              ${scrolled ? "border-black/20" : "border-white/50"}`}
            >
              <Phone size={16} />
              <span>+123 456 8910</span>
            </a>
            <button
              className={`w-full px-5 py-3 rounded-full border-2 font-bold text-sm
              ${
                scrolled
                  ? "bg-black text-white border-black"
                  : "bg-white text-black border-white"
              }`}
            >
              Book Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
