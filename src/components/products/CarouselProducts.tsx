"use client";

import { useState, useEffect } from "react";
import CarouselHeader from "../ui/CarouselHeader";
import ProductCard from "./ProductCard";
import { products as defaultProducts, Product } from "@/data/data"; // Importamos los productos y el tipo

interface CarouselProductsProps {
  title: string;
  products?: Product[];
  onViewAll?: () => void; // Mantengo la prop opcional por si el usuario quiere personalizarla
}

const CarouselProducts = ({ title, products = defaultProducts, onViewAll }: CarouselProductsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null); // Posición inicial del toque
  const cardWidth = 185; // Ancho fijo de ProductCard
  const gap = 24; // Espaciado entre cards

  useEffect(() => {
    const updateItems = () => {
      const containerWidth = window.innerWidth - 48; // Restamos el padding total (24px izquierda + 24px derecha del RootLayout)
      const newVisibleItems = Math.min(
        Math.floor(containerWidth / (cardWidth + gap)),
        products.length
      );
      setVisibleItems(newVisibleItems);
    };

    updateItems();
    window.addEventListener("resize", updateItems);
    return () => window.removeEventListener("resize", updateItems);
  }, [products.length]);

  const handleNext = () => {
    const maxIndex = Math.max(0, products.length - visibleItems);
    setCurrentIndex((prev) => (prev + 1 >= maxIndex ? maxIndex : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 < 0 ? 0 : prev - 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStart === null) return;

    const touchEnd = e.touches[0].clientX;
    const deltaX = touchStart - touchEnd;

    if (deltaX > 50) {
      handleNext();
      setTouchStart(null); // Reiniciamos después de mover
    } else if (deltaX < -50) {
      handlePrev();
      setTouchStart(null); // Reiniciamos después de mover
    }
  };

  const handleTouchEnd = () => {
    setTouchStart(null); // Reiniciamos al soltar
  };

  const totalWidth = products.length * (cardWidth + gap);

  const defaultViewAll = () => {
    console.log("Ver todo clicado (acción por defecto)"); // Acción por defecto
  };

  return (
    <div className="bg-white py-4"> {/* Sin px-6, ya está manejado por el RootLayout */}
      <CarouselHeader
        title={title}
        onPrev={handlePrev}
        onNext={handleNext}
        onViewAll={onViewAll || defaultViewAll} // Usa la prop si existe, sino la acción por defecto
      />
      <div
        className="overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="relative"
          style={{
            maxWidth: `${visibleItems * (cardWidth + gap)}px`,
            marginRight: "auto", // Mantengo como lo tenías
            width: "100%", // Asegura que ocupe el ancho completo antes de centrar
            boxSizing: "border-box", // Incluye padding y borde en el cálculo del ancho
          }}
        >
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ width: `${totalWidth}px`, transform: `translateX(-${currentIndex * (cardWidth + gap)}px)` }}
          >
            {products.map((product) => (
              <ProductCard key={product.id} product={product} style={{ marginRight: `${gap}px` }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselProducts;