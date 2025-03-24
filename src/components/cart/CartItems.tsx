// components/layout/CartItem.tsx
import { TrashIcon } from "@heroicons/react/24/outline";
import { Product } from "@/data/data";

// Definimos las props del componente
interface CartItemProps {
  item: Product;
  onRemove: () => void;
  onUpdateQuantity: (newQuantity: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({
  item,
  onRemove,
  onUpdateQuantity,
}) => {
  return (
    <div className="relative flex items-start space-x-4 p-3 rounded-2xl shadow-md bg-white  overflow-hidden">
      {/* Contenedor de la imagen */}
      <div className="w-24 h-24 flex items-center justify-center bg-white  rounded-xl">
        <img
          src={item.image || "/default-product-image.jpg"} // Imagen por defecto si no hay imagen
          alt={item.name}
          className="w-full h-full object-contain p-1" // object-contain para ajustar la imagen
        />
      </div>
      {/* Contenedor del texto y botones */}
      <div className="flex-1 flex flex-col">
        {/* Nombre del producto */}
        <p className="text-xs font-medium text-black line-clamp-2">
          {item.name}
        </p>
        {/* Precios y botones de cantidad en la misma fila */}
        <div className="flex items-center justify-between mt-1">
          {/* Precios uno debajo del otro */}
          <div className="flex flex-col space-y-1">
            {/* Precio actual */}
            <p className="text-xs font-normal text-black">
              S/. {item.priceNow.toFixed(2)}
            </p>
            {/* Precio anterior (en oferta) */}
            {item.priceBefore && (
              <p className="text-xs font-normal text-gray-500 line-through">
                S/. {item.priceBefore.toFixed(2)}
              </p>
            )}
            {/* Precio con premium */}
            {item.landoclubPrice && (
              <p className="text-xs font-normal text-black bg-yellow-100 px-2 py-0.2 rounded-full self-start">
                S/. {item.landoclubPrice.toFixed(2)}
              </p>
            )}
          </div>
          {/* Botones de cantidad */}
          <div className="flex items-center space-x-1">
            {/* Cuadro de cantidad */}
            <div className="w-14 h-14 bg-yellow-400 rounded flex items-center justify-center">
              <span className="text-xl font-medium text-black">
                {item.quantity || 1}
              </span>
            </div>
            {/* Botones + y - alineados verticalmente */}
            <div className="flex flex-col space-y-0.5">
              <button
                className="w-7 h-7 bg-gray-200 rounded flex items-center justify-center text-black text-sm"
                onClick={() => onUpdateQuantity((item.quantity || 1) + 1)}
              >
                +
              </button>
              <button
                className="w-7 h-7 bg-gray-200 rounded flex items-center justify-center text-black text-sm"
                onClick={() => onUpdateQuantity((item.quantity || 1) - 1)}
              >
                −
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Botón de eliminar en la esquina superior derecha */}
      <button className="absolute top-3 right-3" onClick={onRemove}>
        <TrashIcon className="h-4 w-4 text-gray-500 hover:text-red-500" />
      </button>
    </div>
  );
};

export default CartItem;