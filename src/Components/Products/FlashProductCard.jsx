import { Link } from "react-router";
import CartBtn from "../Share/CartBtn";

const FlashProductCard = ({ product }) => {
  const {
      id,
      title,
      image,
      category,
      price,
      discountPercentage
  } = product;
  const discountPrice = price - (price * discountPercentage) / 100;

  return (
    <div className="transition border border-[#ececec] rounded hover:shadow-new hover:border-[#BCE3C9] bg-white">
      <Link to={`/product/${id}`}>
        <img src={image} alt={title} />
      </Link>
      <div className="p-2 flex flex-col space-y-1 pb-3">
        <span className="text-sm text-gray-500 font-brand capitalize">
          {category}
        </span>
        <h4 className="font-brand text-lg text-stone-950 font-semibold leading-[20px] h-[38px] overflow-hidden">
          <Link to={`/product/${id}`}>{title}</Link>
        </h4>
        <div className="flex flex-col md:flex-row items-start md:items-center md:justify-between space-y-2 md:space-y-0 md:space-x-1 pb-1">
          <div className="flex items-center space-x-2">
            <span className="font-lg font-brand font-bold text-slate-900">
              ${Math.round(discountPrice)}
            </span>
            <span className="font-base font-brand line-through text-gray-600">
              ${price}
            </span>
          </div>
        </div>
        <CartBtn text="Add to Bag" product={product} />
      </div>
    </div>
  );
};

export default FlashProductCard;