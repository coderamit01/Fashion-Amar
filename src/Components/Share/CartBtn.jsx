import { FiShoppingCart } from "react-icons/fi";

const CartBtn = ({text}) => {
  return (
    <div className="flex justify-start">
    <button className="bg-[#3BB77E] text-white inline-flex items-center justify-center space-x-1  font-brand text-base  py-[6px] px-4 rounded cursor-pointer">
      <FiShoppingCart /> <span>{text}</span>
    </button>
    </div>
  );
};

export default CartBtn;