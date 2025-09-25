import { FiShoppingCart } from "react-icons/fi";
import { useCart } from "../../services/Store";

const CartBtn = ({ text,product }) => {
  const addCart = useCart((state) => state.addCart);
  return (
    <div className="flex justify-start">
    <button onClick={() => addCart(product)} className="transition bg-[#DEF9EC] hover:bg-[#3BB77E] text-[#3BB77E] font-semibold hover:text-white inline-flex items-center justify-center space-x-1  font-brand text-base  py-[6px] px-4 rounded cursor-pointer">
      <FiShoppingCart /> <span>{text}</span>
    </button>
    </div>
  );
};

export default CartBtn;