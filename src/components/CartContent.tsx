import { useState } from "react";
import { useData } from "../contexts/UserContext";
import CartItem from "./CartItem";
import EditItemModal from "./ModalEdit";
import EmptyCart from "../assets/emptycart.svg";

const CartContent = () => {
  const { cart, updateCartItem, removeFromCart } = useData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<CartItem | null>(null);

  const handleEdit = (item: CartItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  return (
    <>
      {cart.length === 0 ? (
        <div className="w-full h-full flex flex-col justify-center items-center">
          <EmptyCart />
          <h2 className="text-white text-xl font-semibold">
            Seu carrinho está vazio.
          </h2>
        </div>
      ) : (
        <div className="items-center h-full flex-col flex flex-wrap">
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onEdit={handleEdit}
              updateCartItem={updateCartItem}
              removeFromCart={removeFromCart}
            />
          ))}
        </div>
      )}

      {isModalOpen && selectedItem && (
        <EditItemModal item={selectedItem} onClose={closeModal} />
      )}
    </>
  );
};

export default CartContent;
