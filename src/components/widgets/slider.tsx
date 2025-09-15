"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  {
    title: "Best Deal Online on smart watches",
    headline: "SMART WEARABLE.",
    sub: "UP to 80% OFF",
    img: "https://placehold.co/400x400/E5E7EB/4B5563?text=Smart+Watch",
  },
  {
    title: "Eco-Friendly Kitchen Essentials",
    headline: "GREEN KITCHEN.",
    sub: "Save up to 60%",
    img: "https://placehold.co/400x400/E5E7EB/4B5563?text=Kitchen+Essentials",
  },
  {
    title: "Premium Fruits Delivered Fresh",
    headline: "FRESH FRUITS.",
    sub: "UP to 50% OFF",
    img: "https://placehold.co/400x400/E5E7EB/4B5563?text=Fresh+Fruits",
  },
  {
    title: "Upgrade Your Home",
    headline: "HOME IMPROVEMENT.",
    sub: "UP to 70% OFF",
    img: "https://placehold.co/400x400/E5E7EB/4B5563?text=Home+Improvement",
  },
  {
    title: "Fashion for All",
    headline: "TRENDY FASHION.",
    sub: "UP to 40% OFF",
    img: "https://placehold.co/400x400/E5E7EB/4B5563?text=Fashion",
  },
];

export default function Slider({
  interval = 4000,
}: {
  height?: string;
  interval?: number;
}) {
  const [current, setCurrent] = useState(0);

  // Automated/animated slider
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, interval);
    return () => clearTimeout(timer);
  }, [current, interval]);

  const prevSlide = () =>
    setCurrent((current - 1 + slides.length) % slides.length);
  const nextSlide = () => setCurrent((current + 1) % slides.length);

  return (
    <div className="relative min-w-full max-w-7xl my-6">
      {/* Main Slider Container */}
      <div className="relative bg-gradient-to-r from-[#2c3a5f] to-[#1e2a4a] rounded-3xl overflow-hidden shadow-2xl">
        {/* Slide Content */}
        <div className="flex items-center justify-between px-8 md:px-16 py-8 md:py-8 min-h-[250px] md:min-h-[350px]">
          {/* Left Content */}
          <div className="flex flex-col gap-3 md:gap-6 flex-1 z-10">
            <div className="text-white/90 text-base md:text-lg font-medium">
              {slides[current].title}
            </div>
            <div className="text-white font-bold text-3xl md:text-5xl lg:text-6xl leading-tight">
              {slides[current].headline}
            </div>
            <div className="text-white text-lg md:text-2xl lg:text-3xl font-semibold">
              {slides[current].sub}
            </div>

            {/* Dots Navigation */}
            <div className="flex gap-2 mt-4 md:mt-8">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`block rounded-full transition-all duration-300 cursor-pointer ${
                    idx === current
                      ? "bg-white w-8 md:w-10 h-2 md:h-3"
                      : "bg-white/40 w-3 md:w-4 h-2 md:h-3 hover:bg-white/60"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Content - Main Slide Image */}
          <div className="flex items-center justify-center flex-1 relative">
            <div className="relative">
              {/*
                            SLIDE IMAGE INPUT:
                            - Replace slides[current].img with your image path
                            - Update the src prop: src="/your-image.png" or src={yourImageVariable}
                            - Adjust width/height props as needed (currently set to 300x300)
                            - Modify className sizes: w-[200px] h-[200px] for mobile, md:w-[300px] md:h-[300px] for medium, lg:w-[350px] lg:h-[350px] for large screens
                            - Change object-contain to object-cover if you want the image to fill the container
                            */}
              <Image
                src={slides[current].img} // 👈 UPDATE THIS: Replace with your image path
                alt={slides[current].headline}
                width={300} // 👈 UPDATE THIS: Set your image width
                height={300} // 👈 UPDATE THIS: Set your image height
                className="object-contain w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px]" // 👈 UPDATE THIS: Adjust responsive sizes
                unoptimized={true}
              />
            </div>
          </div>
        </div>

        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <div className="absolute top-10 right-10 w-32 h-32 rounded-full border border-white/20"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 rounded-full border border-white/20"></div>
          <div className="absolute top-1/2 right-32 w-16 h-16 rounded-full border border-white/20"></div>
        </div>
      </div>

      {/* Navigation Arrows - Positioned Outside */}
      <button
        onClick={prevSlide}
        className="absolute left-0.5 top-1/2 transform -translate-y-1/2 -translate-x-1/2 z-20 bg-gray-200 rounded-full shadow-lg hover:shadow-xl items-center justify-center w-16 h-16 md:w-18 md:h-18 transition-all duration-200 hover:scale-105 hidden lg:flex outline-white outline-6"
        aria-label="Previous Slide"
      >
        <svg
          width="20"
          height="20"
          fill="none"
          stroke="#3b82f6"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="md:w-6 md:h-6"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-0.5 top-1/2 transform -translate-y-1/2 translate-x-1/2 z-20 bg-gray-200 rounded-full shadow-lg hover:shadow-xl items-center justify-center w-16 h-16 md:w-18 md:h-18 transition-all duration-200 hover:scale-105 hidden lg:flex outline-white outline-6"
        aria-label="Next Slide"
      >
        <svg
          width="20"
          height="20"
          fill="none"
          stroke="#3b82f6"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="md:w-6 md:h-6"
        >
          <path d="M9 6l6 6-6 6" />
        </svg>
      </button>
    </div>
  );
}
