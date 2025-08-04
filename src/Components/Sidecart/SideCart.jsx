import { Link } from "react-router";
import PrimaryBtn from "../Share/PrimaryBtn";
import { MdOutlineClose } from "react-icons/md";

const SideCart = ({ handleSidecart, sideCartOpen }) => {
  return (
    <div className={sideCartOpen ? "transition-all ease-in-out duration-300 h-screen fixed w-85 bg-white right-0 top-0 p-3 shadow" : "transition-all ease-in-out duration-300 h-screen fixed w-85 bg-white -right-full top-0 p-3 shadow"}>
      <div className="flex flex-col justify-between h-full">
        <div className="flex-1 justify-baseline">
          <MdOutlineClose
            onClick={() => handleSidecart()}
            className="text-2xl"
          />
        </div>
        <div className="flex flex-col flex-1 justify-end items-stretch space-y-2">
          <PrimaryBtn text="Cart" />
          <PrimaryBtn text="Continue Checkout" />
        </div>
      </div>
    </div>
  );
};

export default SideCart;
