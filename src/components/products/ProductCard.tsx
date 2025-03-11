import { CSSProperties } from "react";
import { StarIcon, PlusCircleIcon } from "@heroicons/react/24/outline";

interface Product {
  id: number;
  name: string;
  image: string;
  priceNow: number;
  priceBefore?: number; // Opcional, para la variación 2 y 3
  landoclubPrice?: number; // Opcional, para la variación 3
}

interface ProductCardProps {
  product: Product;
  style?: CSSProperties;
}

const ProductCard = ({ product, style }: ProductCardProps) => {
  const containerStyle: CSSProperties = {
    paddingLeft: "9.7px",
    paddingRight: "9.7px",
  };

  // Verificar si la imagen es válida (no vacía y no undefined/null)
  const isImageValid = product.image && product.image.trim() !== "";

  return (
    <div className="flex-shrink-0 w-[185px] h-[271px]" style={style}>
      {/* Contenedor externo con fondo blanco, bordes redondeados y borde gris, con padding lateral de 9.7px */}
      <div
        className="bg-white rounded-2xl border border-gray-200 h-full flex flex-col"
        style={containerStyle}
      >
        {/* Sección de la imagen */}
        <div className="relative w-full h-36 flex items-center justify-center">
          {isImageValid ? (
            <img
              src={product.image}
              alt={product.name}
              className="max-w-full max-h-full object-contain rounded-lg p-2"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-200 rounded-lg">
              <span className="text-xs text-gray-500">Sin imagen</span>
            </div>
          )}
          {/* Icono de estrella en la esquina superior derecha */}
          <button className="absolute top-2 right-2 text-yellow-500 hover:text-yellow-600">
            <StarIcon className="h-5 w-5" />
          </button>
          {/* Botón "Agregar" con icono de + en la esquina inferior izquierda */}
          <button className="absolute bottom-2 left-2 bg-yellow-400 text-black rounded-full p-1 hover:bg-yellow-500 transition-colors flex items-center space-x-1 leading-none">
            <PlusCircleIcon className="h-4 w-4" />
            <span className="text-xs pr-1">Agregar</span>
          </button>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gray-200 mx-2"></div>

        {/* Sección de texto (nombre y precios) */}
        <div className="flex-1 flex flex-col justify-between p-2 text-left" style={{ minHeight: "0" }}>
          {/* Nombre del producto (alineado a la izquierda) */}
          <p className="mt-1 text-[12px] font-medium text-black">{product.name}</p>

          {/* Precios (condicional según las variaciones) */}
          <div className="mt-1 text-[12px]">
            {/* Variación 1: Solo Precio Ahora (si no hay priceBefore ni landoclubPrice) */}
            {(!product.priceBefore && !product.landoclubPrice) && (
              <div className="flex justify-between items-center">
                <span className="text-yellow-500">Precio Ahora:</span>
                <span className="text-yellow-500">S/{product.priceNow.toFixed(2)}</span>
              </div>
            )}

            {/* Variación 2 y 3: Precio Ahora y Precio Antes (si hay priceBefore) */}
            {product.priceBefore && (
              <>
                <div className="flex justify-between items-center">
                  <span className="text-yellow-500">Precio Ahora:</span>
                  <span className="text-yellow-500">S/{product.priceNow.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center mt-0.5">
                  <span className="text-black">Precio Antes:</span>
                  <span className="line-through text-black">S/{product.priceBefore.toFixed(2)}</span>
                </div>
              </>
            )}

            {/* Variación 3: Añadir Landoclub (si está definido) */}
            {product.landoclubPrice && (
              <div className="flex justify-between items-center mt-0.5">
                <span className="text-yellow-500">Landoclub:</span>
                <span className="text-yellow-500">S/{product.landoclubPrice.toFixed(2)}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;