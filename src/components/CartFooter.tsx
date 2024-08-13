import { useData, type CartItem } from "../contexts/UserContext";
import Arrow from "../assets/arrow.svg";
import { West } from "@mui/icons-material";

const CartFooter = () => {
  const { cart } = useData();

  const calculateTotalOrder = (cartItems: CartItem[]): number => {
    return cartItems.reduce((total, item) => {
      const extrasPrice = item.extras.reduce(
        (acc, extra) => acc + extra.price * extra.quantity,
        0
      );
      const itemTotalPrice = (item.price + extrasPrice) * item.quantity;
      return total + itemTotalPrice;
    }, 0);
  };
  const totalOrderPrice = calculateTotalOrder(cart);

  return (
    <footer className="h-28 bg-bg-primary bottom-0 flex justify-between items-center w-full p-5 border-t border-neutral-600">
      <div className="flex items-center gap-2 text-white">
        <h2 className="font-semibold">Subtotal do pedido:</h2>
        <span className="font-medium">
          {totalOrderPrice.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </div>
      <div>
        <button className="flex items-center justify-between gap-2 uppercase text-white font-semibold p-4 bg-red-600 hover:translate-x-2 duration-300 rounded-md">
          Próxima etapa
          <span className="rotate-180">
            <West />
          </span>
        </button>
      </div>
    </footer>
  );
};

export default CartFooter;
