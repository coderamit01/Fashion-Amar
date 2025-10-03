import { IoClose } from "react-icons/io5";
import { Link } from "react-router";


const TopBar = () => {
  return (
    <div className="bg-brand py-2 relative">
      <div className="fashion-container">
        <div className="flex items-center justify-center space-x-1">
          <p className="text-white font-inter text-sm text-center">Welcome to Amar Bazar <Link to="/shop" className="italic underline">Shop Now</Link></p>
        <IoClose className="text-white text-xl" />
        </div>
      </div>
    </div>
  );
};

export default TopBar;