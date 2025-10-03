import { FaRegTrashCan } from "react-icons/fa6";
import PrimaryBtn from "../Share/PrimaryBtn";
import { MdOutlineClose } from "react-icons/md";
import { useCart } from "../../services/Store";
import { FiMinus, FiPlus } from "react-icons/fi";
import { sidebar } from "../../utils/sidebarUtils";
import { useEffect } from "react";
import { useLocation } from "react-router";

const SideCart = () => {
  const cart = useCart((state) => state.cart);
  const increaseCart = useCart((state) => state.increaseCart);
  const decreaseCart = useCart((state) => state.decreaseCart);
  const removeProduct = useCart((state) => state.removeCart);
  const { isSidebarOpen, closeSidebar } = sidebar();
  const location = useLocation();


  useEffect(() => {
    closeSidebar();
  }, [location.pathname, closeSidebar])
  return (
    <div
      className={`transition-all ease-in-out duration-300 h-screen fixed w-85 bg-white top-0 shadow z-50
        ${isSidebarOpen ? " right-0" : "-right-full"}`}
    >
      <div className="flex flex-col justify-between h-full relative">
        {/* <div className="relative h-full"> */}
        <MdOutlineClose
          onClick={closeSidebar}
          className="text-2xl absolute left-3 top-3"
        />
        <div className="flex-1 justify-baseline h-full p-3 mt-11 mb-22 overflow-y-scroll no-scrollbar">
          <div className="flex flex-col space-y-3">
            {cart.map((product) => (
              <div key={product.id} className="flex items-center space-x-3">
                <div className="h-24 w-24">
                  <img
                    className="w-full"
                    src={product.image}
                    alt={product.title}
                  />
                </div>
                <div className="w-full">
                  <h5 className="text-base font-semibold font-brand">
                    {product.title}
                  </h5>
                  <div className="flex items-center justify-between w-full">
                    <div>
                      <p className="font-brand">{product.quantity} x {product.price} tk</p>
                      <p className="font-brand pb-1">{Math.floor((product.quantity) * (product.price))}tk</p>
                      <div className="flex items-center justify-between bg-slate-300 rounded">
                        <span onClick={() => decreaseCart(product.id)} className="px-1 cursor-pointer">
                          <FiMinus />
                        </span>
                        <span className="px-1">{product.quantity}</span>
                        <span onClick={() => increaseCart(product.id)} className="px-1 cursor-pointer">
                          <FiPlus />
                        </span>
                      </div>
                    </div>
                    <FaRegTrashCan
                      onClick={() => removeProduct(product.id)}
                      className="cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full bg-white flex flex-col flex-1 justify-end items-stretch space-y-2 absolute bottom-0 px-3">
          <PrimaryBtn url="/cart" text="Cart" />
          <PrimaryBtn url="/checkout" text="Continue Checkout" />
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default SideCart;
