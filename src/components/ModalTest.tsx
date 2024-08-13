import { useCallback, useEffect, useState } from "react";
import { Bounce, toast } from "react-toastify";
import menu, { MenuItem } from "../data/data";
import Minus from "../assets/minus.svg";
import More from "../assets/more.svg";
import { useData, type Extra } from "../contexts/UserContext";

interface ModalProps {
  item: MenuItem;
  onClose: () => void;
}

const ModalTest = ({ item, onClose }: ModalProps) => {
  const { addToCart } = useData();
  const [extras, setExtras] = useState<Extra[]>([]);
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(item.price);
  const [observations, setObservations] = useState("");

  const handleAddExtra = (extra: MenuItem) => {
    setExtras((prevExtras) => {
      const totalExtras = prevExtras.reduce((acc, e) => acc + e.quantity, 0);
      if (totalExtras >= 5) {
        toast.error("Você atingiu o limite máximo de 5 acréscimos.", {
          position: "top-right",
          autoClose: 3500,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
        return prevExtras;
      }

      const existingExtraIndex = prevExtras.findIndex((e) => e.id === extra.id);
      if (existingExtraIndex >= 0) {
        const updatedExtras = [...prevExtras];
        updatedExtras[existingExtraIndex].quantity += 1;
        return updatedExtras;
      } else {
        return [...prevExtras, { ...extra, quantity: 1 }];
      }
    });
  };

  const handleRemoveExtra = (extraId: number) => {
    setExtras((prevExtras) => {
      const existingExtraIndex = prevExtras.findIndex((e) => e.id === extraId);
      if (existingExtraIndex >= 0) {
        const updatedExtras = [...prevExtras];
        if (updatedExtras[existingExtraIndex].quantity > 1) {
          updatedExtras[existingExtraIndex].quantity -= 1;
        } else {
          updatedExtras.splice(existingExtraIndex, 1);
        }
        return updatedExtras;
      }
      return prevExtras;
    });
  };

  const calculateTotalPrice = useCallback(() => {
    const extrasPrice = extras.reduce(
      (acc, extra) => acc + extra.price * extra.quantity,
      0
    );
    return (item.price + extrasPrice) * quantity;
  }, [extras, quantity, item.price]);

  useEffect(() => {
    setTotalPrice(calculateTotalPrice());
  }, [extras, quantity, calculateTotalPrice]);

  const handleQuantityChange = (delta: number) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  const handleAddToCart = () => {
    const itemToAdd = {
      id: item.id,
      name: item.name,
      price: item.price,
      description: item.description,
      quantity: quantity,
      extras: extras,
      observations: observations,
    };
    addToCart(itemToAdd);
    onClose();
    const messageIcon = <>😋</>;
    toast.success("Item adicionado ao carrinho!", {
      position: "top-right",
      icon: messageIcon,
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
    <>
      <div
        className="fixed inset-0 bg-[#000000b0] bg-opacity-75 flex items-center justify-center"
        onClick={(e) => (e.target === e.currentTarget ? onClose() : "")}
      >
        <div className="bg-[#222325] rounded w-[95vw] h-[95vh] overflow-x-hidden overflow-y-auto">
          <div className="flex justify-between items-center p-7 text-white bg-[#222325] w-full sticky top-0 z-10">
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold capitalize">{item.name}</h3>
              <span className="uppercase font-bold text-xs mb-2 text-[#6d6d6da6]">
                hamburguer
              </span>
            </div>
            <button
              className="py-3 px-4 bg-red-500 transition-all hover:bg-red-800"
              onClick={onClose}
            >
              X
            </button>
          </div>

          <div className="flex flex-col text-white p-7">
            <div className="flex flex-col gap-3 mb-5">
              <div className="w-60 h-60 self-center border-[1px] border-red-600 flex-none rounded-md mb-5">
                <img
                  className="w-60 h-60 p-2 object-cover rounded-md"
                  src={`/${item.name}Resultado.webp`}
                  loading="lazy"
                />
              </div>
              <span className="capitalize text-sm text-center">
                {item.description}
              </span>
            </div>

            <div>
              <div className="flex justify-between items-center bg-neutral-700 p-4">
                <span>Acréscimos (máx 5)</span>
                <span className="bg-green-700 uppercase text-xs p-2 rounded-md">
                  opcional
                </span>
              </div>
              <ul>
                {menu.acrescimos.map((acrescimo) => {
                  const extraQuantity =
                    extras.find((extra) => extra.id === acrescimo.id)
                      ?.quantity || 0;
                  return (
                    <li
                      className="flex items-center justify-between p-3 border-b-2 border-neutral-700 last:border-none"
                      key={acrescimo.id}
                    >
                      <div className="flex justify-between w-full">
                        <span className="capitalize text-base">
                          {acrescimo.name}
                        </span>
                        <span className="p-2 text-xs mr-4 bg-green-900 rounded-md">
                          +&nbsp;
                          {acrescimo.price.toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                          })}
                        </span>
                      </div>
                      <div className="flex items-center justify-between h-10 w-24 min-w-24 rounded-lg border border-[#2c2c30]">
                        <button
                          className="h-full flex items-center justify-between p-2 cursor-pointer rounded-tl-lg rounded-bl-lg text-base hover:bg-red-600 transition-all"
                          onClick={() => handleRemoveExtra(acrescimo.id)}
                        >
                          <Minus />
                        </button>
                        <span className="text-base">{extraQuantity}</span>
                        <button
                          className="h-full flex items-center justify-between p-2 cursor-pointer rounded-tr-lg rounded-br-lg text-base hover:bg-red-600 transition-all"
                          onClick={() => handleAddExtra(acrescimo)}
                        >
                          <More />
                        </button>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="mt-6">
              <p>Observações</p>
              <textarea
                className="resize-none w-full p-3 h-20 bg-zinc-800 text-white outline-none rounded-md shadow-xl mt-2 placeholder:text-zinc-500"
                onChange={(e) => setObservations(e.target.value)}
                value={observations}
                maxLength={255}
                name="observations"
                id="observations"
                placeholder="Escreva aqui suas observações."
              ></textarea>
              <span className="flex justify-end">{`${observations.length}/255`}</span>
              <span>{observations}</span>
            </div>
          </div>

          <div className="flex flex-col py-4 px-7 text-white bg-[#222325] w-full sticky bottom-0 z-10 border border-[#2c2c30]">
            <div className="flex items-center justify-between">
              <div className="flex flex-col items-center justify-between gap-2">
                <span>Quantidade</span>

                <div className="flex items-center justify-between h-10 w-24 min-w-24 rounded-lg border border-[#2c2c30]">
                  <button
                    className="h-full flex items-center justify-between p-2 cursor-pointer rounded-tl-lg rounded-bl-lg text-base hover:bg-red-600 transition-all"
                    onClick={() => handleQuantityChange(-1)}
                  >
                    <Minus />
                  </button>
                  <span className="text-base">{quantity}</span>
                  <button
                    className="h-full flex items-center justify-between p-2 cursor-pointer rounded-tr-lg rounded-br-lg text-base hover:bg-red-600 transition-all"
                    onClick={() => handleQuantityChange(1)}
                  >
                    <More />
                  </button>
                </div>
              </div>

              <div>
                <button
                  className="flex items-center p-6 bg-red-600 rounded-xl gap-3 ml-8 hover:scale-110 transition-all"
                  onClick={handleAddToCart}
                >
                  <span className="text-lg">Adicionar</span>
                  <span className="text-lg">
                    {totalPrice.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalTest;
