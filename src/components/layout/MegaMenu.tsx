"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import useClickOutside from "@/hooks/useClickOutside";

interface MegaMenuProps {
  categories: { name: string; subcategories: string[] }[];
}

const MegaMenu = ({ categories }: MegaMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const menuRef = useClickOutside(() => setIsOpen(false));

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="h-[27px] bg-gray-200 text-black rounded-full flex items-center 
        px-2 space-x-1 border border-transparent hover:bg-black hover:text-white"
        aria-label="Categorías del mega menú"
      >
        <span className="text-base">Categorías</span>
        <ChevronDownIcon className="w-3 h-3" />
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full mt-5 w-[800px] bg-white shadow-lg 
        rounded-lg flex border border-gray-200 z-50">
          {/* Columna de Categorías */}
          <div className="w-1/3 max-h-[400px] overflow-y-auto border-r border-gray-200 p-4">
            <h3 className="font-medium text-lg mb-4 pl-1">Todas las categorías</h3>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li
                  key={category.name}
                  className={`p-2 hover:bg-yellow-100 cursor-pointer rounded ${
                    hoveredCategory === category.name ? "bg-gray-100" : ""
                  }`}
                  onMouseEnter={() => setHoveredCategory(category.name)}
                >
                  {category.name}
                </li>
              ))}
            </ul>
          </div>
          {/* Columna de Subcategorías */}
          <div className="w-2/3 max-h-[400px] overflow-y-auto p-4 bg-yellow-50">
            {hoveredCategory ? (
              <div className="grid grid-cols-3 gap-4">
                {categories
                  .find((category) => category.name === hoveredCategory)
                  ?.subcategories.map((subcategory) => (
                    <div key={subcategory} className="py-1 hover:text-blue-500">
                      {subcategory}
                    </div>
                  ))}
              </div>
            ) : (
              <p className="text-gray-400">Selecciona una categoría</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MegaMenu;