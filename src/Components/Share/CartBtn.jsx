import { FiShoppingCart } from "react-icons/fi";

const CartBtn = ({text}) => {
  return (
    <button className="transition bg-[#DEF9EC] hover:bg-[#3BB77E] hover:text-white w-full flex md:w-auto md:inline-flex items-center justify-center space-x-1 text-brand font-brand text-base  py-[6px] px-4 rounded cursor-pointer">
      <FiShoppingCart /> <span>{text}</span>
    </button>
  );
};

export default CartBtn;