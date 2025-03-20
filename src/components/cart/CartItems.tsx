// components/layout/CartItem.tsx
import { TrashIcon } from "@heroicons/react/24/outline";
import { Product } from "@/data/data";

// Definimos las props del componente
interface CartItemProps {
  item: Product; // Usamos Product directamente
  onRemove: () => void;
  onUpdateQuantity: (newQuantity: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({
  item,
  onRemove,
  onUpdateQuantity,
}) => {
  return (
    <div className="flex items-center space-x-4 border-b pb-4">
      <img
        src={item.image}
        alt={item.name}
        className="w-20 h-16 object-cover rounded"
      />
      <div className="flex-1">
        <p className="text-sm font-normal">{item.name}</p>
        <p className="text-sm text-gray-600">S/. {item.priceNow.toFixed(2)}</p>
        <div className="flex items-center space-x-2 mt-1">
          <button
            className="h-6 w-6 bg-gray-200 rounded-full flex items-center justify-center"
            onClick={() => onUpdateQuantity((item.quantity || 1) - 1)}
          >
            −
          </button>
          <span>{item.quantity || 1}</span>
          <button
            className="h-6 w-6 bg-yellow-400 rounded-full flex items-center justify-center"
            onClick={() => onUpdateQuantity((item.quantity || 1) + 1)}
          >
            +
          </button>
        </div>
      </div>
      <button onClick={onRemove}>
        <TrashIcon className="h-5 w-5 text-gray-500 hover:text-yellow-600" />
      </button>
    </div>
  );
};

export default CartItem;