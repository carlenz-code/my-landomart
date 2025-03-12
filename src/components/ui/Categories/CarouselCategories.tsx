"use client";

import { useState, useEffect } from "react";
import CarouselHeader from "../CarouselHeader";
import CategoryCard from "./CategoryCard";
import { categories as defaultCategories, Category } from "@/data/data";

interface CarouselCategoriesProps {
  title: string;
  categories?: Category[];
  onViewAll?: () => void;
}

const CarouselCategories = ({
  title,
  categories = defaultCategories,
  onViewAll,
}: CarouselCategoriesProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const cardWidth = 150;
  const gap = 24;

  useEffect(() => {
    const updateItems = () => {
      const containerWidth = window.innerWidth - 48;
      const newVisibleItems = Math.min(
        Math.floor(containerWidth / (cardWidth + gap)),
        categories.length
      );
      setVisibleItems(newVisibleItems);
    };

    updateItems();
    window.addEventListener("resize", updateItems);
    return () => window.removeEventListener("resize", updateItems);
  }, [categories.length]);

  const handleNext = () => {
    const maxIndex = Math.max(0, categories.length - visibleItems);
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
      setTouchStart(null);
    } else if (deltaX < -50) {
      handlePrev();
      setTouchStart(null);
    }
  };

  const handleTouchEnd = () => {
    setTouchStart(null);
  };

  const totalWidth = categories.length * (cardWidth + gap);

  const defaultViewAll = () => {
    console.log("Ver todo clicado (categorías)");
  };

  return (
    <div className="bg-white py-4">
      <CarouselHeader
        title={title}
        onPrev={handlePrev}
        onNext={handleNext}
        onViewAll={onViewAll || defaultViewAll}
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
            marginRight: "auto",
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              width: `${totalWidth}px`,
              transform: `translateX(-${currentIndex * (cardWidth + gap)}px)`,
            }}
          >
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
                style={{ marginRight: `${gap}px` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselCategories;