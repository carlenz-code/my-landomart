// components/layout/Navbar.tsx
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
import CartSidebar from "../cart/CartSidebar";
import { Product } from "@/data/data";

// Definimos la interfaz para las categorías
interface Category {
  id: number;
  name: string;
  subcategories: string[];
  image: string;
}

// Definimos las props del componente Navbar
interface HeaderProps {
  categories: Category[];
}

const buttonBase = "h-[42px] px-4 rounded-full flex items-center space-x-1";

const Navbar: React.FC<HeaderProps> = ({ categories }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isCartSidebarOpen, setIsCartSidebarOpen] = useState<boolean>(false);

  // Estado para el carrito
  const [cartItems, setCartItems] = useState<Product[]>([
    {
      id: 1,
      name: "Yogurt Gloria Griego Frutos Rojos Botella 950g",
      image: "/products/danlac.webp",
      priceNow: 5.40,
      quantity: 1, // Esto debería ser válido porque quantity es opcional en Product
    },
    {
      id: 2,
      name: "Yogurt Gloria Griego Frutos Rojos Botella 950g",
      image: "/products/danlac.webp",
      priceNow: 5.40,
      quantity: 1,
    },
  ]);

  const toggleCartSidebar = () => {
    setIsCartSidebarOpen(!isCartSidebarOpen);
  };

  // Función para eliminar un producto del carrito
  const removeItem = (itemId: number) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  // Función para actualizar la cantidad de un producto
  const updateQuantity = (itemId: number, newQuantity: number) => {
    if (newQuantity < 1) {
      removeItem(itemId);
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === itemId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  return (
    <>
      {/* Header fijo */}
      <header className="bg-yellow-400 border-b shadow-sm w-full fixed left-0 top-0 z-50">
        <div className="flex h-[74px] justify-between text-base w-full font-medium items-center px-6">
          {/* Menú móvil */}
          <button
            className="flex items-center lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMenuOpen ? (
              <XMarkIcon className="h-8 text-black w-8" />
            ) : (
              <Bars3BottomLeftIcon className="h-8 text-white w-8" />
            )}
          </button>

          {/* Contenedor común para logo, buscador y elementos */}
          <div className="flex w-full items-center lg:space-x-4 space-x-2">
            <Link href="/">
              <div className="h-[42px] w-[42px] lg:ml-0 ml-1">
                <img
                  src="/imagen.png"
                  alt="Logo de Landomart"
                  className="h-full rounded-full w-full object-cover"
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
                  className="border border-white h-[42px] rounded-full text-black text-sm w-full lg:text-base placeholder-black pr-12 px-4"
                />
                <MagnifyingGlassIcon
                  className="bg-yellow-500 h-6 p-1 rounded-full text-white w-6 -translate-y-1/2 absolute cursor-pointer lg:h-8 lg:w-8 right-3 top-1/2 transform"
                  onClick={() => console.log("Buscar:", searchTerm)}
                />
              </div>
            </div>
            {/* Botones para pantallas grandes */}
            <div className="hidden items-center lg:flex space-x-4">
              <button className={`${buttonBase} bg-white hover:bg-gray-200`} aria-label="Categorías">
                <span className="mr-1">Categorías</span>
                <ChevronDownIcon className="h-6 text-black w-6" />
              </button>
              <button className={`${buttonBase} group bg-white hover:bg-gray-200`} aria-label="Mis Canastas">
                <ShoppingBagIcon className="h-8 text-black w-8 pb-1" />
                <div className="flex flex-col text-black text-left">
                  <span className="m-0 text-sm font-light leading-[1]">Listas</span>
                  <span className="m-0 text-base leading-[1]">Mis Canastas</span>
                </div>
              </button>
              <button
                className="flex bg-yellow-100 h-[42px] rounded-full text-orange-400 hover:bg-blue-600 items-center pl-3 pr-5 space-x-1"
                aria-label="Iniciar sesión"
              >
                <UserCircleIcon className="h-8 w-8" />
                <div className="flex flex-col text-left">
                  <span className="m-0 text-sm font-light leading-[1]">Iniciar Sesión</span>
                  <span className="m-0 text-base leading-[1]">Cuenta</span>
                </div>
              </button>
            </div>
            {/* Carrito común */}
            <button
              className="flex bg-white h-[42px] justify-center rounded-full w-[42px] hover:bg-gray-200 items-center relative"
              aria-label="Ver carrito"
              onClick={toggleCartSidebar}
            >
              <ShoppingCartIcon className="h-6 w-6" />
              <span className="flex bg-red-500 h-4 justify-center rounded-full text-white text-xs w-4 absolute items-center right-0 top-0">
                {cartItems.length}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Menú lateral (móviles/tabletas) */}
      {isMenuOpen && (
        <div className="bg-white h-screen shadow-lg w-64 absolute left-0 lg:hidden top-0 z-50">
          <div className="flex border-b justify-between items-center px-4 py-4">
            <span className="font-medium">Menú</span>
            <button onClick={() => setIsMenuOpen(false)}>
              <XMarkIcon className="h-6 text-black w-6" />
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
                <ul className="mt-2 pl-4 space-y-2">
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
              <ShoppingBagIcon className="h-6 text-black w-6" />
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

      {/* Sidebar del carrito */}
      <CartSidebar
        isOpen={isCartSidebarOpen}
        onClose={toggleCartSidebar}
        cartItems={cartItems}
        removeItem={removeItem}
        updateQuantity={updateQuantity}
      />

      {/* SubNavbar fijo y oculto en pantallas pequeñas y tabletas hasta 1023px */}
      <div className="bg-yellow-50 w-full fixed hidden left-0 lg:block top-[74px] z-40">
        <SubNavbar categories={categories} />
      </div>

      {/* Espacio para evitar que el contenido se superponga con el header y SubNavbar */}
      <div className="lg:mt-[134px] mt-[90px]"></div>
    </>
  );
};

export default Navbar;