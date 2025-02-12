import PropTypes from "prop-types";
import ProductCard from "./ProductCard";

const HotDeals = ({products}) => {
  const row = [];
  products.filter(product => {
    const hotDeal = product.discountPercentage >= 10 ? product : false;
    return hotDeal;
  }).slice(0,10).map((product) => (
    row.push(<ProductCard key={product.id} product={product} />)
  ));

  return (
    <>
    {
      row.length > 0 ? (
        row
      ) : <p className="text-slate-900 font-semibold text-2xl text-center">Products are not available</p>
    }
    </>
  );
};


HotDeals.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired
}
export default HotDeals;