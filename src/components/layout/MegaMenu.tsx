"use client";

import { useState, useRef, useEffect } from "react";

import { ChevronDownIcon } from "@heroicons/react/24/outline";
const MegaMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Cerrar el menú al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const categories = [
    {
      name: "Electrónica",
      subcategories: [
        "Smartphones", "Laptops", "Cámaras", "Tablets", "Accesorios", "Audio", "Drones",
        "TVs", "Wearables", "Consolas", "Gaming", "Impresoras", "Auriculares",
        "Altavoces", "Proyectores", "Smart Home", "Monitores", "Cargadores",
      ],
    },
    {
      name: "Hogar",
      subcategories: [
        "Muebles", "Decoración", "Electrodomésticos", "Iluminación", "Cocina", "Baño",
        "Dormitorio", "Jardín", "Almacenamiento", "Seguridad", "Textiles", "Cortinas",
        "Vajilla", "Limpieza", "Aspiradoras", "Climatización", "Herramientas"
      ],
    },
    {
      name: "Moda",
      subcategories: [
        "Ropa", "Zapatos", "Accesorios", "Bolsos", "Relojes", "Sombreros",
        "Lentes de Sol", "Joyas", "Trajes", "Deportiva", "Invierno", "Verano",
        "Vestidos", "Camisetas", "Jeans", "Pijamas", "Calcetines"
      ],
    },
    {
      name: "Juguetes",
      subcategories: [
        "Muñecas", "Juegos de Mesa", "Peluches", "Lego", "Juegos Electrónicos",
        "Educativos", "Vehículos a Control", "Puzzles", "Arte", "Rompecabezas",
        "Figuras de Acción", "Instrumentos Musicales", "Juegos de Construcción",
        "Disfraces", "Kits Científicos", "Juegos de Agua", "Pelotas"
      ],
    },
    {
      name: "Deportes",
      subcategories: [
        "Fútbol", "Natación", "Ciclismo", "Gimnasio", "Yoga", "Caminata", "Camping",
        "Tenis", "Basketball", "Voleibol", "Boxeo", "Patinaje", "Esquí",
        "Pesca", "Surf", "Artes Marciales", "Escalada", "Running"
      ],
    },
    {
      name: "Libros",
      subcategories: [
        "Ficción", "No Ficción", "Manga", "Biografías", "Historia", "Ciencia",
        "Tecnología", "Niños", "Arte", "Cocina", "Viajes", "Autoayuda",
        "Psicología", "Poesía", "Novelas Gráficas", "Política", "Religión", "Deportes"
      ],
    },
    {
      name: "Tecnología",
      subcategories: [
        "Componentes", "Monitores", "Accesorios PC", "Almacenamiento", "Servidores",
        "Routers", "Impresoras", "Periféricos", "Sillas Gaming", "Teclados",
        "Ratones", "Software", "Cámaras Web", "Micrófonos", "Fuentes de Poder",
        "Tarjetas Gráficas", "Procesadores", "Memorias RAM"
      ],
    },
    {
      name: "Salud",
      subcategories: [
        "Vitaminas", "Fitness", "Equipo Médico", "Cuidado Personal", "Masajeadores",
        "Suplementos", "Cuidado Piel", "Cosmética", "Ortodoncia", "Cabello",
        "Perfumes", "Antialérgicos", "Lentes de Contacto", "Termómetros",
        "Presión Arterial", "Nutrición Deportiva", "Fajas", "Protección Solar"
      ],
    },
    {
      name: "Automóviles",
      subcategories: [
        "Llantas", "Accesorios", "Herramientas", "Audio Vehículos", "GPS",
        "Iluminación", "Baterías", "Repuestos", "Cuidado Externo", "Aceites",
        "Frenos", "Suspensión", "Tapicería", "Cristales", "Alarmas",
        "Racks de Techo", "Refrigerantes", "Filtros"
      ],
    },
  ];

  return (

    <div className="relative" ref={menuRef}>
      
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="h-[27px] bg-white text-black rounded-full flex items-center px-2 space-x-1 border border-transparent hover:bg-yellow-500 hover:text-black"
        aria-label="Categorías del mega menú"
      >

        <span className="text-b ase">Categorías</span>
        <ChevronDownIcon className=" w-4 h-4" /> {/* Tamaño del icono ajustado */}
      </button>


      {isOpen && (
        <div className="absolute left-0 top-full mt-5 w-[800px] bg-white shadow-lg rounded-lg flex border border-gray-200 z-50">
          {/* Columna de Categorías */}
          <div className="w-1/3 max-h-[400px] overflow-y-auto border-r border-gray-200 p-4">
            <h3 className="font-medium text-lg mb-4 pl-1">Todas las categorías</h3>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li
                  key={category.name}
                  className={`p-2 hover:bg-yellow-100 cursor-pointer rounded ${hoveredCategory === category.name ? "bg-gray-100" : ""
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
