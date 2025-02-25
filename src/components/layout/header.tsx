"use client";
import SubNavbar from "./SubNavbar";

import { useState } from "react";
import { Bars3BottomLeftIcon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  ShoppingBagIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

const buttonBase = "h-[42px] px-4 rounded-full flex items-center space-x-1";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-yellow-500 border-b shadow-sm">
        <div className="flex items-center justify-between h-[74px] px-9 mx-auto text-base font-medium">

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

          {/* Contenedor de elementos para pantallas pequeñas */}
          <div className="flex items-center w-full lg:hidden space-x-4">
            <div className="h-[42px] w-[42px] ml-3">
              <img
                src="/imagen.png"
                alt="Logo de Landomart"
                className="h-full rounded-full"
              />
            </div>

            <div className="flex-grow min-w-[0] max-w-[calc(100%-72px)]">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Buscar"
                  className="h-[42px] w-full px-3 pr-10 border border-white text-black rounded-full placeholder-black text-sm"
                />
                <MagnifyingGlassIcon className="h-8 w-8 text-white absolute right-3 top-1/2 transform -translate-y-1/2 bg-yellow-500 p-1 rounded-full" />
              </div>
            </div>
          </div>

          {/* Menú de elementos para pantallas grandes */}
          <div className="hidden lg:flex items-center justify-between space-x-4 w-full">
            <div className="h-[42px] w-[42px]">
              <img
                src="/imagen.png"
                alt="Logo de Landomart"
                className="h-full rounded-full"
              />
            </div>

            <div className="flex-grow">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Busca productos en Landomart"
                  className="h-[42px] w-full px-4 pr-12 border border-white text-black rounded-full placeholder-black"
                />
                <MagnifyingGlassIcon className="h-8 w-8 text-white absolute right-3 top-1/2 transform -translate-y-1/2 bg-yellow-500 p-1 rounded-full" />
              </div>
            </div>

            <div className="flex items-center space-x-4">
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

              <button className="h-[42px] pl-3 pr-5 bg-blue-500 text-white rounded-full hover:bg-blue-600 flex items-center space-x-1" aria-label="Iniciar sesión">
                <UserCircleIcon className="h-8 w-8" />
                <div className="flex flex-col text-left">
                  <span className="m-0 leading-[1] text-sm font-light">Iniciar Sesión</span>
                  <span className="text-base m-0 leading-[1]">Cuenta</span>
                </div>
              </button>

              <button className="h-[42px] w-[42px] bg-white rounded-full hover:bg-gray-200 flex items-center justify-center" aria-label="Ver carrito">
                <ShoppingCartIcon className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Menú lateral (pantallas pequeñas) */}
      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-64 h-screen bg-white shadow-lg lg:hidden z-50">
          <div className="flex items-center justify-between px-4 py-4 border-b">
            <span className="font-medium">Menú</span>
            <button onClick={() => setIsMenuOpen(false)}>
              <XMarkIcon className="h-6 w-6 text-black" />
            </button>
          </div>
          <nav className="flex flex-col p-4 space-y-4">
            <button className={`${buttonBase} bg-gray-100 hover:bg-gray-200`} aria-label="Categorías del menú">
              <ChevronDownIcon className="h-6 w-6 text-black" />
              <span>Categorías</span>
            </button>
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
      <SubNavbar />
    </>
  );
};

export default Navbar;
