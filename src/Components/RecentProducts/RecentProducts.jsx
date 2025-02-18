import PropTypes from "prop-types";
import SmallProductCard from "../SmallProductCard/SmallProductCard";


const RecentProducts = ({products}) => {
  const recentProducts = products.sort((a,b) => new Date(b.meta.createdAt) - new Date(a.meta.createdAt)).slice(0,5);
  return (
    <div className="flex flex-col gap-3">
      {
        recentProducts.map((product) => (<SmallProductCard key={product.id} product={product} />))
      }
    </div>
  );
};
RecentProducts.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired
}
export default RecentProducts;