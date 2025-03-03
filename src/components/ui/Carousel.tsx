"use client"
import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

interface CarouselProps {
  images: string[];
}

const Carousel = ({ images }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-full h-72 px-6 mt-4"> {/* Añade padding horizontal (px-4) */}
      <div
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
        className="w-full h-full bg-center bg-cover duration-500 rounded-3xl"
      ></div>
      {/* Flecha izquierda con margen ajustado */}
      <div className="absolute top-1/2 transform -translate-y-1/2 left-9 cursor-pointer">
        <ChevronLeftIcon className="h-8 w-8 text-white" onClick={prevSlide} />
      </div>
      {/* Flecha derecha con margen ajustado */}
      <div className="absolute top-1/2 transform -translate-y-1/2 right-9 cursor-pointer">
        <ChevronRightIcon className="h-8 w-8 text-white" onClick={nextSlide} />
      </div>
    </div>
  );
};

export default Carousel;