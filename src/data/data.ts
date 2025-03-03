// data.ts
export interface Category {
  name: string;
  subcategories: string[];
  image: string; // Añadimos el campo para la imagen
}

export const categories: Category[] = [
  { name: "Bebidas", subcategories: ["Refrescos", "Jugos"], image: "/donofrio.jpg" },
  { name: "Lácteos", subcategories: ["Leches", "Yogures"], image: "/imagen.png" },
  { name: "Embutidos", subcategories: ["Jamón", "Salchichas"], image: "/papel.png" },
  { name: "Verduras", subcategories: ["Tomates", "Zanahorias"], image: "/cereal.png" },
  { name: "Frutas", subcategories: ["Manzanas", "Bananas"], image: "/frutas.jpg" },
  { name: "Panadería & Pastelería", subcategories: ["Pan", "Pasteles"], image: "/panaderia.jpg" },
  { name: "Mascotas", subcategories: ["Comida", "Juguetes"], image: "/mascotas.jpg" },
  { name: "Limpieza", subcategories: ["Detergentes", "Limpiavidrios"], image: "/cerealplatano.png" },
  { name: "xd", subcategories: ["dx", "dx1"], image: "/panaderia.jpg" },
  { name: "xd1", subcategories: ["dx3", "dx4"], image: "/mascotas.jpg" },
  { name: "xd2", subcategories: ["dx5", "dx6"], image: "/cerealplatano.png" },
];