// data/data.ts
export interface Category {
  id: number;
  name: string;
  subcategories: string[];
  image: string;
}

export interface Product {
  id: number;
  name: string;
  image: string;
  priceNow: number;
  priceBefore?: number;
  landoclubPrice?: number;
  quantity?: number; // Aseguramos que quantity sea opcional
}

export const categories: Category[] = [
  { id: 1, name: "Embutidos", subcategories: ["Refrescos", "Jugos"], image: "/categories/embutidos.png" },
  { id: 2, name: "Bebidas", subcategories: ["Leches", "Yogures"], image: "/categories/bebidas.png" },
  { id: 3, name: "Frutas", subcategories: ["Jamón", "Salchichas"], image: "/categories/frutas.png" },
  { id: 4, name: "Lacteos", subcategories: ["Tomates", "Zanahorias"], image: "/categories/lacteos.png" },
  { id: 5, name: "Limpieza", subcategories: ["Manzanas", "Bananas"], image: "/categories/limpieza.png" },
  { id: 6, name: "Panadería & Pastelería", subcategories: ["Pan", "Pasteles"], image: "/categories/panaderia.png" },
  { id: 7, name: "Verduras", subcategories: ["Comida", "Juguetes"], image: "/categories/verduras.png" },
];

export const products: Product[] = [
  { id: 1, name: "Yogurt Mirafloresabor Sabor a Fresa de lucuma Producto 2.5kb", image: "/products/danlac.webp", priceNow: 10.0, priceBefore: undefined, landoclubPrice: undefined },
  { id: 2, name: "Yogurt Mirafloresabor Fresa 2.5kb", image: "/products/gloria.webp", priceNow: 8.99, priceBefore: 10.0, landoclubPrice: undefined },
  { id: 3, name: "Yogurt Mirafloresabor Fresa 2.5kb", image: "/products/griego.webp", priceNow: 10.0, priceBefore: 12.0, landoclubPrice: 6.90 },
  { id: 4, name: "Yogurt Mirafloresabor Fresa 2.5kb", image: "/products/guanabana.webp", priceNow: 8.99, priceBefore: 10.0, landoclubPrice: undefined },
  { id: 5, name: "Yogurt Mirafloresabor Fresa 2.5kb", image: "products/vakimu.webp", priceNow: 10.0, priceBefore: undefined, landoclubPrice: undefined },
  { id: 6, name: "Yogurt Mirafloresabor Fresa 2.5kb", image: "products/zeus.jpg", priceNow: 10.0, priceBefore: 12.0, landoclubPrice: 7.00 },
  { id: 7, name: "Yogurt Mirafloresabor Fresa 2.5kb", image: "", priceNow: 10.0, priceBefore: 12.0, landoclubPrice: 7.00 },
  { id: 8, name: "Yogurt Mirafloresabor Fresa 2.5kb", image: "", priceNow: 10.0, priceBefore: undefined, landoclubPrice: undefined },
  { id: 9, name: "Yogurt Mirafloresabor Fresa 2.5kb", image: "", priceNow: 10.0, priceBefore: 12.0, landoclubPrice: 7.00 },
  { id: 11, name: "Yogurt Mirafloresabor Fresa 2.5kb", image: "", priceNow: 10.0, priceBefore: 12.0, landoclubPrice: 7.00 },
  { id: 10, name: "Yogurt Mirafloresabor Fresa 2.5kb", image: "", priceNow: 10.0, priceBefore: 12.0, landoclubPrice: 7.00 },
];