// components/layout/CartSidebar.tsx
import { default as CartItemComponent } from "./CartItems";
import CartSummary from "./CartSummary";
import { XMarkIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useCart } from "@/components/cart/CartContext"; // Importamos el hook del contexto
import { useEffect } from "react";

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose }) => {
  const { cartItems, removeItem, updateQuantity } = useCart(); // Usamos el contexto

  // Deshabilitar el scroll de la página cuando el carrito está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

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
        className={`fixed top-0 right-0 h-full w-96 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Contenedor principal con flex para manejar el layout */}
        <div className="flex flex-col h-full">
          {/* Header del sidebar */}
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center space-x-2">
              {/* Botón amarillo con ícono */}
              <button className="flex items-center bg-yellow-400 shadow-md text-black px-1 py-1 rounded-full">
                <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
                  <ShoppingCartIcon className="h-4 w-4 text-black" />
                </div>
              </button>
              {/* Texto "Carrito de Compras" */}
              <div className="flex items-center px-3 py-2 bg-yellow-50 shadow-md text-black rounded-full">
                <span className="text-sm font-normal">Carrito de Compras</span>
              </div>
            </div>
            {/* Botón de cerrar */}
            <button onClick={onClose}>
              <XMarkIcon className="h-6 w-6 text-black" />
            </button>
          </div>

          {/* Contenedor de productos con scroll */}
          <div className="flex-1 p-4 overflow-y-auto">
            <p className="text-sm font-medium text-black">
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
          </div>

          {/* Footer del sidebar (CartSummary) */}
          <div className="p-4 border-t">
            <CartSummary
              total={cartItems.reduce(
                (sum, item) => sum + item.priceNow * (item.quantity || 1),
                0
              )}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CartSidebar;