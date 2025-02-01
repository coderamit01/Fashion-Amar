import CartBtn from "./Share/CartBtn";
import { Link } from "react-router";


const ProductCard = ({ product }) => {
  const { title, thumbnail, rating, category, price, discountPercentage,brand } = product;
  const discountPrice = price - (price * discountPercentage) / 100;
  return (
    <div className="transition border border-[#ececec] rounded hover:shadow-new hover:border-[#BCE3C9] bg-white">
      <Link to="/"><img src={thumbnail} alt={title} /></Link>
      <div className="p-2 flex flex-col space-y-1">
        <span className="text-sm text-gray-500 font-brand capitalize">{category}</span>
        <h4 className="font-brand text-lg text-stone-950 font-semibold leading-[20px] h-[38px] overflow-hidden"><Link to="/">{title}</Link></h4>
        <span className="text-sm text-gray-500 font-brand capitalize">Rating: ({rating})</span>
        <span className="text-sm text-gray-500 font-brand capitalize">By: {brand}</span>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="font-base font-brand line-through text-gray-600">৳{price}</span>
            <span className="font-lg font-brand font-bold text-[#5CAF90]">৳{Math.round(discountPrice)}</span>
          </div>
          <CartBtn text="Add" />
        </div>
      </div>

    </div>
  );
};

export default ProductCard;