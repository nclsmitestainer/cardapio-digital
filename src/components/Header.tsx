// Icons
import Menu from "../assets/menu.svg";
import Cart from "../assets/cart.svg";
import Person from "../assets/person.svg";
import { useData } from "../contexts/UserContext";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex items-center justify-between h-24 shadow-lg">
      <div className="flex items-center ml-2 lg:ml-7">
        <button className="p-2">
          <Menu />
        </button>
        <h1 className="text-2xl text-white border-b-2 border-red-600">
          Lanchonete
        </h1>
      </div>

      <div className="flex items-center mr-2 lg:mr-7 gap-5">
        <button className="p-2">
          <Person />
        </button>
        <NavLink
          to="/cart"
          className="bg-red-600 p-3 rounded-full hover:bg-red-900 transition-all duration-300"
        >
          <Cart />
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
