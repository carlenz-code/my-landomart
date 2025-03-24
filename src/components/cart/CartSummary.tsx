// components/layout/CartSummary.tsx
interface CartSummaryProps {
  total: number;
}

const CartSummary: React.FC<CartSummaryProps> = ({ total }) => {
  return (
    <div className="mt-4 px-1">
      {/* Subtotal */}
      <div className="flex justify-between items-center">
        <span className="text-sm font-normal text-black">Subtotal:</span>
        <span className="text-sm font-normal text-black">
          S/. {total.toFixed(2)}
        </span>
      </div>
      {/* Envío */}
      <div className="flex justify-between items-center mt-1">
        <span className="text-sm font-normal text-black">Envio:</span>
        <span className="text-sm font-normal text-black">Gratis</span>
      </div>
      {/* Total */}
      <div className="flex justify-between items-center mt-1">
        <span className="text-sm font-bold text-black">TOTAL:</span>
        <span className="text-sm font-bold text-black">
          S/. {total.toFixed(2)}
        </span>
      </div>
      {/* Texto adicional */}
      <p className="text-xs text-gray-500 mt-2">
        Gastos de envío e impuestos calculados al finalizar la compra
      </p>
       {/* Botones */}
       <div className="flex space-x-2 mt-4">
        <button className="flex-1 bg-yellow-50 text-black py-2 rounded-md hover:bg-gray-200">
          Ver carrito
        </button>
        <button className="flex-1 bg-yellow-400 text-black py-2 rounded-md hover:bg-yellow-500">
          Comprar ahora
        </button>
      </div>
    </div>
  );
};

export default CartSummary;