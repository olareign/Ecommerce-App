"use client";

import { useState, useEffect } from 'react';
import BrandCard from '../widgets/brandCard';
import { brands } from '@/lib/db';

export default function BrandListSlider({category}: {category?: string}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Get brand data
  const brandDetails = category && brands[category] ? brands[category] : brands["Mobiles"];
  
  // For simplicity, let's assume we always show 1 card at a time on mobile, 2 on tablet, 3 on desktop
  const [cardsPerView, setCardsPerView] = useState(1);
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerView(3);
      } else if (window.innerWidth >= 768) {
        setCardsPerView(2);
      } else {
        setCardsPerView(1);
      }
    };
    
    // Set initial value
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate how many slides we can have
  const totalSlides = Math.max(1, brandDetails.length - cardsPerView + 1);

// Dynamic dot calculation based on screen size and data
  const getMaxDots = () => {
    if (cardsPerView === 3) return 3; // Desktop: 3 dots (each dot = 3 cards)
    if (cardsPerView === 2) return 4; // Tablet: 4 dots (each dot = 2 cards)  
    return 5; // Mobile: 5 dots (each dot = 1 card)
  };

  const maxDotsToShow = getMaxDots();
  const showDots = Math.min(totalSlides, maxDotsToShow);


  // Auto-slide effect
  useEffect(() => {
    if (showDots > 1) {
      const interval = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % showDots);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [maxDotsToShow, showDots]);

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  if (!brandDetails || brandDetails.length === 0) {
    return <div className="text-center py-8">No brands available</div>;
  }

  return (
    <div className="w-full mx-auto py-8">
      {/* Cards Container */}
      <div className="overflow-hidden rounded-lg">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentSlide * 100) / cardsPerView}%)`,
            width: `${(brandDetails.length * 100) / cardsPerView}%`
          }}
        >
          {brandDetails.map((brand, index) => (
            <div
              key={brand.id || index}
              className="px-2"
              style={{ width: `${100 / brandDetails.length}%` }}
            >
              <BrandCard brand={brand} />
            </div>
          ))}
        </div>
      </div>
      

      {/* Dot Indicators - Always show */}
      {totalSlides > 1 && (
        <div className="flex justify-center mt-6 space-x-2">
          {/* Show dots up to the limit */}
          {Array.from({ length: showDots }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                currentSlide === index 
                  ? 'bg-blue-500' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}