// components/layout/CartSummary.tsx
interface CartSummaryProps {
  total: number;
}

const CartSummary: React.FC<CartSummaryProps> = ({ total }) => {
  return (
    <div className="mt-6">
      <p className="text-sm text-green-600">Envío: GRATIS</p>
      <div className="flex justify-between items-center mt-2">
        <span className="text-lg font-medium">Total:</span>
        <span className="text-lg font-medium">S/. {total.toFixed(2)}</span>
      </div>
      <button className="w-full mt-4 bg-yellow-400 text-black py-2 rounded-full hover:bg-yellow-500">
        Ver carrito
      </button>
      <button className="w-full mt-2 bg-gray-200 text-black py-2 rounded-full hover:bg-gray-300">
        Comprar ahora
      </button>
    </div>
  );
};

export default CartSummary;