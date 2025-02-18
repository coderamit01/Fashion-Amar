import SmallProductCard from "../SmallProductCard/SmallProductCard";
import PropTypes from "prop-types";

const TopSelling = ({products}) => {
  const topSellingProducts = products.sort((a,b) => a.stock - b.stock).slice(0,5);
  return (
    <div className="flex flex-col gap-3">
      {
        topSellingProducts.map((product) => (<SmallProductCard key={product.id} product={product} />))
      }
      {console.log(products)}
    </div>
  );
};

TopSelling.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired
}
export default TopSelling;