import { FiShoppingCart } from "react-icons/fi";

const CartBtn = ({text}) => {
  return (
    <button className="transition bg-[#DEF9EC] hover:bg-[#3BB77E] text-[#3BB77E] hover:text-white flex items-center justify-center space-x-1 text-brand text-base w-full py-[6px] px-2 rounded cursor-pointer">
      <FiShoppingCart /> <span>{text}</span>
    </button>
  );
};

export default CartBtn;