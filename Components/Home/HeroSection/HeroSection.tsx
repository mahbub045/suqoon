"use client";
import React from "react";
import NavBar from "../../Layout/NavBar/NavBar";

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-center bg-[url('/images/hero-bg.jpg')] bg-cover bg-center bg-no-repeat overflow-hidden -mt-20 py-40">

      <div className="absolute inset-0 bg-black/40 z-0"></div>
      <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-white to-transparent z-10"></div>

      <div className="relative z-20 w-full lg:w-10/12 mx-auto px-4 lg:px-0 pt-16 pb-8">

        <div className="mb-6 animate-fade-in-up opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards]">
          <span className="bg-primary/30 text-white px-5 py-3 rounded-full text-xs backdrop-blur-sm">
            Welcome to SUQOON Real Estate
          </span>
        </div>

        <h1 className="text-5xl lg:text-7xl font-extrabold mb-4 text-white leading-tight animate-fade-in-up opacity-0 [animation-delay:400ms] [animation-fill-mode:forwards] drop-shadow-5xl">
          Build Your Future <br />
          <span className="text-primary">With Premium Land</span>
        </h1>

        <p className="text-lg lg:text-xl mb-10 max-w-2xl mx-auto text-gray-200 leading-relaxed animate-fade-in-up opacity-0 [animation-delay:600ms] [animation-fill-mode:forwards]">
          Discover exclusive land share opportunities and premium land <br /> development projects.
          Invest wisely with trusted real estate solutions.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up opacity-0 [animation-delay:800ms] [animation-fill-mode:forwards]">
          <button className="px-10 py-4 bg-primary text-white rounded-full text-lg font-medium hover:bg-primary/90 transition-all">
            Explore Projects
          </button>
          <button className="px-10 py-4 bg-transparent text-white border-2 border-white rounded-full text-lg font-medium hover:bg-white/10 transition-all">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;