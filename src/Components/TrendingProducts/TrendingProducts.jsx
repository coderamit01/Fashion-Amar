import PropTypes from "prop-types";
import SmallProductCard from "../SmallProductCard/SmallProductCard";

const TrendingProducts = ({ products }) => {
  const trendingProducts = products.filter((product) => (
    product.rating >= 4 && product.reviews.some((review) => review.rating >= 4)
  )).slice(0, 5);
  return (
    <div className="flex flex-col gap-3">
      {
        trendingProducts.map((product) => (<SmallProductCard key={product.id} product={product} />))
      }
    </div>
  );
};
TrendingProducts.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired
}
export default TrendingProducts;