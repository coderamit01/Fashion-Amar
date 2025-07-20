import { IoClose } from "react-icons/io5";
import { Link } from "react-router";


const TopBar = () => {
  return (
    <div className="bg-brand py-2 relative">
      <div className="fashion-container">
        <p className="text-white font-inter text-sm text-center">Welcome to Amar Fashion <Link to="/" className="italic underline">Shop Now</Link></p>
        <IoClose className="text-white absolute right-2 top-2 text-xl" />
      </div>
    </div>
  );
};

export default TopBar;