import { NavLink } from "react-router-dom";
import Arrow from "../assets/arrow.svg";
import Person from "../assets/person.svg";

const CartHeader = () => {
  return (
    <header className="flex items-center justify-between h-24 shadow-lg">
      <div className="p-3 ml-4">
        <NavLink to="/">
          <Arrow />
        </NavLink>
      </div>

      <div>
        <h2 className="text-white text-2xl font-semibold">Seu carrinho.</h2>
      </div>

      <div className="p-3 mr-4">
        <NavLink to="/">
          <Person />
        </NavLink>
      </div>
    </header>
  );
};

export default CartHeader;
