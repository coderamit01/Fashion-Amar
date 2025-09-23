import { FaRegUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { Link, NavLink } from "react-router";
import TopBar from "./TopBar";
import { useCart } from "../../services/Store";
import { useState } from "react";
import SideCart from "../Sidecart/SideCart";
import { sidebar } from "../../utils/sidebarUtils";

const Header = () => {
  const cart = useCart((state) => state.cart);
  const [sideCartOpen, setSideCartOpen] = useState(false);
  const { openSidebar } = sidebar();
  const handleSidecart = () => {
    setSideCartOpen(!sideCartOpen);
  };

  const menuItems = [
    { name: "Home", url: "/" },
    { name: "Shop", url: "/shop" },
    { name: "About Us", url: "/about-us" },
    { name: "Contact us", url: "/contact-us" },
  ];
  return (
    <div className="shadow">
      <TopBar />
      <div className="bg-white py-3">
        <div className="fashion-container">
          <div className="flex items-center justify-between space-x-2">
            <h2 className="text-3xl font-brand font-bold">
              <Link to="/">
                Amar<span className="text-brand">Bazar</span>
              </Link>
            </h2>
            <div className="hidden md:flex items-center space-x-4">
              {menuItems.map((menu,idx) => (
                <NavLink key={idx}
                  to={menu.url}
                  className={({ isActive }) => isActive ? "text-brand" : "text-slate-700" } >
                  {menu.name}
                </NavLink>
              ))}
            </div>
            <div className="flex items-center space-x-6">
              <div onClick={openSidebar} className="relative">
                <span className="inline-flex w-5 h-5 items-center justify-center bg-brand text-white font-brand text-sm font-semibold rounded-full absolute top-[-8px] right-[-12px]">
                  {cart.length}
                </span>
                <FiShoppingCart className="text-xl cursor-pointer" />
              </div>
              <FaRegUser className="text-xl cursor-pointer" />
              <SideCart
                handleSidecart={handleSidecart}
                sideCartOpen={sideCartOpen}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

