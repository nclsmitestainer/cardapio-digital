import ItemCard from "./ItemCard";
import menu, { MenuItem } from "../data/data";
import { useData } from "../contexts/UserContext";
import { useCallback, useEffect, useState } from "react";
import ModalAdd from "./ModalAdd";

const Items = () => {
  const { categoryActive } = useData();
  const [items, setItems] = useState<MenuItem[]>([]);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [open, setOpen] = useState(false);

  const getItems = useCallback((category: string) => {
    if (category === "todas") {
      const allItems = Object.entries(menu)
        .filter(([key]) => key !== "acrescimos")
        .flatMap(([_, items]) => items);
      setItems(allItems);
    } else {
      const categoryItems = menu[category as keyof typeof menu];
      if (Array.isArray(categoryItems)) {
        setItems(categoryItems);
      } else {
        setItems([]);
      }
    }
  }, []);

  useEffect(() => {
    getItems(categoryActive);
  }, [categoryActive, getItems]);

  const handleItemClick = (item: MenuItem) => {
    setSelectedItem(item);
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
    setSelectedItem(null);
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 mx-2 lg:mx-7 mt-4">
      {items.map((item) => (
        <ItemCard
          key={item.id}
          item={item}
          onClick={() => handleItemClick(item)}
        />
      ))}
      {open && selectedItem && (
        <ModalAdd item={selectedItem} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default Items;
