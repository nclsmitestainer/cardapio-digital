import { type CartItem } from "../contexts/UserContext";
import { DeleteOutline, Edit } from "@mui/icons-material";
import Minus from "../assets/minus.svg";
import More from "../assets/more.svg";

interface CartItemProps {
  item: CartItem;
  onEdit: (item: CartItem) => void;
  updateCartItem: (item: Partial<CartItem>) => void;
  removeFromCart: (itemId: number) => void;
}

const CartItem = ({
  item,
  onEdit,
  updateCartItem,
  removeFromCart,
}: CartItemProps) => {
  const handleQuantityChange = (delta: number) => {
    const newQuantity = item.quantity + delta;
    if (newQuantity > 0) {
      updateCartItem({ id: item.id, quantity: newQuantity });
    }
  };

  return (
    <>
      <div className="text-white flex justify-between items-center gap-4 first:mt-3 p-4 border-b border-neutral-600 max-w-xl w-full last:border-none">
        <div className="w-28 h-28 self-center border-[1px] border-red-600 flex-none rounded-md items-center">
          <img
            className="w-28 h-28 p-2 object-cover rounded-md"
            src={`/${item.name}Resultado.webp`}
            alt={item.name}
            loading="lazy"
          />
        </div>

        <div className="flex justify-between w-full">
          <div className="flex flex-col">
            <h3
              title={item.name}
              className="text-lg capitalize font-bold text-ellipsis line-clamp-1"
            >
              {item.name}
            </h3>
            {item.extras.length > 0 && (
              <div className="flex flex-col">
                {item.extras.map((extra) => (
                  <span className="capitalize font-semibold ml-4">
                    {extra.quantity}x {extra.name}
                  </span>
                ))}
              </div>
            )}
            {item.observations && (
              <span
                title={item.observations}
                className="font-semibold break-words max-w-full mt-3 line-clamp-4 text-ellipsis"
              >
                Obs: {item.observations}
              </span>
            )}
          </div>

          <div className="flex flex-col">
            <span className="text-lg font-bold text-right">
              {(item.price * item.quantity).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
            {item.extras.length > 0 && (
              <div className="flex flex-col">
                {item.extras.map((extra) => (
                  <span className="capitalize font-semibold text-right">
                    {(extra.price * extra.quantity).toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </span>
                ))}
              </div>
            )}
            <span className="text-lg font-bold text-right">
              {(
                item.extras.reduce(
                  (acc, extra) => acc + extra.price * extra.quantity,
                  0
                ) +
                item.price * item.quantity
              ).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span>

            <div className="flex items-center gap-2 mt-3">
              <button
                className="p-1 border rounded-md border-[#d32f2f]"
                onClick={() => removeFromCart(item.id)}
              >
                <DeleteOutline color="error" />
              </button>

              <div className="flex items-center justify-between h-10 w-24 min-w-24 rounded-lg border border-[#2c2c30]">
                <button
                  className="h-full flex items-center justify-between p-2 cursor-pointer rounded-tl-lg rounded-bl-lg text-base hover:bg-red-600 transition-all"
                  onClick={() => handleQuantityChange(-1)}
                >
                  <Minus />
                </button>

                <span className="text-base">{item.quantity}</span>

                <button
                  className="h-full flex items-center justify-between p-2 cursor-pointer rounded-tr-lg rounded-br-lg text-base hover:bg-red-600 transition-all"
                  onClick={() => handleQuantityChange(1)}
                >
                  <More />
                </button>
              </div>

              <button
                className="p-1 border rounded-md border-white"
                onClick={() => onEdit(item)}
              >
                <Edit />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
