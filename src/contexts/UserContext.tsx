import React from "react";
import type { MenuItem } from "../data/data";
import { Bounce, toast } from "react-toastify";

export interface Extra {
  id: number;
  name: string;
  price: number;
  quantity: number;
}
export interface CartItem extends MenuItem {
  quantity: number;
  extras: Extra[];
  observations?: string;
}

interface IUserContext {
  categoryActive: string;
  setCategoryActive: React.Dispatch<React.SetStateAction<string>>;
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  updateCartItem: (updatedItem: Partial<CartItem>) => void;
}

const UserContext = React.createContext<IUserContext | null>(null);

export const useData = () => {
  const context = React.useContext(UserContext);
  if (!context) throw new Error("useData precisa estar em UserContextProvider");
  return context;
};

export const UserContextProvider = ({ children }: React.PropsWithChildren) => {
  const [categoryActive, setCategoryActive] = React.useState("todas");
  const [cart, setCart] = React.useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(
        (cartItem) =>
          cartItem.id === item.id &&
          JSON.stringify(cartItem.extras) === JSON.stringify(item.extras) &&
          JSON.stringify(cartItem.observations) ===
            JSON.stringify(item.observations)
      );

      if (existingItemIndex >= 0) {
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity += item.quantity;
        return updatedCart;
      } else {
        return [...prevCart, item];
      }
    });
  };

  const updateCartItem = (item: Partial<CartItem>) => {
    setCart((prevCart) =>
      prevCart.map((cartItem) =>
        cartItem.id === item.id ? { ...cartItem, ...item } : cartItem
      )
    );
  };

  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    const iconeMsg = <>😥</>;
    toast.success("Item removido do carrinho!", {
      position: "top-right",
      icon: iconeMsg,
      autoClose: 3500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };

  return (
    <UserContext.Provider
      value={{
        categoryActive,
        setCategoryActive,
        cart,
        addToCart,
        removeFromCart,
        updateCartItem,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
