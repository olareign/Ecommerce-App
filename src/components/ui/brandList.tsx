import { useState, useEffect } from 'react';
import BrandCard from '../widgets/brandCard';

export default function BrandListSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

 

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % brands.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [brands.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 bg-gray-100">
      <div className="relative overflow-hidden rounded-2xl">
        {/* Slider Container */}
        <div 
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {brands.map((brand, index) => (
            <div
              key={brand.id}
              className={`w-full flex-shrink-0 ${brand.bgColor} p-8 md:p-12`}
            >
              {/* Desktop Layout */}
              <div className="hidden md:grid grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* Repeat the same brand 3 times for the layout effect */}
                {[0, 1, 2].map((i) => (
                  <BrandCard key={i} brand={brand} index={i} />
                ))}
              </div>

              {/* Mobile Layout */}
              <div className="md:hidden max-w-sm mx-auto">
                <BrandCard brand={brand} index={0} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {brands.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-blue-500 w-8'
                : 'bg-gray-400 hover:bg-gray-500'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
