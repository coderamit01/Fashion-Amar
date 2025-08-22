import { FaRegTrashCan } from "react-icons/fa6";
import PrimaryBtn from "../Share/PrimaryBtn";
import { MdOutlineClose } from "react-icons/md";
import { useCart } from "../../services/Store";
import { FiMinus, FiPlus } from "react-icons/fi";

const SideCart = ({ handleSidecart, sideCartOpen }) => {
  const cart = useCart((state) => state.cart);
  const removeProduct = useCart((state) => state.removeCart);

  return (
    <div
      className={
        sideCartOpen
          ? "transition-all ease-in-out duration-300 h-screen fixed w-85 bg-white right-0 top-0 shadow z-50"
          : "transition-all ease-in-out duration-300 h-screen fixed w-85 bg-white right-0 top-0 shadow z-50"
      }
    >
      <div className="flex flex-col justify-between h-full relative">
        {/* <div className="relative h-full"> */}
        <MdOutlineClose
          onClick={() => handleSidecart()}
          className="text-2xl absolute left-3 top-3"
        />
        <div className="flex-1 justify-baseline h-full p-3 mt-11 mb-22 overflow-y-scroll no-scrollbar">
          <div className="flex flex-col space-y-3">
            {cart.map((product) => (
              <div key={product.id} className="flex items-center space-x-3">
                <div className="h-24 w-24">
                  <img
                    className="w-full"
                    src={product.thumbnail}
                    alt={product.title}
                  />
                </div>
                <div className="w-full">
                  <h5 className="text-base font-semibold font-brand">
                    {product.title}
                  </h5>
                  <div className="flex items-center justify-between w-full">
                    <div>
                      <p className="font-brand">2 x {product.price} tk</p>
                      <p className="font-brand pb-1">300tk</p>
                      <div className="flex items-center justify-between bg-slate-300 rounded">
                        <span className="px-1 cursor-pointer">
                          <FiMinus />
                        </span>
                        <span className="px-1">1</span>
                        <span className="px-1 cursor-pointer">
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
          {console.log(cart)}
          <PrimaryBtn text="Cart" />
          <PrimaryBtn text="Continue Checkout" />
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default SideCart;
