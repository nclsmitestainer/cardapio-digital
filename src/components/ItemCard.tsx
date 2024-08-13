import { MenuItem } from "../data/data";

interface ItemCardProps {
  item: MenuItem;
  onClick: () => void;
}

const ItemCard = ({ item, onClick }: ItemCardProps) => {
  return (
    <div
      className="bg-[#1E1E1F] rounded-md border-2 border-transparent hover:border-gray-500 transition-all duration-150 w-[477px] cursor-pointer"
      onClick={onClick}
    >
      <div className="flex justify-between gap-4 p-4">
        <div className="text-white flex flex-col justify-between max-w-72">
          <div>
            <h3 className="capitalize text-lg xl:mb-5 line-clamp-2">
              {item.name}
            </h3>
            <p className="capitalize text-sm text-gray-300 mb-2 line-clamp-3">
              {item.description}
            </p>
          </div>
          <span className="text-base font-semibold">
            {item.price?.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </div>

        <div className="w-28 h-28 self-center xl:w-48 xl:h-48 border-[1px] border-red-600 flex-none rounded-md">
          <img
            className="w-28 h-28 xl:w-48 xl:h-48 p-2 object-cover rounded-md"
            src={`/${item.name}Resultado.webp`}
            alt={item.name}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
