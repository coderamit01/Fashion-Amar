import PropTypes from "prop-types";
import { Link } from "react-router";

const SmallProductCard = ({product}) => {
  const {id,title,thumbnail,discountPercentage,category,price} = product;
  return (
    <div className="flex space-x-2">
      <Link to={`/product/${id}`} className="bg-[#efefef] p-1 flex items-center justify-center rounded">
        <img className="w-18 h-18 object-contain" src={thumbnail} alt={title} />
      </Link>
      <div className="space-y-1">
      <h5 className="transition-colors font-brand font-semibold text-lg leading-lg text-fblack line-clamp-2 hover:text-brand"><Link to={`/product/${id}`}>{title}</Link></h5>
        <p className="text-slate-600 font-brand text-base font-semibold">৳{price}</p>
      </div>
    </div>
  );
};


SmallProductCard.propTypes = {
  product: PropTypes.object.isRequired
}
export default SmallProductCard;