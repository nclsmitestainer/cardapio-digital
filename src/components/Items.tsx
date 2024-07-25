import ItemCard from "./ItemCard"
import cardapio from '../data/cardapio.json'
import { useData } from "../contexts/UserContext"
import { useMemo } from "react"

export interface ItemProps {
  id: number
  name: string
  price: number
  category: string
  description: string
}

const menu: ItemProps[] = cardapio


const Items = () => {
  const {categoryActive} = useData()

  const filteredItems = useMemo(
  () => menu.filter((item) => item.category === categoryActive),
  [categoryActive]
);

  return (
    <div className="flex flex-wrap gap-4 mx-7 mt-4">
      {filteredItems
      .filter((item) => item.category === categoryActive)
      .map((item) => (<ItemCard key={item.id} item={item} />))}
    </div>
  )
}

export default Items