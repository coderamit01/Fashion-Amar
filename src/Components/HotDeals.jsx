import PropTypes from "prop-types";
import ProductCard from "./ProductCard";

const HotDeals = ({products}) => {

  const hotDealsProduct = products.filter(product => {
    const hotDeal = product.discountPercentage >= 10 ? product : false;
    return hotDeal;
  })

  return (
    <>
    {
      hotDealsProduct.slice(0,10).map((product) => (
        <ProductCard key={product.id} product={product} />
      ))
      
    }

    </>
  );
};


HotDeals.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired
}
export default HotDeals;