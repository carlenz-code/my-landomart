// components/layout/CartSidebar.tsx
import { default as CartItemComponent } from "./CartItems"; // Corregimos la importación (CartItems -> CartItem)
import CartSummary from "./CartSummary";
import { XMarkIcon, ShoppingCartIcon } from "@heroicons/react/24/outline"; // Importamos ShoppingCartIcon
import { Product } from "@/data/data";

// Definimos las props del componente
interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: Product[];
  removeItem: (itemId: number) => void;
  updateQuantity: (itemId: number, newQuantity: number) => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({
  isOpen,
  onClose,
  cartItems,
  removeItem,
  updateQuantity,
}) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50"
          onClick={onClose}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center space-x-2">
            <h2 className="text-lg font-normal">Tú carrito de compras</h2>
            <ShoppingCartIcon className="h-4 w-4 text-yellow-500" /> {/* Ícono a la derecha */}
          </div>
          <button onClick={onClose}>
            <XMarkIcon className="h-6 w-6 text-black" />
          </button>
        </div>
        <div className="p-4">
          <p className="text-sm font-light text-yellow-600">
            Usted tiene: {cartItems.length} productos
          </p>
          <div className="mt-4 space-y-4">
            {cartItems.map((item) => (
              <CartItemComponent
                key={item.id}
                item={item}
                onRemove={() => removeItem(item.id)}
                onUpdateQuantity={(newQuantity: number) =>
                  updateQuantity(item.id, newQuantity)
                }
              />
            ))}
          </div>
          <CartSummary
            total={cartItems.reduce(
              (sum, item) => sum + item.priceNow * (item.quantity || 1),
              0
            )}
          />
        </div>
      </div>
    </>
  );
};

export default CartSidebar;