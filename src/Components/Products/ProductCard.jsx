import { Link } from "react-router";
import CartBtn from "../Share/CartBtn";
import DiscountLabel from "../Share/DiscountLabel";
import PropTypes from "prop-types";

const ProductCard = ({ product }) => {
  const {
    id,
    title,
    slug,
    image,
    category,
    price,
    discountPercentage,
  } = product;
  const discountPrice = price - (price * discountPercentage) / 100;

  return (
    <div className="transition border border-[#ececec] rounded-xl hover:shadow-new hover:border-[#BCE3C9] bg-white flex flex-col justify-between relative h-full">
      <div className="pb-[6px]">
        <Link to={`/product/${slug}`}>
          <img src={image} alt={title} />
        </Link>
        {discountPercentage && (
          <DiscountLabel discount={discountPercentage} />
        )}
        <div className="px-3 pt-3 flex flex-col space-y-1">
          <span className="text-sm text-gray-500 font-brand capitalize">
            {category}
          </span>
          <h4 className="font-brand text-base text-stone-950 font-semibold leading-[20px]">
            <Link to={`/product/${id}`}>{title}</Link>
          </h4>
          <div className="flex flex-col md:flex-row items-start md:items-center md:justify-between space-y-2 md:space-y-0 md:space-x-1 pb-1">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-brand font-semibold text-stone-900">
                ${discountPercentage ?
                  (Math.round(discountPrice)) : price
                }
              </span>
              <span className="font-base font-brand line-through text-gray-600">
                {discountPercentage && `$${price}` }
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

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
}


export default ProductCard;
