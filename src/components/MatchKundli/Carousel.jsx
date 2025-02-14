import React, { useState, useEffect, useRef } from 'react';

const Carousel = ({ children: slides, autoSlide = false, autoSlideInterval = 3000 }) => {
  const [curr, setCurr] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const carouselRef = useRef(null);

  const prev = () => {
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
    setTransitioning(true);
  };

  const next = () => {
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
    setTransitioning(true);
  };

  useEffect(() => {
    if (transitioning) {
      const timer = setTimeout(() => {
        setTransitioning(false);
      }, 500); // Match this to the CSS transition duration
      return () => clearTimeout(timer);
    }
  }, [transitioning]);

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval]);

  return (
    <div className="overflow-hidden relative w-full" ref={carouselRef}>
      <div
        className={`flex ${transitioning ? 'transition-transform ease-out duration-500' : ''}`}
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0">
            {slide}
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`transition-all w-1.5 h-1.5 bg-white rounded-full ${
                curr === i ? 'p-0.5' : 'bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </div>

   
    </div>
  );
};

export default Carousel;
