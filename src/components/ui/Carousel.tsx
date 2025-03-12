"use client";

import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

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
    <div className="relative w-full mt-4">
      {/* Contenedor del carrusel con altura responsiva */}
      <div className="relative w-full carousel-container rounded-xl overflow-hidden">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover"
        />
        {/* Flecha izquierda */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 transform -translate-y-1/2 left-4 bg-yellow-100 p-2 rounded-full hover:bg-yellow-200 focus:outline-none"
          aria-label="Anterior"
        >
          <ChevronLeftIcon className="h-6 w-6 text-yellow-600" />
        </button>
        {/* Flecha derecha */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 transform -translate-y-1/2 right-4 bg-yellow-100 p-2 rounded-full hover:bg-yellow-200 focus:outline-none"
          aria-label="Siguiente"
        >
          <ChevronRightIcon className="h-6 w-6 text-yellow-600" />
        </button>
      </div>

      <style jsx>{`
        .carousel-container {
          height: 320px; /* Altura base para pantallas grandes (lg: 1024px) */
        }
        @media (min-width: 1536px) {
          .carousel-container {
            height: 320px; /* Altura para pantallas 2xl (≥1536px) */
          }
        }
        @media (max-width: 1280px) and (max-width: 1535px) {
          .carousel-container {
            height: 300px; /* Altura para pantallas xl (≥1280px y <1536px) */
          }
        }
        @media (max-width: 1023px) {
          .carousel-container {
            height: 200px; /* Altura para pantallas medianas (≤1023px) */
          }
        }
        @media (max-width: 768px) {
          .carousel-container {
            height: 180px; /* Altura para pantallas medianas (≤768px) */
          }
        }
        @media (max-width: 640px) {
          .carousel-container {
            height: 128px; /* Altura para pantallas pequeñas (≤640px) */
          }
        }
      `}</style>
    </div>
  );
};

export default Carousel;