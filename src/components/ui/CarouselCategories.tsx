"use client";

import { useState, useEffect } from "react";
import { categories } from "@/data/data";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline"; // Importamos los iconos de Heroicons

interface Category {
  name: string;
  subcategories: string[];
  image: string;
}

const CarouselCategories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(8); // Dinámico según pantalla
  const cardWidth = 112; // w-28 ajustado (112px)
  const gap = 4; // space-x-1 (4px)

  // Ajustar visibleItems según el ancho de pantalla
  useEffect(() => {
    const updateItems = () => {
      const width = window.innerWidth;
      if (width < 640) setVisibleItems(4); // Móviles
      else if (width < 1024) setVisibleItems(6); // Tablets
      else setVisibleItems(8); // Desktop
    };
    updateItems();
    window.addEventListener("resize", updateItems);
    return () => window.removeEventListener("resize", updateItems);
  }, []);

  const handleNext = () => {
    const maxIndex = Math.max(0, categories.length - visibleItems);
    setCurrentIndex((prev) => (prev + 2 >= maxIndex ? 0 : prev + 2));
  };

  const handlePrev = () => {
    const maxIndex = Math.max(0, categories.length - visibleItems);
    setCurrentIndex((prev) => (prev - 2 < 0 ? maxIndex : prev - 2));
  };

  const totalWidth = categories.length * (cardWidth + gap); // Ancho total con espacio

  return (
    <div className="bg-white py-4 px-6">
      {/* Barra superior con título y flechas */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-normal">Consiguelo todo aquí</h2>
        <div className="flex space-x-2">
          <button
            onClick={handlePrev}
            className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 focus:outline-none"
            aria-label="Categoría anterior"
          >
            <ChevronLeftIcon className="h-5 w-5 text-gray-600" /> {/* Icono de flecha izquierda */}
          </button>
          <button
            onClick={handleNext}
            className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 focus:outline-none"
            aria-label="Categoría siguiente"
          >
            <ChevronRightIcon className="h-5 w-5 text-gray-600" /> {/* Icono de flecha derecha */}
          </button>
        </div>
      </div>

      {/* Carrusel de categorías con corte limpio */}
      <div className="overflow-hidden">
        <div
          className="relative bg-white"
          style={{ maxWidth: `${visibleItems * (cardWidth + gap)}px` }} // Límite visible
        >
          <div
            className="flex transition-transform duration-300"
            style={{ width: `${totalWidth}px`, transform: `translateX(-${currentIndex * (cardWidth + gap)}px)` }}
          >
            {categories.map((category, index) => (
              <div
                key={category.name}
                className="flex-shrink-0 w-28 text-center"
                style={{ marginRight: `${gap}px` }}
              >
                <div className="w-24 h-24 bg-yellow-100 rounded-lg overflow-hidden border border-gray-200 flex items-center justify-center">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="max-w-full max-h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <p className="mt-2 text-sm font-medium text-gray-800 line-clamp-1">{category.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselCategories;