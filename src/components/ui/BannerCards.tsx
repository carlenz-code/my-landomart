"use client";

import { useState } from "react";

// Datos estáticos temporales (reemplazable por props del backend)
const bannerData = [
  { id: 1, image: "/papel.png	", alt: "Oferta 4x3 en Popcorn" },
  { id: 2, image: "/papel.png", alt: "Oferta 4x3 en Popcorn" },
  { id: 3, image: "/papel.png", alt: "Oferta 4x3 en Popcorn" },
];

interface Banner {
  id: number;
  image: string;
  alt: string;
}

interface BannerCardsProps {
  banners?: Banner[]; // Opcional, para recibir datos del backend
}

const BannerCards = ({ banners = bannerData }: BannerCardsProps) => {
  return (
    <div className="bg-white py-6 ">
      <div className="w-full">
        {/* Contenedor para móviles: desplazamiento horizontal */}
        <div className="overflow-x-auto scrollbar-hide md:hidden">
          <div className="flex space-x-6">
            {banners.map((banner) => (
              <div
                key={banner.id}
                className="flex-shrink-0 w-80 h-48 bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={banner.image}
                  alt={banner.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
        {/* Contenedor para tablets y desktops: grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {banners.map((banner) => (
            <div
              key={banner.id}
              className="w-full h-48 bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={banner.image}
                alt={banner.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BannerCards;