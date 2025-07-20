import { FaRegUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router";
import TopBar from "./TopBar";
import { IoSearchOutline } from "react-icons/io5";

const Header = () => {
  return (
    <div>
      <TopBar />
      <div className="bg-white py-3">
      <div className="fashion-container">
        <div className="flex items-center justify-between space-x-2">
          <h2 className="text-3xl font-brand font-bold"><Link to="/">Amar <span className="text-brand">Bazar</span></Link></h2>
        <div className="border border-slate-300 rounded w-6/12 relative hidden md:block">
          <IoSearchOutline className="absolute top-[10px] left-1 text-xl font-brand text-slate-500" />
          <input type="text" className="py-2 pr-3 pl-7 focus:outline-0 w-full" placeholder="Type Something.." />
          <button className="font-brand text-base font-semibold leading-4 bg-brand text-white py-2 px-2 rounded cursor-pointer absolute right-2 top-1" >Search</button>
        </div>
        <div className="flex items-center space-x-6">
          <div className="relative">
            <span className="inline-flex w-5 h-5 items-center justify-center bg-brand text-white font-brand text-sm font-semibold rounded-full absolute top-[-8px] right-[-12px]">5</span>
            <Link to='/shop'><FiShoppingCart className="text-xl cursor-pointer" /></Link>
          </div>
          <FaRegUser className="text-xl cursor-pointer" />
        </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Header;