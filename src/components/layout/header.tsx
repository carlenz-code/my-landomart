"use client";

import SubNavbar from "./SubNavbar";
import Link from "next/link";
import { useState } from "react";
import {
  Bars3BottomLeftIcon,
  XMarkIcon,
  ChevronDownIcon,
  ShoppingBagIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

const buttonBase = "h-[42px] px-4 rounded-full flex items-center space-x-1";

interface HeaderProps {
  categories: { name: string; subcategories: string[] }[];
}

const Navbar = ({ categories }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <header className="bg-yellow-400 border-b shadow-sm">
        <div className="flex items-center justify-between h-[74px] px-6 text-base font-medium w-full">
          {/* Menú móvil */}
          <button
            className="flex items-center lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMenuOpen ? (
              <XMarkIcon className="h-8 w-8 text-black" />
            ) : (
              <Bars3BottomLeftIcon className="h-8 w-8 text-white" />
            )}
          </button>

          {/* Contenedor común para logo, buscador y elementos */}
          <div className="flex items-center w-full space-x-2 lg:space-x-4">
            <Link href="/">
              <div className="h-[42px] w-[42px] lg:ml-0 ml-1">
                <img
                  src="/imagen.png"
                  alt="Logo de Landomart"
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
            </Link>
            <div className="flex-grow lg:max-w-full max-w-[calc(100%-108px)]">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Busca productos en Landomart"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="h-[42px] w-full px-4 pr-12 border border-white text-black rounded-full placeholder-black lg:text-base text-sm"
                />
                <MagnifyingGlassIcon
                  className="lg:h-8 lg:w-8 h-6 w-6 text-white absolute right-3 top-1/2 transform -translate-y-1/2 bg-yellow-500 p-1 rounded-full cursor-pointer"
                  onClick={() => console.log("Buscar:", searchTerm)}
                />
              </div>
            </div>
            {/* Botones para pantallas grandes */}
            <div className="hidden lg:flex items-center space-x-4">
              <button className={`${buttonBase} bg-white hover:bg-gray-200`} aria-label="Categorías">
                <span className="mr-1">Categorías</span>
                <ChevronDownIcon className="h-6 w-6 text-black" />
              </button>
              <button className={`${buttonBase} group bg-white hover:bg-gray-200`} aria-label="Mis Canastas">
                <ShoppingBagIcon className="pb-1 h-8 w-8 text-black" />
                <div className="flex flex-col text-left text-black">
                  <span className="m-0 leading-[1] text-sm font-light">Listas</span>
                  <span className="text-base m-0 leading-[1]">Mis Canastas</span>
                </div>
              </button>
              <button
                className="h-[42px] pl-3 pr-5 bg-yellow-600 text-white rounded-full hover:bg-blue-600 flex items-center space-x-1"
                aria-label="Iniciar sesión"
              >
                <UserCircleIcon className="h-8 w-8" />
                <div className="flex flex-col text-left">
                  <span className="m-0 leading-[1] text-sm font-light">Iniciar Sesión</span>
                  <span className="text-base m-0 leading-[1]">Cuenta</span>
                </div>
              </button>
            </div>
            {/* Carrito común */}
            <button
              className="relative h-[42px] w-[42px] bg-white rounded-full hover:bg-gray-200 flex items-center justify-center"
              aria-label="Ver carrito"
            >
              <ShoppingCartIcon className="h-6 w-6" />
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                3
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Menú lateral (móviles/tablets) */}
      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-64 h-screen bg-white shadow-lg lg:hidden z-50">
          <div className="flex items-center justify-between px-4 py-4 border-b">
            <span className="font-medium">Menú</span>
            <button onClick={() => setIsMenuOpen(false)}>
              <XMarkIcon className="h-6 w-6 text-black" />
            </button>
          </div>
          <nav className="flex flex-col p-4 space-y-4">
            <div>
              <button
                className={`${buttonBase} bg-gray-100 hover:bg-gray-200 w-full justify-between`}
                onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                aria-label="Categorías del menú"
              >
                <span>Categorías</span>
                <ChevronDownIcon className={`h-6 w-6 text-black ${isCategoriesOpen ? "rotate-180" : ""}`} />
              </button>
              {isCategoriesOpen && (
                <ul className="mt-2 space-y-2 pl-4">
                  {categories.map((category) => (
                    <li key={category.name} className="text-sm">
                      <details>
                        <summary className="cursor-pointer hover:text-blue-500">{category.name}</summary>
                        <ul className="pl-4 space-y-1">
                          {category.subcategories.map((subcategory) => (
                            <li key={subcategory} className="text-sm hover:text-blue-500">
                              {subcategory}
                            </li>
                          ))}
                        </ul>
                      </details>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <button className={`${buttonBase} bg-gray-100 hover:bg-gray-200`} aria-label="Mis Canastas del menú">
              <ShoppingBagIcon className="h-6 w-6 text-black" />
              <span>Mis Canastas</span>
            </button>
            <button
              className={`${buttonBase} bg-blue-500 text-white hover:bg-blue-600`}
              aria-label="Iniciar sesión del menú"
            >
              <UserCircleIcon className="h-6 w-6" />
              <span>Iniciar Sesión</span>
            </button>
          </nav>
        </div>
      )}

      {/* SubNavbar solo en desktop */}
      <div className="lg:block hidden">
        <SubNavbar categories={categories} />
      </div>
    </>
  );
};

export default Navbar;