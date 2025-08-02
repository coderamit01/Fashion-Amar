import { Link } from "react-router";
import CartBtn from "../Share/CartBtn";
import { useCart } from "../../services/Store";

const ProductCard = ({ product }) => {
  const {
    id,
    title,
    thumbnail,
    rating,
    category,
    price,
    discountPercentage,
    brand,
  } = product;
  const addCart = useCart((state) => state.addCart);
  const discountPrice = price - (price * discountPercentage) / 100;

  return (
    <div className="transition border border-[#ececec] rounded hover:shadow-new hover:border-[#BCE3C9] bg-white">
      <Link to={`/product/${id}`}>
        <img src={thumbnail} alt={title} />
      </Link>
      <div className="p-2 flex flex-col space-y-1 pb-3">
        <span className="text-sm text-gray-500 font-brand capitalize">
          {category}
        </span>
        <h4 className="font-brand text-lg text-stone-950 font-semibold leading-[20px] h-[38px] overflow-hidden">
          <Link to={`/product/${id}`}>{title}</Link>
        </h4>
        <span className="text-sm text-gray-500 font-brand capitalize">
          Rating: ({rating})
        </span>
        <span className="text-sm text-gray-500 font-brand capitalize">
          {brand && `By: ${brand}`}
        </span>
        <div className="flex flex-col md:flex-row items-start md:items-center md:justify-between space-y-2 md:space-y-0 md:space-x-1 pb-1">
          <div className="flex items-center space-x-2">
            <span className="font-base font-brand line-through text-gray-600">
              ৳{price}
            </span>
            <span className="font-lg font-brand font-bold text-[#5CAF90]">
              ৳{Math.round(discountPrice)}
            </span>
          </div>
        </div>
        <CartBtn text="Add to Bag" product={product} />
      </div>
    </div>
  );
};

export default ProductCard;
