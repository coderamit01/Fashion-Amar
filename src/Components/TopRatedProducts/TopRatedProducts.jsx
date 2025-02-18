import PropTypes from "prop-types";
import SmallProductCard from "../SmallProductCard/SmallProductCard";

const TopRatedProducts = ({ products }) => {
  const topRatedProducts = products.sort((a, b) => b.rating - a.rating).slice(0, 5);
  return (
    <div className="flex flex-col gap-3">
      {
        topRatedProducts.map((product) => (<SmallProductCard key={product.id} product={product} />))
      }
    </div>
  );
};
TopRatedProducts.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired
}
export default TopRatedProducts;