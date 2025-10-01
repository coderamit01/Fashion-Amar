import { Link } from "react-router";
import CartBtn from "../Share/CartBtn";
import DiscountLabel from "../Share/DiscountLabel";
import PropTypes from "prop-types";

const FlashProductCard = ({ product }) => {
  const { id, title, slug, image, category, price, discountPercentage } = product;
  const discountPrice = price - (price * discountPercentage) / 100;

  return (
    <div className="transition border border-[#ececec] rounded-xl hover:shadow-new hover:border-[#BCE3C9] bg-white relative flex flex-col justify-between h-full">
      <div className="pb-[6px]">
        <Link to={`/product/${slug}`}>
          <img src={image} alt={title} />
        </Link>
        <DiscountLabel discount={discountPercentage} />
        <div className="px-3 pt-3 flex flex-col justify-between space-y-[6px]">
          <span className="text-sm text-gray-500 font-brand capitalize">
            {category}
          </span>
          <h4 className="transition font-brand text-base text-stone-950 hover:text-brand font-semibold leading-[20px] ">
            <Link to={`/product/${id}`}>{title}</Link>
          </h4>
          <div className="flex flex-col md:flex-row items-start md:items-center md:justify-between space-y-2 md:space-y-0 md:space-x-1 pb-1">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-brand font-semibold text-stone-900">
                ${Math.round(discountPrice)}
              </span>
              <span className="text-base font-brand line-through text-gray-600">
                ${price}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="px-3 pb-3">
      <CartBtn text="Add to Bag" product={product} />
      </div>
    </div>
  );
};

FlashProductCard.propTypes = {
  product: PropTypes.object.isRequired
}


export default FlashProductCard;
